import React, {useRef, useState} from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import ContactExperience from "../components/ContactExperience.jsx";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
const abbas = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setLoading(true)
        try {
            await emailjs.sendForm(

                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            // Reset form after submission
            setFormData({name: '', email: '', message: ''});
            alert('Thank you for your message! We will get back to you soon.');
        } catch (e) {
                console.log('Emailjs ERROR:', e);
        } finally {
            setLoading(false)
        }
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
                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7" ref={formRef}>
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

                                <button type="submit" disabled={loading} className="cta-wrapper">
                                    <div className="cta-button group">
                                        <div className="bg-circle"/>
                                        <p className="text">{loading ? 'sending ... ' : 'Send Message'}</p>
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
                            <ContactExperience/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
