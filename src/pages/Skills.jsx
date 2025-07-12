import React from "react";

const skills = {
  Languages: ["PHP", "C++", "C", "HTML/CSS", "JavaScript", "SQL", "Python"],
  "Technologies & Frameworks": [
    "MVC Frameworks",
    "Laravel",
    "React",
    "Node.js",
    "Bootstrap",
    "WordPress",
    "Shopify",
  ],
  Databases: ["MySQL", "MongoDB", "Firebase"],
  "Tools & Others": ["Git", "GitHub", "Postman", "Vite", "VS Code", "Figma", "GoHighLevel CRM"],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-lightGray dark:bg-darkSurface py-20 px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-darkNavy dark:text-textDark mb-12">
          🛠️ Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {Object.entries(skills).map(([category, items], i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold text-gold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, j) => (
                  <span
                    key={j}
                    className="bg-white dark:bg-darkMatte text-darkNavy dark:text-textDark px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
