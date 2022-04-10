import React from "react";

const TECHNOLOGIES = [
  "React",
  "ReactNative",
  "Tailwind",
  "npm",
  "Git",
  "HTML5",
  "CSS3",
  "Sass",
  "TypeScript",
  "JavaScript (ES6)"
]

export default function About({ }) {

  const _generateTech = () => {
    return TECHNOLOGIES.map((el, i) =>
      <div key={el + String(i)} className="px-4 flex rounded-[.375rem] justify-center align-middle py-2 bg-card">
        <p className="my-auto  text-[.95rem] font-mono text-header tracking-tighter">{el}</p>
      </div>
    )
  }

  return <div className="w-full inline-flex">
    <div className="font-mono hidden md:block font-normal text-accent text-6xl w-[2ch] -tracking-[.3rem] mr-4 md:text-[4.15rem] lg:text-[4.5rem] xl:text-[5.25rem]" />
    <article className="w-full mt-3">
      <div className='w-full flex flex-col-reverse lg:justify-start lg:flex-row'>
        <div className='w-11/12'>
          <p className="w-full text-text font-sans font-light text-[1.1rem] mt-2 leading-[1.6rem]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <span className="text-accent font-normal">diam nonumy eirmod</span> tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p className="w-full text-text mt-5 font-sans font-light text-[1.1rem] leading-[1.6rem]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <span className="text-accent font-normal">At vero eos et accusma</span> et justo
          </p>
          <p className="w-full text-text mt-5 font-sans font-light text-[1.1rem] leading-[1.6rem]">
            Lorem ipsum doerat, sed, connonumy eirmod tempor invidun olor sit amet, consetetur t diam voluptua. <span className="text-accent font-normal">At vero eos et accusma</span> et justo
          </p>
        </div>
        <div className='flex justify-center w-full mt-5 mb-12 xl:mb-0 lg:mb-2 lg:w-8/12 lg:-ml-10 xl:-ml-0'>
          <div className="w-fit h-fit relative -translate-x-3 lg:translate-x-6 lg:-translate-y-8">
            <div className='inset w-full h-full absolute translate-x-8 translate-y-8 dots-on-repeat ' />
            <div className='inset w-full h-full absolute  rounded-[.35rem] bg-bg ' />
            <img src={require("../media/Mask Group 2.png")} className="object-cover aspect-square w-52 lg:w-64 xl:w-72 lg:my-0 mix-blend-luminosity mx-auto rounded-[.35rem]" />
          </div>
        </div>
      </div>
      <div className='w-full'>
        <p className="text-text mt-5 lg:mt-5 mb-2 lg:mb-3 xl:mt-0 font-sans md:text-[1.25rem] font-light text-[1.1rem] leading-[1.6rem]">Technologies I've been working with recently:</p>
        <div className="flex gap-[.35rem] flex-wrap xl:max-w-xl">
          {_generateTech()}
        </div>
      </div>
    </article>
    <div className="font-mono hidden md:block font-normal text-accent text-6xl w-[2ch] -tracking-[.3rem] ml-2 md:text-[4.15rem] lg:text-[4.5rem] xl:text-[5.25rem]" />
  </div>;
}
