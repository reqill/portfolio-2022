import React from "react";
import Fade from 'react-reveal/Fade';

export default function FooterDesktop({ }) {
    return (
        <Fade delay={200}>
            <div className="w-full inline-flex justify-center my-3">
                <a href="https://github.com/Reqill/portfolio-2022" target="_blank" className="font-mono cursor-default font-normal text-[.925rem] tracking-tight text-text hover:text-accent mx-auto">
                    2022 © Mikołaj Mrózek
                </a>
            </div>
        </Fade>
    );
}
