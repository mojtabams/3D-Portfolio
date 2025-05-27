import React, {useEffect} from 'react'
import {navLinks} from "../constants/index.js";

export const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, []);
    return (
        <header className={'navbar ' + (scrolled ? 'scrolled' : '')}>
            <div className="inner">
                <a  className="logo" href="#hero">
                    MJ | M2
                </a>
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link,name}) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className="contact-btn group">
                    <div className="inner"><span>Contact me</span></div>
                </a>
            </div>
        </header>
    )
}
