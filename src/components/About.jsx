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



const REACT_LOGO = <svg height="100%" viewBox="-11.5 -10.23174 23 20.46348">
  <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
  <g stroke="#61dafb" stroke-width="1" fill="none">
    <ellipse rx="11" ry="4.2" />
    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
  </g>
</svg>

const NPM_LOGO = <svg height="90%" x="0px" y="0px" viewBox="0 0 18 7">
  <path fill="#CB3837" d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z" />
  <polygon fill="#FFFFFF" points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 " />
  <path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z" />
  <polygon fill="#FFFFFF" points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 " />
</svg>

const GIT_LOGO = <svg height="100%" id="Layer_1" x="0px" y="0px" viewBox="0 0 97 97" enable-background="new 0 0 97 97">
  <g>
    <path fill="#F05133" d="M92.71,44.408L52.591,4.291c-2.31-2.311-6.057-2.311-8.369,0l-8.33,8.332L46.459,23.19   c2.456-0.83,5.272-0.273,7.229,1.685c1.969,1.97,2.521,4.81,1.67,7.275l10.186,10.185c2.465-0.85,5.307-0.3,7.275,1.671   c2.75,2.75,2.75,7.206,0,9.958c-2.752,2.751-7.208,2.751-9.961,0c-2.068-2.07-2.58-5.11-1.531-7.658l-9.5-9.499v24.997   c0.67,0.332,1.303,0.774,1.861,1.332c2.75,2.75,2.75,7.206,0,9.959c-2.75,2.749-7.209,2.749-9.957,0c-2.75-2.754-2.75-7.21,0-9.959   c0.68-0.679,1.467-1.193,2.307-1.537V36.369c-0.84-0.344-1.625-0.853-2.307-1.537c-2.083-2.082-2.584-5.14-1.516-7.698   L31.798,16.715L4.288,44.222c-2.311,2.313-2.311,6.06,0,8.371l40.121,40.118c2.31,2.311,6.056,2.311,8.369,0L92.71,52.779   C95.021,50.468,95.021,46.719,92.71,44.408z" />
  </g>
</svg>

const JS_LOGO = <svg height="100%" viewBox="0 0 630 630">
  <rect width="630" height="630" fill="#f7df1e" />
  <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
</svg>

const TAILWIND_LOGO = <svg height="120%" style={{ marginTop: "-3px" }} viewBox="0 0 1000 1000" fill="none">
  <path d="M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z" fill="#07B6D5" />
  <path d="M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z" fill="#07B6D5" />
</svg>

const SASS_LOGO = <svg height="100%" id="Layer_1" data-name="Layer 1" viewBox="0 0 411.72668 410.66298">
  <path class="cls-2" fill="#c69" d="M206.29159-.20813c113.45849,0,205.43509,91.97711,205.43509,205.43551s-91.9766,205.43559-205.43509,205.43559S.85559,318.68638,.85559,205.22738,92.83269-.20813,206.29159-.20813h0Z" />
  <path class="cls-1" fill="#fff" d="M335.15438,87.72108c-9.3027-36.4858-69.80079-48.4805-127.0586-28.1387-34.07519,12.106-70.9643,31.106-97.48819,55.9156-31.5367,29.4975-36.566,55.1723-34.4932,65.89989,7.312,37.854,59.1797,62.59711,80.501,80.95451v.1114c-6.2871,3.0947-52.3033,26.3828-63.07279,50.1914-11.3628,25.1172,1.8086,43.1406,10.52929,45.5664,27.0186,7.5176,54.7446-6.0039,69.645-28.2285,14.3784-21.4483,13.18171-49.1446,6.9331-62.9209,8.6192-2.2744,18.669-3.293,31.44-1.8018,36.0371,4.209,43.1074,26.711,41.7558,36.127-1.3515,9.4179-8.9101,14.5957-11.4375,16.1582-2.5273,1.5644-3.2988,2.1054-3.0859,3.2675,.3066,1.6895,1.4766,1.627,3.6309,1.26179,2.9668-.5,18.9238-7.66019,19.6054-25.043,.8692-22.07029-20.2812-46.75779-57.73-46.11329-15.4233,.2666-25.121,1.7334-32.1264,4.3399-.5181-.5899-1.0449-1.1768-1.5899-1.7579-23.15179-24.7011-65.9511-42.1738-64.1357-75.3803,.6602-12.0723,4.8564-43.8613,82.2388-82.4209,63.39011-31.5869,114.1362-22.8946,122.9057-3.6309,12.52741,27.5215-27.1211,78.6729-92.9511,86.0518-25.0811,2.8115-38.2876-6.9092-41.5728-10.5293-3.4585-3.8115-3.9736-3.9834-5.2651-3.26811-2.1031,1.16511-.7701,4.53031,0,6.53571,1.9658,5.1152,10.0312,14.186,23.7822,18.6987,12.0967,3.9697,41.5439,6.1504,77.15721-7.6245,39.88479-15.4287,71.03129-58.3472,61.88279-94.2217Zm-169.6894,185.938c2.9883,11.0557,2.66061,21.3662-.4268,30.7031-.3428,1.0371-.7202,2.0625-1.1304,3.0762-.4106,1.0127-.854,2.0137-1.3305,3.0019-2.3809,4.9395-5.57569,9.5635-9.4883,13.8321-11.9365,13.02149-28.6133,17.9453-35.7642,13.7968-7.7221-4.4765-3.8545-22.8359,9.9849-37.4648,14.8877-15.7383,36.3086-25.8574,36.3086-25.8574l-.0322-.0645c.6162-.332,1.2431-.6738,1.8789-1.0234Z" />
</svg>

const PICS = [
  REACT_LOGO,
  TAILWIND_LOGO,
  NPM_LOGO,
  GIT_LOGO,
  JS_LOGO,
  SASS_LOGO
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
    <Fade bottom delay={400} distance="4rem">
      <div className="font-mono lg:-tracking-[.5rem] hidden md:block font-normal text-accent text-6xl w-[2ch] -tracking-[.3rem] mr-4 md:text-[4.15rem] lg:text-[4.5rem] xl:text-[5.25rem]" />
      <article className="w-full mt-4">
        <div className='w-full flex flex-col-reverse lg:justify-start lg:flex-row'>
          <div className='mx-auto sm:mx-0 w-11/12'>
            <p className="w-full text-text text-justify font-sans font-light text-[1.1rem] mt-2 leading-[1.6rem]">
              {
                lang == "en" ?
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
                "These days my main focus is developing existing personal projects, and searching for new ways I could imporove my skills." :
                "W chwili obecnej skupiam się na rozwoju projektów personalnych, oraz szukam nowych możliwości na poszerzenie swoich horyzontów."
              }
            </p>
          </div>
          <Fade bottom delay={600} distance="4rem">
            <div className='flex justify-center w-full mt-5 lg:mt-7 mb-12 xl:mb-0 lg:mb-2 lg:w-8/12 lg:-ml-10 xl:-ml-0'>
              <div className="w-fit  h-fit relative -translate-x-3 lg:translate-x-6 lg:-translate-y-8">
                <div className='inset w-full h-full absolute translate-x-8 translate-y-8 dots-on-repeat ' />
                <div className='inset w-full h-full absolute  rounded-[.35rem] bg-bg ' />
                <img src={require("../media/Mask Group 2.png")} className="object-cover aspect-square w-52 lg:w-64 xl:w-72 lg:my-0 mix-blend-luminosity mx-auto rounded-[.35rem]" />
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
