import React from 'react'
import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="flex flex-col justify-center items-center md:items-start">
                    <a href="/">Visit my Note( BLOG ) </a>
                </div>
                <div className="socials">
                    {socialImgs.map(({imgPath, name}) => (
                        <a className="icon" target="_blank" href={imgPath} key={name}>
                            <img src={imgPath} alt={name}/>
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">© 2021 {new Date().getFullYear()} MMS .All right reserved.</p>
                </div>
            </div>

        </footer>
    )
}
export default Footer
