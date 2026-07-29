import React from 'react'
import "../styles/Interview_details.css";
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { duration } from '@mui/material/styles';
function Inteview_details() {
  const [domain,setDomain]=useState("");
  const [Difficulty ,setDifficulty]=useState("");
  const [time,setTime]=useState();
  const navigate=useNavigate();
  return (
    <div>
      <h1>Interview Setup</h1>
      <p style={{color:"gray"}}>Configure your AI interview session and start when ready.</p>
      <div className='contents'>
        {/*interview Type*/}
        <div className='domains'>
          <div>
          <h3 style={{color:"rgba(12, 141, 98, 0.9)"}}>Interview Type</h3>
          <p style={{fontSize:"small",color:"gray"}}>Choose the type of interview you want to practice</p>
          </div>
          <div className='interview_domain'>
          <div className='cards' onClick={()=>setDomain("Software Development")}>
            <h5>Software Development</h5>
          </div>
           <div className='cards' onClick={()=>setDomain("AIML")}>
            <h5>AIML</h5>
          </div>
           <div className='cards' onClick={()=>setDomain("Data & Analytics")}>
            <h5>Data & Analytics</h5>
          </div>
           <div className='cards' onClick={()=>setDomain("Cloud & DevOps")}>
            <h5>Cloud & DevOps</h5>
          </div>
           <div className='cards' onClick={()=>setDomain("Cybersecurity")}>
            <h5>Cybersecurity</h5>
          </div>
           <div className='cards' onClick={()=>setDomain("Testing & QA")}>
            <h5>Testing & QA</h5>
          </div>
           <div className='cards' onClick={()=>setDomain("Database & Systems")}>
            <h5>Database & Systems</h5>
          </div>
           <div className='cards' onClick={()=>setDomain("Networking & Systems")}>
            <h5>Networking & Systems</h5>
          </div>
           <div className='cards'onClick={()=>setDomain("UI/UX Design")}>
            <h5>UI/UX Design</h5>
          </div>
          <div className='cards' onClick={()=>setDomain("Product Management")}>
            <h5>Product Management</h5>
          </div>
          <div className='cards' onClick={()=>setDomain("Emerging Technologies")}>
            <h5>Emerging Technologies</h5>
          </div>
          <div className='cards' onClick={()=>setDomain("Fresher / Internship")}>
            <h5>Fresher / Internship</h5>
          </div>
        </div>
        </div>
        {/*Difficulty*/}
         <div className='domains'>
          <div>
          <h3 style={{color:"rgba(12, 141, 98, 0.9)"}}>Difficulty Level</h3>
          <p style={{fontSize:"small",color:"gray"}}>How challenging should the questions be?</p>
          </div>
          <div className='interview_domain'>
          <div className='cards'  onClick={()=>setDifficulty("Easy")}>
            <h5>Easy</h5>
          </div>
           <div className='cards' onClick={()=>setDifficulty("Medium")}>
            <h5>Medium</h5>
          </div>
           <div className='cards' onClick={()=>setDifficulty("Hard")}>
            <h5>Hard</h5>
          </div>
        </div>
        </div>
        {/*Duration*/}
        <div className='domains'>
          <div>
          <h3 style={{color:"rgba(12, 141, 98, 0.9)"}}>Duration</h3>
          <p style={{fontSize:"small",color:"gray"}}>How long should the interview last?</p>
          </div>
          <div className='interview_domain'>
          <div className='cards'  onClick={()=>setTime(15)}>
            <h5>15 min</h5>
          </div>
           <div className='cards'  onClick={()=>setTime(30)}>
            <h5>30 min</h5>
          </div>
           <div className='cards'  onClick={()=>setTime(45)}>
            <h5>45 min</h5>
          </div>
        </div>
        </div>
        {/* Start interview */}
        <div className='domains1'>
          <div>
          <h3 style={{color:"rgba(12, 141, 98, 0.9)"}}>Ready to begin?</h3>
          {domain && Difficulty && time && <p style={{fontSize:"small",color:"gray"}}>{domain} | {Difficulty} | {time}min</p>}
          </div>
          <button className='start-btn'>Start Interview</button>
        </div>
      </div>
    </div>
  )
}

export default Inteview_details;
