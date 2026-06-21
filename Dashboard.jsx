export default function Dashboard() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "pink",
      margin: 0,
      padding: 0
    }}>
      

      <section className="facilities">
        <h2>Campus Facilities</h2>

        <div className="cards">
          <div className="card">
            <h3>Library</h3>
            <p>Thousands of books, journals and digital resources.</p>
          </div>

          <div className="card">
            <h3>Laboratories</h3>
            <p>Advanced labs for practical learning and research.</p>
          </div>

          <div className="card">
            <h3>Sports</h3>
            <p>Indoor and outdoor sports facilities for students.</p>
          </div>

          <div className="card">
            <h3>Placement Cell</h3>
            <p>Training and recruitment opportunities with companies.</p>
          </div>
        </div>
      </section>
      <h3></h3>
      <p></p>
    </div>
  );
}