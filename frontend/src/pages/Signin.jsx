import React, { useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Signin.css";
import Snackbar from '@mui/material/Snackbar';
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
export default function Signin() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const[error,setError]=React.useState("");
  const [message,setmessage]=React.useState("");
  const [open, setOpen] = React.useState(false);
  const {handleRegister,handleLogin}=React.useContext(AuthContext);
  
  const handleAuth=async(e)=>{
    e.preventDefault();
  console.log("Form submitted");
  if (!validateInputs()) return;
    try{
      if(!isSignup){
        let result=await handleLogin(email,password);
        console.log(result);
        setmessage(result);
        setError("");
        setOpen(true);
        setPassword("");
      setTimeout(() => {
    navigate("/profile");
  }, 1000);
      }
      if(isSignup){
        let result=await handleRegister(name,email,password);
        console.log(result);
        setmessage(result);
        setError("");
        setOpen(true);
        setIsSignup(false);
        setPassword("");
        setEmail("");
        setName("");
      }
    }
    catch(e){
      console.log(e);
      let message = e.response?.data?.message || "Something went wrong";
      setmessage(message);      
    }
  }

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-brand">
          <div className="brand-icon">
            <span>✦</span>
          </div>
          <Link className="brand-text" to="/">interviewIQ</Link>
        </div>

        <div className="hero-content">
          <h1>Master Technical Interviews with Your Personal AI Interviewer</h1>

          <ul className="benefits">
            <li>Realistic voice-based AI interviews</li>
            <li>Detailed feedback & confidence analysis</li>
            <li>Personalized learning roadmap</li>
            <li>Track progress with beautiful analytics</li>
          </ul>
        </div>

        {/* <div className="trusted-text">Trusted by 50,000+ candidates worldwide</div> */}
      </div>

      <div className="auth-right">
        <div className="form-card">
          <h2>{isSignup ? "Create account" : "Welcome back"}</h2>
          <p>
            {isSignup
              ? "Create your account to continue your interview practice"
              : "Sign in to continue your interview practice"}
          </p>

          <form className="auth-form" onSubmit={handleAuth}>
            {message?
             <p className="msg" style={{color:"red", fontSize:"15px" , width:"100%" ,display:"flex",justifyContent:"center", display:"block"}}>
              {message}
              </p>
            :<></>
            }
            {isSignup && (
              <div className="input-group">
                <label>Full Name</label>
                <div className="input-wrap">
                  {/* <span className="input-icon">👤</span> */}
                  <input type="text" 
                  id="fullname"
                  placeholder="Your full name" 
                  required
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="input-group">
              <label>Email</label>
              <div className="input-wrap">
                {/* <span className="input-icon">✉</span> */}
                <input type="email"
                id="email"
                 placeholder="you@email.com"
                 required
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                  />
              </div>
            </div>
            {emailError && (
            <p className="msg" style={{color:"red", fontSize:"15px" , width:"100%" ,display:"flex",justifyContent:"center", display:"block"}}>
             {emailErrorMessage}
              </p>
              )}
            <div className="input-group">
              <div className="label-row">
                <label>Password</label>
                {!isSignup && <a href="#forgot">Forgot password?</a>}
              </div>
              <div className="input-wrap">
                {/* <span className="input-icon">🔒</span> */}
                <input
                  type="password"
                  id="password"
                  placeholder={isSignup ? "Create a password" : "••••••••"}
                  required
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>
            {passwordError && (
            <p className="msg" style={{color:"red", fontSize:"15px" , width:"100%" ,display:"flex",justifyContent:"center"}}>
                {passwordErrorMessage}
                </p>
              )}
            <button type="submit" className="primary-btn">
              {isSignup ? "Sign Up" : "Sign In"}
              <span className="arrow">→</span>
            </button>

            <div className="divider">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>

            <button type="button" className="google-btn">
              <span className="google-icon">G</span>
              Continue with Google
            </button>

            <p className="switch-text">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                className="switch-btn"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup ? "Sign in" : "Sign up"}
              </button>
            </p>
            {message ?
            <p className="msg" style={{color:"red", fontSize:"15px" , width:"100%" ,display:"flex",justifyContent:"center"}}></p> 
            :<></>}
            <Snackbar
            open={open}
      autoHideDuration={4000}
      message={message}
      onClose={() => setOpen(false)}
      />
          </form>
        </div>
      </div>
    </div>
  );
}