import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "" });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Captured contact form:", form);
        navigate("/");
    }

    return (
        <section>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name
                    <input name="firstName" value={form.firstName} onChange={handleChange} required />
                </label>

                <button type="submit">Send</button>
            </form>
        </section>
    );
}
