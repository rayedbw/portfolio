import React from "react";

/** * Education component
 * Space to highlight your education, such as degrees, certifications,
 * or relevant courses. This can include formal education,
 * online courses, or workshops that have contributed to your skills.
 * This section can be continually updated as you complete new courses
 * or gain new certifications.
 */

import image from "../images/motion-background.jpg";
const imageAltText = "books and laptop on a desk";

const educationList = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Barnett Technical University",
    year: "2023",
    description: "Focused on software development and user interface design.",
  },
  {
    title: "UI/UX Design Certification",
    institution: "Design Institute",
    year: "2022",
    description: "Completed a comprehensive course on user experience and interface design.",
  },
  {
    title: "Web Development Bootcamp",
    institution: "Tech Academy",
    year: "2021",
    description: "Intensive program covering HTML, CSS, JavaScript, and responsive design.",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Education</h2>
        <ul>
          {educationList.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>
                {item.institution} - {item.year}
              </p>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
