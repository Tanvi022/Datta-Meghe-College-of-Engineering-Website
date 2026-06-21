import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <h2>NAAC Accredited Grade A</h2>
      </nav>

      
      <section className="welcome-section">
        <div className="welcome-content">
          <h1>Welcome to Datta Meghe College of Engineering</h1>
          <p>
            Building future engineers through quality education,
            innovation, research, and industry collaboration.
          </p>
          
          <br></br>
          <button >
        <a href="http://localhost:3000/virtualtour" target="_blank" rel="noopener noreferrer" class="my-button">
         Explore Campus</a></button>
        </div>
      </section>

      <br></br>
      <section className="about">
        <h2>About DMCE</h2>
        <p>
          Datta Meghe College of Engineering is committed to providing
          excellence in technical education. Our campus fosters a vibrant
          learning environment for all students.
        </p>
      </section>
      

      <br></br>
      <section className="events">
        <h2>Latest News & Events</h2>

        <div className="cards">
          <div className="card"style={{ width: '1000px' }}>
            <h3>Tech Fest 2025</h3>
            <p>Annual technical festival with coding and robotics events.</p>
          </div>

          <div className="card"style={{ width: '1000px' }}>
            <h3>Campus Recruitment Drive</h3>
            <p>Leading companies visiting for placements.</p>
          </div>

          <div className="card" style={{ width: '1000px' }}>
            <h3>Research Seminar</h3>
            <p>Industry experts sharing insights on emerging technologies.</p>
          </div>
        </div>
      </section>

      <br></br>
      <section className="admission">
        <h2>Admissions Open 2025-26</h2>
        <p>
          Begin your engineering journey with DMCE. Apply now and
          become part of a vibrant learning community.
        </p>
        <br></br>
        <div>
        <button >
        <a href="http://localhost:3000/contact" target="_blank" rel="noopener noreferrer" class="my-button">
         Apply Now</a></button>
        </div>
        </section>
        <br></br>

   
      <footer className="footer">
        <p>2025 Datta Meghe College of Engineering. All Rights Reserved.</p>
      </footer>

    </div>
  );
}