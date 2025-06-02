import React, { useState } from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import ContactExperience from "../components/ContactExperience.jsx";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Get In Touch With Me"
                             subTitle="📧 Contact Information"/>

                <div className="grid-12-cols mt-16">
                    {/* Left side - Contact Form */}
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Enter your message"
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit">
                                    <div className="cta-button group">
                                        <div className="bg-circle"/>
                                        <p className="text">Send Message</p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow"/>
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right side - 3D Experience */}
                    <div className="xl:col-span-7 min-h-96">
                        <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
