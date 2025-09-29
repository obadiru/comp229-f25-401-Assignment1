export default function About() {
    return (
        <section className="row g-4 align-items-center">
            <div className="col-md-4" style={{ textAlign: "center" }}>
                <img
                    src="/images/me.jpg"
                    alt="Tobi Badiru"
                    style={{ maxWidth: 260, borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}
                />
            </div>
            <div className="col-md-8">
                <h2>About Me</h2>
                <p>
                    Hi, I’m <strong>Tobi Badiru</strong>. I’m studying Software Engineering Technology – AI at
                    Centennial College. I enjoy building React apps, writing clean Java/JS, and learning systems
                    design. I like shipping small, working features quickly and iterating based on feedback.
                </p>
                <a
                    className="btn btn-primary"
                    href="/docs/Tobi_Badiru_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    View Resume (PDF)
                </a>
            </div>
        </section>
    );
}
