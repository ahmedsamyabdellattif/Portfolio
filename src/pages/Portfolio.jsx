import React from "react";

export default function Portfolio() {
  const projects = [
 { id: 1, title: "Brand Identity", img: "portfolio 1.png" },
{ id: 2, title: "Web Design", img: "portfolio 3.png" },
{ id: 3, title: "Illustration", img: "portfolio 2.png" }, 

  ];

  return (
    <div className="main-content">
      <section className="section">
        <h2>My Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((p) => (
            <div key={p.id} className="portfolio-item">
              <img src={p.img} alt={p.title} />
              <h3>{p.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
