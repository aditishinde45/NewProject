import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Sparkles } from "lucide-react";
import Resume from "./Resume.jsx";
import Interview from "./Inteview.jsx"
// import { Stars } from "lucide-react";
import "../styles/profile.css";
import Dashboard from "./Dashboard.jsx";
import Settings from "./Settings.jsx";
import Account from "./Account.jsx";

function Profile() {
  const [mobile, setMobile] = useState(window.innerWidth < 1000);
  const [open, setOpen] = useState(window.innerWidth >= 1000);
  const [mainOpen,setMainOpen]=new useState(1);
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1000;

      setMobile(isMobile);

      if (isMobile) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="nav">
        {mobile && (
          <MenuIcon
            className="menu-icon"
            onClick={() => setOpen(true)}
          />
        )}

        {!mobile && <div className="brand">
            <div className="brand-mark">
              <Sparkles className="brand-icon" />
            </div>
            <span className="brand-name">interviewIQ</span>
          </div>}



      </div>

      {/* Overlay */}
      {mobile && (
        <div
          className={`overlay ${open ? "show" : ""}`}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${open ? "active" : ""}`}>
        {mobile && (
          <CloseIcon
            className="close-icon"
            onClick={() => setOpen(false)}
          />
        )}
        <ul className="sections">
          <li onClick={()=>setMainOpen(1)}>Dashboard</li>
          <li onClick={()=>setMainOpen(2)}>Profile</li>
          <li onClick={()=>setMainOpen(3)}>Upload Resume</li>
          <li onClick={()=>setMainOpen(4)}>Interview</li>
          <li onClick={()=>setMainOpen(5)}>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        {mainOpen==1 && <Dashboard/>}
        {mainOpen==2 && <Account/>}
       { mainOpen==3 && <Resume/>}
       {mainOpen==4 && <Interview/>}
       {mainOpen==5 && <Settings/>}
      </div>
    </>
  );
}

export default Profile;