import React from "react";
import { Instagram, Linkedin, GitHub } from 'react-feather';
export default function SocialLinksRight({ }) {
    return <div className="fixed right-4 md:right-6 lg:right-8 xl:right-12 top-[50vh] -translate-y-[50%] flex flex-col w-fit h-36 justify-between">
        <a href="https://github.com/Reqill" target="_blank" className="group my-auto" title="GitHub">
            <GitHub size={28} className="stroke-text stroke-[1.9] group-hover:stroke-accent group-hover:-translate-y-[.4rem] transition-all ease-in-out " />
        </a>
        <a href="https://www.instagram.com/mmrozek.design/" target="_blank" className="group my-auto" title="Intagram">
            <Instagram size={28} className="stroke-text stroke-[1.9] group-hover:stroke-accent group-hover:-translate-y-[.4rem] transition-all ease-in-out " />
        </a>
        <a href="https://www.linkedin.com/in/miko%C5%82aj-mr%C3%B3zek-77b949214/" target="_blank" className="group my-auto" title="LinkedIn">
            <Linkedin size={28} className="stroke-text stroke-[1.9] group-hover:stroke-accent group-hover:-translate-y-[.4rem] transition-all ease-in-out " />
        </a>
    </div>;
}
