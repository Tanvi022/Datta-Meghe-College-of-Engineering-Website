import { Link } from "react-router-dom";

export default function VirtualTour() {
  return (
    <div className="container">
      <nav className="navbar">
        <h2>Virtual Tour</h2>
        <Link to="/">Home</Link>
      </nav>
      <h2>Campus Virtual Tour</h2>

      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/1glH5GP80qI"
        title="Campus Tour"
        allowFullScreen
      ></iframe>
    </div>
  );
}