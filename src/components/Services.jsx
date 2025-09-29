export default function Services() {
  const services = [
    { title: "Web Development", desc: "React, HTML, CSS, Bootstrap" },
    { title: "Java Programming", desc: "small utilities, console apps" },
    { title: "AI Coursework", desc: "Python notebooks, data prep, simple models" }
  ];

  return (
    <section>
      <h2 className="mb-3">Services</h2>
      <div className="row g-3">
        {services.map((s, i) => (
          <div className="col-md-4" key={i}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{s.title}</h5>
                <p className="card-text">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
