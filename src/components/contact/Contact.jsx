import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-wrapper">
            <div className="contact-container">
                <h2 className="contact-title">Contact Us</h2>

                {submitted ? (
                    <p className="thank-you">Thanks for reaching out! We'll get back to you soon.</p>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Send Message</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;
