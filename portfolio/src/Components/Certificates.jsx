
// import React from "react";


// const certificates = [
//   {
//     title: "Introduction to HTML",
//     provider: "Simplilearn SkillUp",
//     name: "Bandi Aneela",
//     date: "27 August 2025",
//     code: "8864249",
//     image: "/certificates/html-certificate.png",
//     verify: "https://www.simplilearn.com/skillup"
//   }
// ];

// const Certificates = () => {
//   return (
//     <section id="certificates" className="certificates-section">
//       <h2 className="section-title">Certificates</h2>

//       <div className="certificates-grid">
//         {certificates.map((cert, index) => (
//           <div className="certificate-card" key={index}>
//             <img
//               src="/Screenshot 2026-01-27 131155.png"
//               alt={cert.title}
//               className="certificate-img"
//             />

//             <h3>{cert.title}</h3>
//             <p><strong>Name:</strong> {cert.name}</p>
//             <p><strong>Platform:</strong> {cert.provider}</p>
//             <p><strong>Date:</strong> {cert.date}</p>
//             <p><strong>Certificate Code:</strong> {cert.code}</p>

//             <a
//               href={cert.verify}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="verify-btn"
//             >
//               Verify Certificate
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certificates;

import React from "react";

const certificates = [
  {
    title: "Introduction to HTML",
    provider: "Simplilearn SkillUp",
    name: "Bandi Aneela",
    date: "27 August 2025",
    code: "8864249",
    image: "/Screenshot 2026-01-27 131155.png", // if this exists in public
    verify: "https://www.simplilearn.com/skillup"
  },
  {
    title: "Python Full Stack Development and Training Program",
    provider: "10000 Coders",
    name: "Bandi Aneela",
    date: "June 2025 – December 2025",
    code: "DF3020",
    image: "/Screenshot 2026-03-03 150855.png", // ✅ your new certificate
    verify: "https://www.10000coders.co"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <h2 className="section-title">Certificates</h2>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img
              src={cert.image}   // ✅ IMPORTANT FIX
              alt={cert.title}
              className="certificate-img"
            />

            <h3>{cert.title}</h3>
            <p><strong>Name:</strong> {cert.name}</p>
            <p><strong>Platform:</strong> {cert.provider}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <p><strong>Certificate Code:</strong> {cert.code}</p>

            <a
              href={cert.verify}
              target="_blank"
              rel="noopener noreferrer"
              className="verify-btn"
            >
              Verify Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
