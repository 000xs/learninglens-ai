import { IncomingForm } from "formidable"; // Correct import for the latest version
import fs from "fs/promises";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const splitTextIntoChunks = (text, maxTokens = 16385) => {
  const words = text.split(" ");
  let chunks = [];
  let currentChunk = [];

  let currentTokens = 0;
  for (let word of words) {
    const tokenCount = word.length / 4;
    currentTokens += tokenCount;

    if (currentTokens > maxTokens) {
      chunks.push(currentChunk.join(" "));
      currentChunk = [word];
      currentTokens = tokenCount;
    } else {
      currentChunk.push(word);
    }
  }

  if (currentChunk.length > 0) {
    chunks.push(currentChunk.join(" "));
  }

  return chunks;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new IncomingForm(); // Use IncomingForm from the correct import

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "File parsing error", details: err.message });
      }

      try {
        const file = files.file;
        if (!file || !file[0]) {
          return res.status(400).json({ error: "No file uploaded" });
        }

        const uploadedFile = file[0];
        const fileBuffer = await fs.readFile(uploadedFile.filepath); // Ensure you are reading the right file

        if (!fileBuffer) {
          return res
            .status(400)
            .json({ error: "Error reading the file, it may be corrupted" });
        }

        let extractedText = "";

        if (uploadedFile.mimetype === "application/pdf") {
          const pdfData = await pdfParse(fileBuffer);
          extractedText = pdfData.text;
        } else if (
          uploadedFile.mimetype ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
          const docxData = await mammoth.extractRawText({ buffer: fileBuffer });
          extractedText = docxData.value;
        } else {
          return res.status(400).json({
            error: "Unsupported file type. Only PDF and DOCX are supported.",
          });
        }

        const prompt = `
        You are a document summarizer with a focus on educational content.
        Please read the following chunk and summarize the key learning points, insights, and concepts.
        The summary should highlight the main ideas in a concise, easy-to-understand manner, with a focus on what can be learned from the content. 
        Avoid irrelevant details and focus on the core lessons.

        Chunk:
        ${splitTextIntoChunks(extractedText).join("\n\n")}
      `;

        const response = await openai.chat.completions.create({
          model: "gpt-4o-mini-2024-07-18",
          messages: [
            {
              role: "system",
              content: "You are a document summarizer focused on education.",
            },
            { role: "user", content: prompt },
          ],
        });

        return res
          .status(200)
          .json({ text: response.choices[0].message.content });
      } catch (error) {
        console.error("Error processing the file:", error);
        return res
          .status(500)
          .json({ error: "Error processing the file", details: error.message });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
