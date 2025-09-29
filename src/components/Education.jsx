export default function Education() {
    const items = [
        {
            school: "Centennial College",
            program: "Software Engineering Technology – AI",
            years: "2024 – Present"
        },

    ];

    return (
        <section>
            <h2 className="mb-3">Education</h2>
            <ul className="list-group">
                {items.map((e, i) => (
                    <li key={i} className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{e.school}</div>
                            {e.program}
                        </div>
                        <span className="badge bg-primary rounded-pill">{e.years}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
