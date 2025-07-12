import React from "react";
import profileImage from "../assets/profile.jpg"; // Replace this path

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background dark:bg-darkMatte text-base px-6  transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 text-center md:text-left">
        {/* Profile Picture on Right */}
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Sahil Lodha"
            className="w-[270px] h-[270px] sm:w-[270px] sm:h-[270px] md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-120 xl:h-120 rounded-full border-4 border-gold shadow-2xl object-cover"
          />
        </div>

        {/* Intro Text on Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-darkNavy dark:text-textDark mb-4">
            Hi, I'm Sahil Lodha 👋
          </h1>
          <p className="text-lg text-darkNavy dark:text-textDark mb-6">
            Associate Software Developer with 1.5+ years of experience in building web apps.
            I love clean code, efficient systems, and intuitive UI.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 bg-gold text-white px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
