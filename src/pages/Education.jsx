import React from "react";

const educationData = [
  {
    institution: "Chandigarh University",
    duration: "Sep 2020 – May 2024",
    degree: "Bachelor of Engineering in Computer Science",
    location: "Mohali, Punjab",
  },
  {
    institution: "Burnpur Riverside School",
    duration: "Apr 2018 – Mar 2020",
    degree: "Intermediate (CBSE)",
    score: "Percentage: 96%",
    location: "Burnpur, West Bengal",
  },
  {
    institution: "St. Patrick's H.S. School, Asansol",
    duration: "Apr 2008 – Mar 2018",
    degree: "Matriculate (ICSE)",
    score: "Percentage: 96%",
    location: "Asansol, West Bengal",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-white dark:bg-darkMatte py-20 px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-darkNavy dark:text-textDark mb-12">
          🎓 Education
        </h2>
        <div className="space-y-6 text-left">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative bg-lightGray dark:bg-darkSurface p-6 rounded-xl shadow-md transition-colors duration-300"
            >
              <p className="absolute top-4 right-6 text-sm italic text-darkNavy dark:text-textDark">
                {edu.duration}
              </p>

              <h3 className="text-xl font-semibold text-gold mb-1">
                {edu.institution}
              </h3>
              <p className="text-darkNavy dark:text-textDark">{edu.degree}</p>
              {edu.score && (
                <p className="text-darkNavy dark:text-textDark">{edu.score}</p>
              )}
              <p className="text-darkNavy dark:text-textDark text-sm mt-1">
                {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
