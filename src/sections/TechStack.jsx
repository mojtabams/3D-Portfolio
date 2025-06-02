import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {techStackIcons, techStackImgs} from "../constants/index.js";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo(".tech-card",
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                }
            }
        )
    })
    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title={"Tech Stack"}
                    subTitle={"🤝 I have worked with some of the best technologies in the world"}
                />
                <div className="tech-grid">
                    {techStackIcons.map((icon) => (
                        <div key={icon.name}
                             className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                            <div className="tech-card-animated-bg"/>
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={icon}/>
                                </div>
                                <div className="padding-x w-full">
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                    {/*For Image*/}
                    {/*{techStackImgs.map((icon) => (
                        <div key={icon.name}
                             className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                            <div className="tech-card-animated-bg"/>
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <img src={icon.imgPath} alt={icon.name}/>
                                </div>
                                <div className="padding-x w-full">
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}*/}
                </div>
            </div>
        </div>
    )
}
export default TechStack
