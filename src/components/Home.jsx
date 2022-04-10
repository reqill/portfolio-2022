import React from "react";
export default function Home({ }) {
    return <div className="h-screen w-full flex flex-col align-middle justify-center">
        <h6 className="text-accent font-mono -tracking-[.075em] text-[.9rem] -mb-[.1rem] sm:text-base sm:mb-0 md:text-[1.05rem] lg:text-[1.1rem] xl:text-[1.15rem]">
            Hi, my name is
        </h6>
        <h1 className="text-header font-sans text-[2.1rem] font-bold tracking-wide leading-10 sm:text-5xl sm:leading-[3rem] md:text-6xl md:leading-[3.6rem] lg:text-[4rem] lg:leading-[4rem] xl:text-7xl xl:leading-[4.4rem]">
            Mikołaj Mrózek.
        </h1>
        <h1 className="text-text font-sans text-[2.1rem] font-bold tracking-wide leading-10 sm:text-5xl sm:leading-[4rem] md:text-6xl md:leading-[4.6rem] lg:text-[4rem] lg:leading-[5rem] xl:text-7xl xl:leading-[5.4rem]">
            I build things for web.
        </h1>
        <h4 className="text-text font-sans font-normal my-3 leading-5 sm:w-3/4 lg:text-[1.15rem] lg:w-7/12 lg:leading-6 lg:my-4 xl:text-[1.2rem] xl:w-6/12 2xl:w-5/12">
            I'm a self-taught front-end developer specializing in building and designing exeptional digital products.
        </h4>
        <div className="flex flex-row align-middle mt-6 lg:mt-4">
            <a href="#work" className="border-accent shadow-start hover:shadow-finish2 md:rounded-[.3rem] focus:shadow-finish2 focus:text-bg hover:text-bg transition-all ease-in-out duration-300 -tracking-[.075em] text-[.9rem] sm:text-base xl:text-[1.05rem] border-solid border-2 font-mono text-accent rounded-[.25rem] px-5 py-[.35rem] sm:px-6 sm:py-2 xl:px-7 xl:py-[.6rem]">
                check out my work
            </a>
            <a href="#contact" className="font-mono w-fit -tracking-[.075em] text-[.9rem] hover:text-accent focus:text-accent transition-all ease-in-out duration-200 sm:text-base  text-text my-auto ml-5 sm:ml-8 xl:text-[1.05rem] xl:ml-10">
                let's get in touch
            </a>
        </div>
    </div>;
}
