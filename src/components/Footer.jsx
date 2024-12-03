import React from "react";
import { FaGithub } from "react-icons/fa";

// Footer component to display the footer content
const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; <strong> 2024 Harish G Batch59WD-T</strong>
      </p>
      <a
        href="https://github.com/harish-govindasamy?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub /> <strong>harish-govindasamy</strong>
      </a>
    </footer>
  );
};

export default Footer;