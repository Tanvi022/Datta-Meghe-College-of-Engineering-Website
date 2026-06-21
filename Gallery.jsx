import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div className="container">

      <nav className="navbar">
        <h2>Campus Gallery</h2>
        <Link to="/">Home</Link>
      </nav>

      <h2 className="title">Campus Gallery</h2>

    
      <div className="gallery-grid">
        <div className="gallery-card">
          <h3>Classroom</h3>
          <img
            src="https://images.pexels.com/photos/10127242/pexels-photo-10127242.jpeg"
            alt="Classroom"
          />
        </div>

        <div className="gallery-card">
        <h4>Lab
        </h4>
          <img
            src="https://images.pexels.com/photos/18471568/pexels-photo-18471568.jpeg"
            alt="Lab"  
          />
        </div>

        <div className="gallery-card">
          <h3>Auditorium</h3>
          <img
            src="https://images.pexels.com/photos/32731345/pexels-photo-32731345.jpeg?_gl=1*co5wtf*_ga*MTU5MzkyODM4NS4xNzgyMDI4NTI4*_ga_8JE65Q40S6*czE3ODIwMzkyNTckbzIkZzEkdDE3ODIwMzkyNjUkajUyJGwwJGgw"
            alt="Auditorium"
          />
        </div>

        <div className="gallery-card">
          <h3>Library</h3>
          <img
            src="https://images.pexels.com/photos/9572622/pexels-photo-9572622.jpeg?_gl=1*154e8ss*_ga*MTU5MzkyODM4NS4xNzgyMDI4NTI4*_ga_8JE65Q40S6*czE3ODIwMzkyNTckbzIkZzEkdDE3ODIwMzk0ODkkajU4JGwwJGgw"
            alt="Library"
          />
        </div>
      </div>
    </div>
  );
}