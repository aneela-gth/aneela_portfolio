
import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2 className="resume-title">My Resume</h2>

      <div className="resume-container">
        <iframe
          src="https://drive.google.com/file/d/1QmzW2ORlxLoprONuvRyzVYADiS2REF7I/preview"
          title="Bandi Aneela Resume"
          className="resume-frame"
          allow="autoplay"
        ></iframe>
      </div>

      <div className="resume-buttons">
        <a
          href="https://drive.google.com/file/d/1QmzW2ORlxLoprONuvRyzVYADiS2REF7I/view"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          👁 View Resume
        </a>

        <a
          href="https://drive.google.com/uc?export=download&id=1QmzW2ORlxLoprONuvRyzVYADiS2REF7I"
          className="resume-btn"
        >
          📄 Download PDF
        </a>
      </div>
    </section>
  );
};

export default Resume;