import React from "react";

const experiences = [
  {
    company: "Walkwel Technology",
    role: "Associate Software Developer",
    duration: "Jan 2023 – Present",
    description: (
      <>
        <ul className="list-disc pl-5 space-y-2 text-darkNavy dark:text-textDark">
          <li>
            Collaborated with the development team to resolve client inquiries and issues, ensuring smooth operations and high client satisfaction.
          </li>
          <li>
            Developed and implemented the MVC architecture using <strong>Laravel</strong> for a claim management application, improving modularity and scalability.
          </li>
          <li>
            Designed and optimized <strong>RESTful APIs</strong> in Laravel, improving response time by 30% and enabling seamless communication with Flutter-based mobile applications.
          </li>
          <li>
            Customized <strong>WordPress</strong> websites by building custom post types, templates, and enhancing functionality using plugins like <strong>Elementor</strong> and <strong>WooCommerce</strong>.
          </li>
          <li>
            Managed and optimized <strong>Shopify</strong> client websites by creating product templates, integrating third-party apps, and troubleshooting scripts and styles — reducing page load time by 20%.
          </li>
          <li>
            Built custom integrations with CRM platforms including <strong>ClickFunnels</strong>, <strong>GoHighLevel</strong>, and <strong>Ontraport</strong>. Developed internal tools and features such as <strong>RingCentral</strong> integrations to enhance automation workflows.
          </li>
        </ul>
      </>
    ),
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-lightGray dark:bg-darkSurface py-20 px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-darkNavy dark:text-textDark mb-12">💼 Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-darkMatte text-base p-6 rounded-xl shadow-md text-left transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-gold mb-1">{exp.role}</h3>
              <p className="text-darkNavy dark:text-textDark">
                {exp.company} • <span className="italic">{exp.duration}</span>
              </p>
              <div className="mt-3">{exp.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
