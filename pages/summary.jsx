import React, { Fragment, useRef, useState } from 'react'
import Navigationbar from './components/navigationbar'
import { FolderUp, PlusCircleIcon } from 'lucide-react'
import axios from 'axios';

export default function Summary() {
  const [summary, setSummary] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);


  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setSelectedFiles(files);
    }
  };


  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFiles(files);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };


  const handleSummarize = (file) => {

    console.log(`Summarizing file: ${file.name}`);

    const formData = new FormData();
    formData.append("file", file);


    axios
      .post("/api/summarize", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const summary = response.data.text;
        setSummary(summary);
        console.log("Summarization result:", summary);
        alert(`Summary for ${file.name}: ${summary}`);
      })
      .catch((error) => {
        console.error("Error summarizing the file:", error);
        alert(`Failed to summarize ${file.name}`);
      });
  };
  return (
    <Fragment>
      <main className='w-full min-h-screen bg-slate-100'>
        <Navigationbar />
        <div className="container px-36 py-24">
          {!summary ? (
            <div
              className="upload bg-slate-200 rounded-lg border-spacing-1 flex-col border-dashed border-2 border-blue-500 w-[100%] h-[60vh] flex items-center justify-center"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <FolderUp size={72} color='#172954' />


              <button
                type="button"
                className='bg-blue-500 text-white px-4 py-2 flex flex-row space-x-2 m-3 rounded-lg'
                onClick={() => fileInputRef.current.click()}
              >
                <PlusCircleIcon /> <p>Select files</p>
              </button>


              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf, .docx"
                className="hidden"
                onChange={handleFileChange}
                multiple
              />

              <div className="txt flex items-center justify-center flex-col space-y-2">
                <p className='text-[#172954]'>
                  Add <span className='font-bold'>PDF</span> and <span className='font-bold'>Word</span> files only.
                </p>
                <div className='text-[#172954]'>
                  Supported formats:
                  <ul className="tags flex flex-row space-x-2">
                    <li className='bg-yellow-100 rounded-xl font-semibold px-3 my-2 py-0.9 '>.pdf</li>
                    <li className='bg-yellow-100 rounded-xl font-semibold px-3 my-2 py-0.9 '>.docx</li>
                  </ul>
                </div>
              </div>


            </div>
          ) : (
            <div className="p-4 bg-blue-50 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-blue-700 mb-3">Summary</h2>
              <textarea
                className="w-full h-[50vh] p-3 bg-white border border-blue-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={summary}
                readOnly
              />
              <button
              onClick={() => setSummary(null)}
                className='bg-blue-500 text-white px-4 py-2 flex flex-row space-x-2 m-3 rounded-lg'>Select New Document</button>
            </div>
          )}

          <div className="files flex flex-col">
            {selectedFiles.length > 0 && (
              <div className="selected-files mt-4">
                <p className='text-[#172954]'>Selected files:</p>
                <ul className="file-list">
                  {Array.from(selectedFiles).map((file, index) => (
                    <li key={index} className="bg-blue-100 rounded-xl font-semibold px-6 py-2 my-1 flex justify-between items-center">
                      <span>{file.name}</span>
                      <button
                        type="button"
                        className="bg-blue-500 text-white px-4 py-1 rounded-lg ml-4"
                        onClick={() => handleSummarize(file)}
                      >
                        Summarize
                      </button>
                    </li>


                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </Fragment>
  );
}
