const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <img src="/Tech-Ethics-Nov-Fig-1-1024x672.jpg" alt="IoT Project" />
          <h3>IoT Smart Traffic Management System</h3>
          <ul>
            <li>Real-time traffic monitoring using IoT sensors</li>
            <li>Reduced congestion by 25%</li>
            <li>ML-based traffic prediction (90% accuracy)</li>
            <li><strong>Tech:</strong> Python, AWS, MQTT, LoRaWAN</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="/creative-studio-website-hero-section_328186-original.webp" alt="Salon Website" />
          <h3>istudo </h3>
          <ul>
            <li>Responsive website using HTML & CSS</li>
            <li>Used Flexbox and Grid layouts</li>
            <li>Mobile-friendly & accessible UI</li>
            <li><strong>Tech:</strong> HTML, CSS</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="/wB5AAtcDLKMg3S9gru7aCWFGK6M.avif" alt="Notes App" />
          <h3>Full Stack Notes App</h3>
          <ul>
            <li>Create, edit & delete notes with authentication</li>
            <li>Secure REST API with CRUD operations</li>
            <li>Smooth & responsive UI</li>
            <li><strong>Tech:</strong> HTML, CSS, JavaScript,React</li>
          </ul>
        </div>
         {/* Project 4 */}
        <div className="project-card">
          <img src="/1592348.jpg" alt="Notes App" />
          <h3>imdb App</h3>
          <ul>
            <li>One of the world’s largest movie & TV databases</li>
            <li>Information on movies, TV shows, and web series</li>
            <li>User ratings & reviews for films and shows</li>
            <li>Details about actors, directors, and celebrities</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
