import React from "react";
import { Instagram, Linkedin, GitHub } from 'react-feather';
import Fade from 'react-reveal/Fade';

export default function FooterMobile({ }) {
    return (
        <Fade delay={200}>
            <div className="w-full inline-flex justify-between my-3 px-4 align-middle">
                <a href="https://github.com/Reqill/portfolio-2022" target="_blank" className="font-mono font-normal my-auto text-[.925rem] cursor-default tracking-tight text-text hover:text-accent">
                    2022 © Mikołaj Mrózek
                </a>
                <div className="inline-flex my-auto">
                    <a href="https://github.com/Reqill" target="_blank" className="group my-auto " title="GitHub">
                        <GitHub size={26} className="stroke-text stroke-[1.5] group-hover:stroke-accent group-focus:stroke-accent transition-all ease-in-out " />
                    </a>
                    <a href="https://www.instagram.com/mmrozek.design/" target="_blank" className="group my-auto ml-3" title="Intagram">
                        <Instagram size={26} className="stroke-text stroke-[1.5] group-hover:stroke-accent group-focus:stroke-accent transition-all ease-in-out " />
                    </a>
                    <a href="https://www.linkedin.com/in/miko%C5%82aj-mr%C3%B3zek-77b949214/" target="_blank" className="group my-auto ml-3" title="LinkedIn">
                        <Linkedin size={26} className="stroke-text stroke-[1.5] group-hover:stroke-accent group-focus:stroke-accent transition-all ease-in-out " />
                    </a>
                </div>
            </div>
        </Fade>
    );
}
