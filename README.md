<center><img src='https://cloud-jb50t64e5-hack-club-bot.vercel.app/0image.png' style='padding:20px;'></img></center>

# LearningLens AI Document Summarizer

LearningLens AI is a web-based application for summarizing educational documents like PDFs and Word files. It uses OpenAI's GPT models to extract concise, meaningful summaries focusing on the learning points from uploaded files.

---

## Features

- **File Support**: Upload and summarize PDF and DOCX files.
- **Advanced Summarization**: Extract key learning points and insights using OpenAI GPT models.
- **Responsive Design**: Modern, user-friendly interface optimized for all devices.
- **Drag-and-Drop Support**: Effortlessly upload files with drag-and-drop functionality.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/learninglens-ai.git
   ```
2. Navigate to the project folder:
   ```bash
   cd learninglens-ai
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables in a `.env.local` file:
   ```plaintext
   OPENAI_API_KEY=your_openai_api_key
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Drag and drop a PDF or DOCX file into the upload area.
3. Click the **Summarize** button to generate a summary.
4. View and copy the summarized content displayed on the screen.

---

## Project Structure

- **`pages/`**: Contains Next.js pages, including the main summary interface.
- **`components/`**: Reusable React components for the UI, like `Navigationbar` and upload elements.
- **`api/`**: Backend API for handling file uploads and text summarization.
- **`styles/`**: CSS and TailwindCSS files for styling the application.

---

## Technologies Used

- **Frontend**: React, Next.js, TailwindCSS
- **Backend**: Next.js API Routes, formidable for file parsing
- **AI Integration**: OpenAI GPT models for summarization
- **File Parsing**: `pdf-parse` and `mammoth` for extracting text from PDF and DOCX files

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [OpenAI](https://openai.com/) for their powerful GPT models.
- Libraries used: `pdf-parse`, `mammoth`, `formidable`, and more.

---

### Contact

For any queries or issues, feel free to reach out to the project maintainer at **hey@000xs.xyz**.
