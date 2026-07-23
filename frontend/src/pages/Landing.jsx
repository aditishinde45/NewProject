import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Mic,
  FileText,
  BarChart3,
  Brain,
  ShieldCheck,
  Zap,
  PlayCircle,
  ArrowRight,
  Check,
  Star,
  ChevronDown,
} from 'lucide-react';
import '../styles/Landing.css';

const features = [
  { icon: Mic, title: 'Voice-Based AI Interviews', desc: 'Realistic voice interviews with an AI that listens, thinks, and asks follow-up questions just like a real interviewer.' },
  { icon: FileText, title: 'Resume Analysis', desc: 'Upload your resume for instant ATS compatibility scoring, skill gap detection, and tailored improvement suggestions.' },
  { icon: BarChart3, title: 'Detailed Performance Reports', desc: 'Get scores across technical, communication, confidence, and problem-solving with topic-wise breakdowns.' },
  { icon: Brain, title: 'Confidence Analysis', desc: 'Our AI analyzes your tone, pacing, and delivery to measure confidence and help you improve how you present.' },
  { icon: Zap, title: 'Personalized Roadmap', desc: 'Receive a learning roadmap tailored to your weak areas with recommended practice topics and estimated time.' },
  { icon: ShieldCheck, title: 'Progress Tracking', desc: 'Track your improvement over time with beautiful analytics, streaks, and achievement badges.' },
];

const steps = [
  { num: '01', title: 'Upload Your Resume', desc: 'Drop your resume and our AI analyzes your skills, experience, and gaps instantly.' },
  { num: '02', title: 'Start a Voice Interview', desc: 'Choose your interview type, difficulty, and duration. The AI interviewer conducts a realistic session.' },
  { num: '03', title: 'Get Detailed Feedback', desc: 'Receive a comprehensive report with scores, strengths, weaknesses, and a personalized learning roadmap.' },
  { num: '04', title: 'Track Your Progress', desc: 'Practice consistently and watch your scores improve with detailed analytics and achievement tracking.' },
];

const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'SDE II at Google',
    initials: 'AS',
    quote: 'InterviewAI transformed how I prepared. The voice-based interviews felt incredibly real, and the feedback was pinpoint accurate. I landed my dream job at Google.',
  },
  {
    name: 'Priya Nair',
    role: 'Frontend Engineer at Stripe',
    initials: 'PN',
    quote: 'The confidence analysis was a game-changer. I realized I was rushing answers and speaking too fast. After 8 practice sessions, my communication score jumped 20 points.',
  },
  {
    name: 'Rohan Verma',
    role: 'System Design Lead at Flipkart',
    initials: 'RV',
    quote: 'The system design interview module is outstanding. It asks the right follow-up questions and the roadmap it generated covered every gap in my knowledge.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for getting started with AI interview practice.',
    price: 'Free',
    period: 'forever',
    features: ['3 interviews per month', 'Basic performance reports', 'Resume analysis', 'Community support'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'For serious candidates preparing for top-tier interviews.',
    price: '$29',
    period: 'per month',
    features: ['Unlimited interviews', 'Advanced confidence analysis', 'Personalized learning roadmap', 'Priority support', 'Progress analytics & badges'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Teams',
    description: 'For bootcamps and teams preparing candidates together.',
    price: '$99',
    period: 'per month',
    features: ['Everything in Pro', 'Team dashboards', 'Bulk candidate management', 'Dedicated account manager'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const faqs = [
  { q: 'How does the AI interview work?', a: 'Our AI interviewer listens to your spoken answers in real time, asks relevant follow-up questions, and adapts the conversation based on your responses, just like a real interviewer would.' },
  { q: 'Do I need a microphone?', a: 'Yes, a microphone is required for voice-based interviews. Most laptop and phone microphones work fine, and you can test your audio before starting any session.' },
  { q: 'Can I practice specific interview types?', a: 'Absolutely. You can choose from technical, behavioral, system design, and role-specific interview tracks, and set the difficulty level that matches where you are in your prep.' },
  { q: 'How accurate is the feedback?', a: 'Feedback is generated from your actual transcript, tone, and pacing, then scored against patterns from real hiring interviews, so it reflects genuine strengths and gaps rather than generic tips.' },
  { q: 'Is my data private?', a: 'Yes. Your resume, recordings, and reports are private to your account and are never shared with third parties or used to identify you to employers.' },
  { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your subscription at any time from your account settings with no cancellation fees, and you will keep access through the end of your billing period.' },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{faq.q}</span>
        <ChevronDown className={`faq-chevron ${isOpen ? 'faq-chevron-open' : ''}`} size={20} />
      </button>
      {isOpen && <div className="faq-answer">{faq.a}</div>}
    </div>
  );
}

export default function Landing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="landing">
      {/* Nav */}
      <header className="landing-header">
        <div className="landing-container header-inner">
          <div className="brand">
            <div className="brand-mark">
              <Sparkles className="brand-icon" />
            </div>
            <span className="brand-name">InterviewIQ</span>
          </div>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="header-actions">
            <Link to="/login" className="btn btn-ghost">Sign In</Link>
            <Link to="/app" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="landing-container hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content"
          >
            <div className="badge-pill">
              <span className="dot dot-success" />
              AI-powered interview practice trusted by 50,000+ candidates
            </div>
            <h1 className="hero-title">
              Master Technical Interviews with Your <br className="hero-break" />
              <span className="hero-title-accent">Personal AI Interviewer</span>
            </h1>
            <p className="hero-subtitle">
              Upload your resume, participate in realistic AI-powered interviews, receive detailed feedback,
              confidence analysis, personalized recommendations, and track your improvement over time.
            </p>
            <div className="hero-ctas">
              <Link to="/app/interview" className="btn btn-primary btn-lg">
                Start Free Interview
                <ArrowRight size={16} />
              </Link>
              <button className="btn btn-outline btn-lg">
                <PlayCircle size={20} />
                Watch Demo
              </button>
            </div>
            <div className="hero-trust">
              <span><Check size={16} className="text-success" /> No credit card required</span>
              <span><Check size={16} className="text-success" /> 3 free interviews</span>
              <span><Check size={16} className="text-success" /> Cancel anytime</span>
            </div>
          </motion.div>

          {/* Hero preview card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-preview"
          >
            <div className="preview-card">
              <div className="preview-pill">
                <span className="dot dot-success dot-pulse" />
                <span>AI Interviewer Speaking...</span>
              </div>
              <div className="preview-avatar">
                <Sparkles size={40} className="preview-avatar-icon" />
              </div>
              <div className="waveform">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="wave-bar"
                    animate={{ scaleY: [0.2, Math.random() * 0.8 + 0.4, 0.2] }}
                    transition={{ duration: 0.5 + Math.random() * 0.4, repeat: Infinity, delay: i * 0.04 }}
                  />
                ))}
              </div>
              <p className="preview-quote">
                "Can you walk me through a challenging project you recently worked on and the technical decisions you made?"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section landing-container">
        <div className="section-heading">
          <h2>Everything you need to ace your next interview</h2>
          <p>From resume analysis to voice-based AI interviews, we have every step of your preparation covered.</p>
        </div>
        <div className="grid grid-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="card feature-card"
            >
              <div className="icon-box">
                <f.icon size={22} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="section-tinted">
        <div className="landing-container section">
          <div className="section-heading">
            <h2>How It Works</h2>
            <p>Four simple steps to interview readiness.</p>
          </div>
          <div className="grid grid-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="card step-card"
              >
                <span className="step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* FAQ */}
      <section id="faq" className="section landing-container faq-section">
        <h2 className="center-heading">Frequently Asked Questions</h2>
        <p className="center-subtext">Everything you need to know about InterviewAI.</p>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="landing-container cta-section">
        <div className="cta-banner">
          <div className="cta-dots" />
          <div className="cta-content">
            <h2>Ready to ace your next interview?</h2>
            <p>Join thousands of candidates who improved their interview performance with AI-powered practice.</p>
            <Link to="/app" className="btn btn-white btn-lg">
              Start Free Interview
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="landing-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand">
                <div className="brand-mark">
                  <Sparkles className="brand-icon" />
                </div>
                <span className="brand-name">InterviewAI</span>
              </div>
              <p>Your personal AI interviewer for technical interview mastery.</p>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#">Demo</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 InterviewAI. All rights reserved.</p>
            <p>Built for candidates, by engineers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}