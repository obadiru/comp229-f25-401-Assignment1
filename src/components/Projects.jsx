const projects = [
    {
        id: 1,
        title: "THE ROLLING SLICE (Restaurant Site)",
        description:
            "Multi-page site with favorites via localStorage, dynamic menus, and responsive layout.",
        image: "/images/projects/rolling-slice.jpg",
        role: "Frontend (HTML/CSS/JS)"
    },
    {
        id: 2,
        title: "Predicting House Prices (AI Prototype)",
        description:
            "Data pipeline (pandas/sklearn), batch prediction function, and clean module structure.",
        image: "/images/projects/house-prices.jpg",
        role: "Data & Backend (Python)"
    },
    {
        id: 3,
        title: "Java Dice Simulator",
        description:
            "SecureRandom dice roll stats and simple reporting; practice with loops/switch and I/O.",
        image: "/images/projects/dice.jpg",
        role: "Java Developer"
    }
];

export default function Projects() {
    return (
        <section>
            <h2 className="mb-3">Projects</h2>
            <div className="row g-4">
                {projects.map((p) => (
                    <div key={p.id} className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            {p.image && <img src={p.image} alt={p.title} className="card-img-top" />}
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{p.title}</h5>
                                <p className="card-text">{p.description}</p>
                                <p className="text-muted" style={{ marginTop: -6 }}>Role: {p.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
