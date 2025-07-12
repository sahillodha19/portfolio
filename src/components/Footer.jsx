import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkNavy text-white dark:bg-darkMatte py-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-2 md:mb-0 text-lightGray dark:text-textDark">
          © {new Date().getFullYear()} Sahil Lodha. All rights reserved.
        </p>
        <div className="flex space-x-4 text-sm font-medium">
          <a
            href="https://github.com/sahillodha19/"
            className="hover:text-gold transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sahillodha/"
            className="hover:text-gold transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="hover:text-gold transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
