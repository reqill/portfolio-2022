import React from "react";
import Fade from 'react-reveal/Fade';


const TECHNOLOGIES = [
  "React",
  "Tailwind CSS",
  "Typescript",
  "Git",
  "Firebase",
  "Sass",
]

export default function About({ lang }) {

  const _generateTech = () => {
    return TECHNOLOGIES.map((el, i) =>
      <div key={el + String(i)} className="px-4 inline-flex rounded-[.375rem] justify-center cursor-default align-middle py-2 transition-all duration-150 bg-card hover:-translate-y-1 hover:shadow-lg">
        {/* <div className={`w-[1.3rem] rounded-md ${el === "npm" ? "mr-10" : "mr-3 "}`}>
          {PICS[i]}
        </div> */}
        <p className="my-auto  text-[.95rem] font-mono text-header tracking-tighter">{el}</p>
      </div>
    )
  }

  return <div className="w-full inline-flex mb-24">
    <Fade bottom delay={300} distance="4rem">
      <div className="font-mono lg:-tracking-[.5rem] hidden md:block font-normal text-accent text-6xl w-[2ch] -tracking-[.3rem] mr-4 md:text-[4.15rem] lg:text-[4.5rem] xl:text-[5.25rem]" />
      <article className="w-full mt-4">
        <div className='w-full flex flex-col-reverse lg:justify-start lg:flex-row'>
          <div className='mx-auto sm:mx-0 w-11/12'>
            <p className="w-full text-text text-justify font-sans font-light text-[1.1rem] mt-2 leading-[1.6rem]">
              {
                lang === "en" ?
                  "Hello! My name is Mikołaj and I love designing and building websites using modern technologies. My interest in coding dates back to 2015 when I started programming microcontrollers in C. Then in 2019 I have begun my adventure with plain HTML, CSS and JavaScript that have helped me with creating my first more complex website." :
                  "Cześć! Nazywam się Mikołaj i uwielbiam projektować oraz budować strony internetowe używając nowoczesnych technologii. Moje zainteresowanie kodowaniem sięga roku 2015 w którym zacząłem programować mikrokontrolery w języku C. Później w 2019 rozpocząłem moją przygodę z czystym HTML-em, CSS-em i JS-em które pomogły mi w stworzeniu mojej pierwszej bardziej zaawansowanej strony."
              }
            </p>
            <p className="w-full text-text mt-5 text-justify  font-sans font-light text-[1.1rem] leading-[1.6rem]">
              {
                lang === "en" ?
                  "Fast-forward to today, I've learned how to use tools that speed up my workflow and have gained experiance through many projects. Nevertheless I'm not limiting myself and I'm always looking forward to learn new ways to solve problems I encounter." :
                  "Do dnia dzisiejszego zyskałem wiele nowych umiejętności, oraz doświadczeń które pozwalają mi osiągać wyznaczone cele. Niemniej nie ograniczam się tylko do rzeczy które już znam i z chęcią rozglądam się za nowymi technologiami z którymi mogę pracować."
              }
            </p>
            <p className="w-full text-text mt-5 text-justify  font-sans font-light text-[1.1rem] leading-[1.6rem]">
              {lang === "en" ?
                "These days my main focus is to complete my first NPM package, and searching for new ways I could imporove my skills." :
                "W chwili obecnej skupiam się na ukończeniu swojej paczki NPM, oraz szukam nowych możliwości na poszerzenie swoich horyzontów."
              }
            </p>
          </div>
          <Fade bottom delay={450} distance="4rem">
            <div className='flex justify-center w-full mt-5 lg:mt-7 mb-12 xl:mb-0 lg:mb-2 lg:w-8/12 lg:-ml-10 xl:-ml-0'>
              <div className="w-fit  h-fit relative -translate-x-3 lg:translate-x-6 lg:-translate-y-8">
                <div className='inset w-full h-full absolute translate-x-8 translate-y-8 dots-on-repeat ' />
                <div className='inset w-full h-full absolute  rounded-[.35rem] bg-bg ' />
                <img alt={lang === "en" ? "photo of me ;)" : "moja fotografia ;o"} src={require("../media/mikolajmrozek.jpg")} className="object-cover aspect-square w-52 lg:w-64 xl:w-72 lg:my-0 mix-blend-luminosity mx-auto rounded-[.35rem]" />
              </div>
            </div>
          </Fade>

        </div>
        <div className='w-11/12 mx-auto sm:mx-0 sm:w-full'>
          <p className="text-text mt-5 lg:mt-5 mb-2 lg:mb-3 xl:mt-5 font-sans md:text-[1.25rem] font-light text-[1.1rem] leading-[1.6rem]">
            {
              lang === "en" ?
                "Technologies I've been working with recently:" :
                "Technologie z których ostatnio korzystam:"
            }
          </p>
          <div className="flex gap-[.35rem] flex-wrap xl:max-w-xl">
            {_generateTech()}
          </div>
        </div>
      </article>
      <div className="font-mono lg:-tracking-[.5rem] hidden md:block font-normal text-accent text-6xl w-[2ch] -tracking-[.3rem] ml-2 md:text-[4.15rem] lg:text-[4.5rem] xl:text-[5.25rem]" />
    </Fade>

  </div>;
}
