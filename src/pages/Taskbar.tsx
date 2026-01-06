import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Taskbar.css";

// --- Custom Icons (Minimalist look) ---
const Icon = ({ name, className = "" }) => {
  const paths: Record<string, JSX.Element> = {
    Home: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10" />,
    ChevronDown: <polyline points="6 9 12 15 18 9" />,
    ArrowUpRight: (
      <>
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </>
    ),
    Support: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 16v-4M12 8h.01" />
  };
  return (
    <svg className={`icon-svg ${className}`} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {paths[name]}
    </svg>
  );
};

function Footer() {
  // State to track if the background is currently dark (true) or light (false)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // --- Logic to check background color ---
  useEffect(() => {
    const handleScroll = () => {
      // Find the vertical position (viewport height) of the scroll
      const scrollY = window.scrollY;
      
      // Based on your website layout:
      // Assuming the black section starts AFTER the viewport height (e.g., scrollY > 700px)
      // and the light section is around 700px to 1000px down.
      // We will define a transition zone for demonstration purposes:
      
      // Example transition zone:
      // Top (Dark Bg - Jeton): scrollY < 500
      // Middle (Light/Gray Bg - SMALL): scrollY >= 500
      
      // You may need to fine-tune this '500' value based on your actual page heights.
      if (scrollY >= 500) {
        // If scrolled into the light section (like the 'SMALL' page)
        setIsDarkMode(false);
      } else {
        // If still in the dark section (like the 'Jeton' page)
        setIsDarkMode(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <motion.div
      // Conditional class based on scroll position
      className={`footer-man-bar ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
      initial={{ y: 100, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* 1. Home Button (Always the unique solid style) */}
      <NavLink to="/" className="footer-nav-btn footer-home-btn" end>
        <Icon name="Home" className="home-icon" />
      </NavLink>
      
      {/* 2. Personal Link (Dropdown style from screenshot) */}
      <NavLink to="/personal" className="footer-nav-btn">
        <span>Personal</span>
        <Icon name="ChevronDown" className="icon-sm" />
      </NavLink>

      {/* 3. Business Link (Arrow Up Right style from screenshot) */}
      <NavLink to="/business" className="footer-nav-btn">
        <span>Business</span>
        <Icon name="ArrowUpRight" className="icon-sm" />
      </NavLink>
      
      {/* 4. Company Link (Dropdown style from screenshot) */}
      <NavLink to="/company" className="footer-nav-btn">
        <span>Company</span>
        <Icon name="ChevronDown" className="icon-sm" />
      </NavLink>

      {/* 5. Support Button (Rightmost element in Jeton design) */}
      <NavLink to="/support" className="footer-support-btn">
        <Icon name="Support" className="icon-support" />
        <span>Support</span>
      </NavLink>
    </motion.div>
  );
}

export default Footer;