import React from 'react'
import "../styles/Resume.css";
import { useState } from 'react';
function Resume() {
    const [resume, setResume] = useState(null);
    const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
        setResume(file);
    }
};
  return (
    <div>
      <h1>Resume Analysis</h1>
      <p style={{color:"gray"}}>Upload your resume for instant AI-powered analysis and interview practice.</p>
      <div className='uploadDiv'>
        <div className='upload'>
            <div className='main'>
                <p className='bold'><b>Drop your resume here</b></p>
                <p className='small'>Supports PDF,DOC,DOCX upto 5MB</p>
                 <input
            type="file"
            id="resumeUpload"
            accept=".pdf,.doc,.docx"
            hidden
            onChange={handleFileChange}
        />

        <button
            className="upload-btn"
            onClick={() => document.getElementById("resumeUpload").click()}
        >
            Browse Files
        </button>

        {resume && <p className='small'>{resume.name}</p>}
            </div>
      </div>
      </div>
    </div>
  )
}

export default Resume;
