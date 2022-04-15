import React from "react";
import { GitHub, ExternalLink, Eye } from "react-feather";
import Fade from 'react-reveal/Fade';

const TECH = [
  {
    developmnent: [
      "React",
      "Tailwind CSS",
      "npm",
      "Sass",
      "responisve",
      "react-router",
      "git",
    ],
    design: [
      "Adobe XD",
      "Illustrator",
      "wireframing"
    ]
  },
  {
    developmnent: [
      "React Native",
      "TypeScript",
      "Expo",
      "npm",
      "git",
    ],
    design: [
      "Adobe XD",
      "Illustrator",
      "wireframing",
      "prototyping"
    ]
  },
  {
    developmnent: [
      "React",
      "Tailwind CSS",
      "responsive",
      "npm",
      "git",
    ],
    design: [
      "Adobe XD",
      "wireframing",
    ]
  }
]

export default function Work({ }) {

  const _generateTech = (data) => {
    return data?.map((el, idx) =>
      <div key={el + idx} className="bg-card px-3 py-[.15rem] rounded-md">
        <p className="font-mono text-text text-[.95rem] tracking-tight">
          {el}
        </p>
      </div>
    )
  }


  return (
    <div className="w-full justify-center flex flex-col">
      <Fade bottom delay={500} distance="4rem">
        <article className="w-fit mx-auto mt-9 px-2 mb-24">
          <div className='w-full flex flex-col-reverse justify-center align-middle lg:justify-start lg:flex-row xl:justify-around'>
            <div className='flex flex-col mx-auto mt-5 lg:mt-4 w-64 sm:w-80 md:w-72 lg:w-64 xl:w-72 justify-center md:justify-start  relative mb-12 xl:mb-0 lg:mb-2 lg:-ml-10 xl:-ml-0'>
              <div className="relative mx-auto mt-3 w-full lg:mt-8">
                <div className='inset w-full h-full absolute -translate-x-8 translate-y-8 dots-on-repeat ' />
                <div className="w-full h-fit relative">
                  <div className='inset w-full h-full absolute  rounded-[.35rem] bg-bg shadow-3xl' />
                  <img src={require("../media/Image 8.png")} className="object-cover w-full lg:my-0 mix-blend-luminosity rounded-[.35rem]" />
                </div>
                <div className="w-full h-fit relative mt-4">
                  <div className='inset w-full h-full absolute  rounded-[.35rem] bg-bg shadow-3xl' />
                  <img src={require("../media/Image 9.png")} className="object-cover w-full lg:my-0 mix-blend-luminosity rounded-[.35rem]" />
                </div>
              </div>
            </div>
            <div className='mx-auto sm:mx-0 w-fit lg:pl-10 max-w-[54ch]'>
              <p className="w-full font-mono text-accent text-sm tracking-tight lg:text-right xl:text-[0.9rem] xl:tracking-tighter">
                {`design & build`}
              </p>
              <p className="w-full text-header font-sans font-semibold text-[1.6rem] leading-[1.1rem] sm:text-[1.8rem] sm:pb-1 lg:text-right">
                student council website
              </p>
              <p className="w-full text-text font-sans text-justify font-light text-[1.1rem] mt-6 leading-[1.6rem]">
                Website created in colaboration with 2 back-end developers for student council in Gliwice. Platform allows students to check daily "lucky numers", browse student's news, aknowledge school and student council events, and much more. Website has build-in content editor, custom calendar component and is fully responsive for user convinience.
              </p>
              <div>
                <p className="text-text mt-5 lg:mt-5 mb-1 lg:mb-2 xl:mt-5 font-sans md:text-[1.25rem] font-light text-[1.1rem] leading-[1.6rem]">
                  Development:
                </p>
                <div className="w-full flex gap-1 flex-wrap">
                  {_generateTech(TECH[0].developmnent)}
                </div>

              </div>
              <div>
                <p className="text-text mt-5 lg:mt-5 mb-1 lg:mb-2 xl:mt-5 font-sans md:text-[1.25rem] font-light text-[1.1rem] leading-[1.6rem]">
                  Design:
                </p>
                <div className="w-full flex gap-1 flex-wrap">
                  {_generateTech(TECH[0].design)}
                </div>
              </div>
              <div className="w-full inline-flex justify-end align-middle gap-[.6rem] mt-6">
                <a href="" target="_blank" title="Website" className="group my-auto">
                  <ExternalLink size={28} className="stroke-text stroke-[1.7] group-hover:stroke-accent group-hover:-translate-y-[.4rem] transition-all ease-in-out" />
                </a>
                <a href="" target="_blank" title="GitHub" className="group my-auto">
                  <GitHub size={28} className="stroke-text stroke-[1.7] group-hover:stroke-accent group-hover:-translate-y-[.4rem] transition-all ease-in-out" />
                </a>

              </div>
            </div>
          </div>
        </article>
      </Fade>


      <Fade bottom delay={500} distance="4rem">
        <article className="w-fit mx-auto mt-12 px-2 mb-24">
          <div className='w-full flex flex-col-reverse justify-center align-middle lg:justify-start lg:flex-row-reverse xl:justify-around'>
            <div className='flex flex-col mx-auto mt-5 lg:mt-4 w-70 sm:w-[21rem] md:w-[19rem] lg:w-[17rem] xl:w-[19rem] justify-center md:justify-start  relative mb-12 xl:mb-0 lg:mb-2 lg:-ml-10 xl:-ml-0'>
              <div className="relative mx-auto gap-3 inline-flex mt-3 w-full lg:mt-8">
                <div className='inset w-full h-full absolute -translate-x-8 lg:translate-x-8 translate-y-8 dots-on-repeat ' />
                <div className="w-full h-fit relative">
                  <div className='inset w-full h-full absolute  rounded-[.35rem] bg-bg shadow-3xl' />
                  <img src={require("../media/Image 13.png")} className="object-cover w-full lg:my-0 mix-blend-luminosity rounded-[.35rem]" />
                </div>
                <div className="w-full h-fit relative">
                  <div className='inset w-full h-full absolute  rounded-[.35rem] bg-bg shadow-3xl ' />
                  <img src={require("../media/Image 14.png")} className="object-cover w-full lg:my-0 mix-blend-luminosity rounded-[.35rem]" />
                </div>
              </div>
            </div>
            <div className='mx-auto sm:mx-0 w-fit lg:pr-10 max-w-[54ch]'>
              <p className="w-full font-mono text-accent text-sm tracking-tight xl:text-[0.9rem] xl:tracking-tighter">
                {`design & build`}
              </p>
              <p className="w-full text-header font-sans font-semibold text-[1.6rem] leading-[1.1rem] sm:text-[1.8rem] sm:pb-1">
                mobile app tchnienie
              </p>
              <p className="w-full text-text font-sans text-justify font-light text-[1.1rem] mt-6 leading-[1.6rem]">
                Mobile app created for educational platform "Zwolnieni z Teorii".  App is designed for people wanting to create good habits, by rewarding them for consistency. Application allows to search and listen to courses and meditation classes and tracks your daily mood.
              </p>
              <p className="w-full text-[#3d5772] font-sans text-justify font-light italic text-[.9rem] mt-2 leading-[1.1rem]">
                Disclaimer: project was abandoned by content creating group, that's app exist in preview form - without any content.
              </p>
              <div>
                <p className="text-text mt-5 lg:mt-5 mb-1 lg:mb-2 xl:mt-5 font-sans md:text-[1.25rem] font-light text-[1.1rem] leading-[1.6rem]">
                  Development:
                </p>
                <div className="w-full flex gap-1 flex-wrap">
                  {_generateTech(TECH[1].developmnent)}
                </div>

              </div>
              <div>
                <p className="text-text mt-5 lg:mt-5 mb-1 lg:mb-2 xl:mt-5 font-sans md:text-[1.25rem] font-light text-[1.1rem] leading-[1.6rem]">
                  Design:
                </p>
                <div className="w-full flex gap-1 flex-wrap">
                  {_generateTech(TECH[1].design)}
                </div>
              </div>
              <div className="w-full inline-flex flex-row lg:flex-row-reverse  justify-end  align-middle gap-[.65rem] mt-7">
                <a href="" target="_blank" title="View prototype flow" className="group my-auto">
                  <Eye size={28} className="stroke-text stroke-[1.7] group-hover:stroke-accent group-hover:-translate-y-[.4rem] transition-all ease-in-out" />
                </a>
                <a href="" target="_blank" title="GitHub" className="group my-auto">
                  <GitHub size={28} className="stroke-text stroke-[1.7] group-hover:stroke-accent group-hover:-translate-y-[.4rem] transition-all ease-in-out" />
                </a>

              </div>
            </div>
          </div>
        </article>
      </Fade>

      <Fade bottom delay={500} distance="4rem">
        <article className="w-fit mx-auto mt-12 px-2 mb-12">
          <div className='w-full flex flex-col-reverse justify-center align-middle lg:justify-start lg:flex-row xl:justify-around'>
            <div className='flex flex-col mx-auto mt-5 lg:mt-4 w-64 sm:w-80 md:w-72 lg:w-64 xl:w-72 justify-center md:justify-start  relative mb-12 xl:mb-0 lg:mb-2 lg:-ml-10 xl:-ml-0'>
              <div className="relative mx-auto mt-3 w-full lg:mt-8">
                <div className='inset w-full h-full absolute -translate-x-8 translate-y-8 dots-on-repeat ' />
                <div className="w-full h-fit relative">
                  <div className='inset w-full h-full absolute  rounded-[.35rem] bg-bg shadow-3xl' />
                  <img src={require("../media/Image 10.png")} className="object-cover w-full lg:my-0 mix-blend-luminosity rounded-[.35rem]" />
                </div>
                <div className="w-full h-fit relative mt-4">
                  <div className='inset w-full h-full absolute  rounded-[.35rem] bg-bg shadow-3xl ' />
                  <img src={require("../media/Image 11.png")} className="object-cover w-full lg:my-0 mix-blend-luminosity rounded-[.35rem]" />
                </div>
              </div>
            </div>
            <div className='mx-auto sm:mx-0 w-fit lg:pl-10 max-w-[54ch]'>
              <p className="w-full font-mono text-accent text-sm tracking-tight lg:text-right xl:text-[0.9rem] xl:tracking-tighter">
                {`design & build`}
              </p>
              <p className="w-full text-header font-sans font-semibold text-[1.6rem] leading-[1.1rem] sm:text-[1.8rem] sm:pb-1 lg:text-right">
                personal portfolio website
              </p>
              <p className="w-full text-text font-sans text-justify font-light text-[1.1rem] mt-6 leading-[1.6rem]">
                Website created to showcase my skills and abilities to gain interst of potential employers and clients. This form is simple, yet effective and it usually changes once a year. I pay special attention to make sure that every next iteration is better than previous one (and this is the 3rd!).
              </p>
              <div>
                <p className="text-text mt-5 lg:mt-5 mb-1 lg:mb-2 xl:mt-5 font-sans md:text-[1.25rem] font-light text-[1.1rem] leading-[1.6rem]">
                  Development:
                </p>
                <div className="w-full flex gap-1 flex-wrap">
                  {_generateTech(TECH[2].developmnent)}
                </div>

              </div>
              <div>
                <p className="text-text mt-5 lg:mt-5 mb-1 lg:mb-2 xl:mt-5 font-sans md:text-[1.25rem] font-light text-[1.1rem] leading-[1.6rem]">
                  Design:
                </p>
                <div className="w-full flex gap-1 flex-wrap">
                  {_generateTech(TECH[2].design)}
                </div>
              </div>
              <div className="w-full inline-flex justify-end align-middle gap-[.6rem] mt-6">
                <a href="" target="_blank" title="GitHub" className="group my-auto">
                  <GitHub size={28} className="stroke-text stroke-[1.7] group-hover:stroke-accent group-hover:-translate-y-[.4rem] transition-all ease-in-out" />
                </a>

              </div>
            </div>
          </div>
        </article>
      </Fade>


    </div>
  );
}

