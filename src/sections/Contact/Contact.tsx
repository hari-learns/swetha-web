import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Contact.css';

export const Contact: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Portfolio Contact from ${formState.name || 'Visitor'}`);
        const bodyLines = [
            `Name: ${formState.name}`,
            `Email: ${formState.email}`,
            '',
            'Message:',
            formState.message
        ];
        const body = encodeURIComponent(bodyLines.join('\n'));

        window.location.href = `mailto:swethakrish694@gmail.com?subject=${subject}&body=${body}`;
        alert("Thanks for reaching out! I'll get back to you soon.");
        setFormState({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="contact-section section-padding" id="contact" ref={ref}>
            <div className="container">
                <div className={`contact-content ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    <div className="contact-header text-center">
                        <h2 className="section-title text-white">Get In Touch</h2>
                        <p className="contact-subtitle">
                            Open to opportunities in financial analysis, equity research, and assurance.
                        </p>
                    </div>

                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="info-item">
                                <span className="info-icon">📧</span>
                                <div className="info-text">
                                    <h3>Email</h3>
                                    <a href="mailto:swethakrish694@gmail.com">swethakrish694@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">📱</span>
                                <div className="info-text">
                                    <h3>Phone</h3>
                                    <a href="tel:+917904085253">+91 7904085253</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">💼</span>
                                <div className="info-text">
                                    <h3>LinkedIn</h3>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>

                            <div className="current-status">
                                <span className="status-dot"></span>
                                <p>Currently: Pursuing FinShiksha Financial Analyst Course</p>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can I help you?"
                                    rows={4}
                                ></textarea>
                            </div>

                            <Button variant="primary" fullWidth type="submit">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="footer text-center">
                <p>Note: This website is made to showcase my skills and projects better</p>
                <p className="copyright">© {new Date().getFullYear()} Swetha Kalyanakrishnan</p>
            </footer>
        </section>
    );
};
