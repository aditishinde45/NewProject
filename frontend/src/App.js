//import logo from './logo.svg';
//import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Interview_details from "./pages/Inteview_details.jsx";
function App() {
  return (
     <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/interview" element={<Interview_details/>} />
    </Routes>
  );
}

export default App;
