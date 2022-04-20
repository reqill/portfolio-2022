import React from "react";
import Fade from 'react-reveal/Fade';

const BASE_DELAY = 500

export default function Home({ lang }) {
    return <div className="h-screen w-full flex flex-col align-middle justify-center">
        <Fade delay={BASE_DELAY + 75 * 1} bottom distance="2rem" >
            <h6 className="text-accent font-mono lg:ml-[.3rem] -tracking-[.075em] text-[.9rem] -mb-[.1rem] sm:text-base sm:mb-0 md:text-[1.05rem] lg:text-[1.1rem] xl:text-[1.15rem]">
                {
                    lang === "en" ?
                        "Hi, my name is" :
                        "Cześć, nazywam się"
                }
            </h6>
        </Fade>
        <Fade delay={BASE_DELAY + 75 * 2} bottom distance="2rem">
            <h1 className="text-header font-sans text-[2.1rem] font-bold tracking-wide leading-10 sm:text-5xl sm:leading-[3rem] md:text-6xl md:leading-[3.6rem] lg:text-[4rem] lg:leading-[4rem] xl:text-7xl xl:leading-[4.4rem]">
                {
                    lang === "en" ?
                        "Mikołaj Mrózek." :
                        "Mikołaj Mrózek."
                }
            </h1>
        </Fade>
        <Fade delay={BASE_DELAY + 75 * 3} bottom distance="2rem">
            <h1 className="text-text font-sans text-[2.1rem] font-bold tracking-wide leading-10 sm:text-5xl sm:leading-[4rem] md:text-6xl md:leading-[4.6rem] lg:text-[4rem] lg:leading-[5rem] xl:text-7xl xl:leading-[5.4rem]">
                {
                    lang === "en" ?
                        "I build things for web." :
                        "Tworzę strony internetowe."
                }
            </h1>
        </Fade>
        <Fade delay={BASE_DELAY + 75 * 4} bottom distance="2rem">
            <h4 className="text-text font-sans font-normal my-3 leading-5 sm:w-3/4 lg:text-[1.15rem] lg:w-7/12 lg:leading-6 lg:my-4 xl:text-[1.2rem] xl:w-6/12 2xl:w-5/12">
                {
                    lang === "en" ?
                        "I'm a self-taught front-end developer specializing in building and designing exeptional digital products." :
                        "Jestem front-end developerem, programistą-samoukiem specjalizującym się w budowaniu i projektowaniu produktów cyfrowych."
                }
            </h4>
        </Fade>

        <Fade delay={BASE_DELAY + 75 * 5} bottom distance="2rem">
            <div className="flex flex-row align-middle mt-6 lg:mt-4">

                <a href="#work" className="border-accent shadow-start hover:shadow-finish2 md:rounded-[.3rem] focus:shadow-finish2 focus:text-bg hover:text-bg transition-all ease-in-out duration-300 -tracking-[.075em] text-[.9rem] sm:text-base xl:text-[1.05rem] border-solid border-2 font-mono text-accent rounded-[.25rem] px-5 py-[.35rem] sm:px-6 sm:py-2 xl:px-8 xl:py-[.6rem]">
                    {
                        lang === "en" ?
                            "check out my work" :
                            "zobacz moje prace"
                    }
                </a>


                <a href="#contact" className="font-mono w-fit -tracking-[.075em] text-[.9rem] hover:text-accent focus:text-accent transition-all ease-in-out duration-200 sm:text-base  text-text my-auto ml-5 sm:ml-8 xl:text-[1.05rem] xl:ml-10">
                    {
                        lang === "en" ?
                            "let's get in touch" :
                            "porozmawiajmy"
                    }
                </a>


            </div>
        </Fade>
    </div>;
}
