import React, { useState } from "react";
import "../styles/Signin.css";

export default function Signin() {
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    
    e.preventDefault();
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-brand">
          <div className="brand-icon">
            <span>✦</span>
          </div>
          <div className="brand-text">InterviewAI</div>
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

          <form onSubmit={handleSubmit} className="auth-form">
            {isSignup && (
              <div className="input-group">
                <label>Full Name</label>
                <div className="input-wrap">
                  {/* <span className="input-icon">👤</span> */}
                  <input type="text" placeholder="Your full name" />
                </div>
              </div>
            )}

            <div className="input-group">
              <label>Email</label>
              <div className="input-wrap">
                {/* <span className="input-icon">✉</span> */}
                <input type="email" placeholder="you@email.com" />
              </div>
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>Password</label>
                {!isSignup && <a href="#forgot">Forgot password?</a>}
              </div>
              <div className="input-wrap">
                {/* <span className="input-icon">🔒</span> */}
                <input
                  type="password"
                  placeholder={isSignup ? "Create a password" : "••••••••"}
                />
              </div>
            </div>

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
          </form>
        </div>
      </div>
    </div>
  );
}