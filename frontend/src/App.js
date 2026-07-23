//import logo from './logo.svg';
//import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Signin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
