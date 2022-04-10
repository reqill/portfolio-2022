import React, { useState, useEffect } from 'react';
import { Twirl as Hamburger } from 'hamburger-react'
import { isMobile } from 'react-device-detect';
import { Instagram, Linkedin, GitHub } from 'react-feather';

const MOBILE_BREAKPOINT = 690;

const PATHS = {
  en: [
    "home",
    "about",
    "work",
    "contact"
  ],
  pl: [
    "główna",
    "o mnie",
    "prace",
    "kontakt"
  ]
}

const App = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false)
  const [hoverCTA, setHoverCTA] = useState(false)
  const [lang, setLang] = useState("en")
  const [width, setWidth] = useState(Number(window.innerWidth));
  const [mobile, setMobile] = useState(false)

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visibleNav, setVisibleNav] = useState(true);

  //check width of viewport
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const _handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisibleNav(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', _handleScroll);
    return () => window.removeEventListener('scroll', _handleScroll);
  }, [prevScrollPos, visibleNav, _handleScroll]);



  //set mobile view and desktop view
  useEffect(() => {
    if (isMobile) {
      setMobile(true)
    } else if (width < MOBILE_BREAKPOINT && !mobile) {
      setMobile(true)
    } else if (mobile && width >= MOBILE_BREAKPOINT) {
      setMobile(false)
    }
  }, [width, isMobile])

  // close navbar by clicking away
  const _closeMenu = () => {
    if (!mobile || !isNavbarOpen) return;
    setNavbarOpen(false)
  }


  const _generateMobileNavLinks = (language) => {
    return PATHS[language].map((el, idx) =>
      <li className="mx-auto" key={el + String(idx)}>
        <a href={`#${PATHS.en[idx]}`} onClick={() => setNavbarOpen(false)}
          className="font-mono text-text hover:text-header flex flex-col w-fit tracking-tight text-lg p-3 font-normal"
        >
          <span className="select-none mx-auto text-accent -mb-2">
            {`0${idx}`}
          </span>
          {el}
        </a>
      </li>
    )
  }

  const _generateDesktopNavLinks = (language) => {
    return PATHS[language].map((el, idx) =>
      <li className="mx-auto px-4" key={el + String(idx)}>
        <a href={`#${PATHS.en[idx]}`} onClick={() => setNavbarOpen(false)}
          className="font-mono text-text capitalize hover:text-header flex flex-row w-fit -tracking-[.05rem] text-[.95rem] p-1 font-normal transition-colors duration-150"
        >
          <span className="select-none mx-auto text-accent pr-[.35rem]">
            {`0${idx}.`}
          </span>
          {el}
        </a>
      </li>
    )
  }

  return (
    <div className="w-full flex flex-col" id="home">

      <div className={`fixed top-0 inline-flex justify-center ease-in-out w-full mx-auto align-middle transition-transform duration-300 pb-1 ${!mobile ? "pt-1 pb-2" : null} ${visibleNav ? "translate-y-0 bg-bg/70  backdrop-blur-lg" : "-translate-y-full bg-bg backdrop-blur-none"}`}>
        <div className="inline-flex justify-between m-auto align-middle w-full md:w-[95%]">
          <a className="w-16 my-auto ml-[.35rem]" href="/">
            <svg version="1.1" id="Warstwa_1" x="0px" y="0px" viewBox="0 0 545.7 330" className="fill-header hover:fill-accent transition-all duration-150">
              <polygon points="244.1,245.3 223.4,280.6 165.5,280.6 215.2,195.8" />
              <polygon points="244.2,49.5 186.5,49.5 186.5,49.4 186.5,49.5 186.5,49.5 51,280.6 108.9,280.6 215.3,98.7 321.8,280.6 379.7,280.6" />
              <polygon points="359.2,49.4 359.2,49.4 301.5,49.4 330.3,98.7 436.8,280.6 494.7,280.6" />
            </svg>
          </a>
          {
            mobile &&
            <>
              <div className={`fixed h-screen right-0 bg-card flex flex-col justify-center align-middle transition-all duration-[250ms] ${isNavbarOpen ? "translate-x-0 shadow-lg" : "translate-x-full shadow-none"}`}>
                <nav className="px-16 py-6">
                  <ul className="list-none flex-col flex justify-center my-auto">
                    {_generateMobileNavLinks(lang)}
                  </ul>
                </nav>
                <div className="absolute bottom-0 inline-flex justify-center left-0 right-0">
                  <p className="mx-auto select none transition-colors duration-150 text-text font-mono font-medium flex-row w-fit tracking-tighter text-lg p-3">
                    <span className={`select-none ${lang === "en" ? "text-accent" : "text-text hover:text-header "} p-1`} onClick={() => setLang("en")}>
                      EN
                    </span>
                    <span className={`select-none ${lang === "pl" ? "text-accent" : "text-text hover:text-header"} p-1`} onClick={() => setLang("pl")}>
                      PL
                    </span>
                  </p>
                </div>
              </div>
              <div className="my-auto pb-px">
                <Hamburger toggled={isNavbarOpen} toggle={setNavbarOpen} color="#44fee0" rounded distance='md' size="26" />
              </div>
            </>
          }
          {
            !mobile &&
            <>
              <div className={`inline-flex aling-middle pt-[.3rem]`}>
                <nav className="my-auto">
                  <ul className="list-none flex-row flex align-middle my-auto">
                    {_generateDesktopNavLinks(lang)}
                  </ul>
                </nav>
                <div className="my-auto pl-6">
                  <p className="mx-auto select none transition-colors duration-150 text-text font-mono font-medium flex-row w-fit tracking-tighter text-base p-3">
                    <span className={`select-none ${lang === "en" ? "text-accent cursor-auto" : "text-text cursor-pointer hover:text-header "} p-[.15rem]`} onClick={() => setLang("en")}>
                      EN
                    </span>
                    <span className={`select-none ${lang === "pl" ? "text-accent cursor-auto" : "text-text cursor-pointer hover:text-header"} p-[.15rem]`} onClick={() => setLang("pl")}>
                      PL
                    </span>
                  </p>
                </div>
              </div>
            </>
          }

        </div>

      </div>
      {
        !mobile &&
        <div className="fixed right-4 md:right-6 lg:right-8 xl:right-12 top-[50vh] -translate-y-[50%] flex flex-col w-fit h-36 justify-between">
          <a href="" target="_blank" className="group my-auto" title="GitHub">
            <GitHub size={28} className="stroke-text stroke-[1.9] group-hover:stroke-accent group-hover:-translate-y-[.4rem] transition-all ease-in-out " />
          </a>
          <a href="" target="_blank" className="group my-auto" title="Intagram">
            <Instagram size={28} className="stroke-text stroke-[1.9] group-hover:stroke-accent group-hover:-translate-y-[.4rem] transition-all ease-in-out " />
          </a>
          <a href="" target="_blank" className="group my-auto" title="LinkedIn">
            <Linkedin size={28} className="stroke-text stroke-[1.9] group-hover:stroke-accent group-hover:-translate-y-[.4rem] transition-all ease-in-out " />
          </a>
        </div>
      }

      <main className="w-11/12 sm:w-10/12 xl:w-9/12 mx-auto" onClick={() => _closeMenu()}>
        <div className="h-screen w-full flex flex-col align-middle justify-center">
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
            <a
              onMouseEnter={() => setHoverCTA(true)}
              onMouseLeave={() => setHoverCTA(false)}
              style={{ boxShadow: hoverCTA ? "inset 207px 0 0 0 #44fee0" : "inset 0 0 0 0 #44fee0" }}
              href="#work"
              className="border-accent hover:text-bg transition-all ease-in-out duration-300 -tracking-[.075em] text-[.9rem] sm:text-base xl:text-[1.05rem] border-solid border-2 font-mono text-accent rounded-[.2rem] px-4 pt-1 pb-[.3rem] sm:px-6 sm:py-2 xl:px-7 xl:py-[.6rem]">
              check out my work
            </a>
            <a href="#contact" className="font-mono w-fit -tracking-[.075em] text-[.9rem] hover:text-accent transition-all ease-in-out duration-200 sm:text-base  text-text my-auto ml-5 sm:ml-8 xl:text-[1.05rem] xl:ml-10">
              let's get in touch
            </a>
          </div>
        </div>
      </main>
      {
        !mobile &&
        <div className="w-full inline-flex justify-center my-3">
          <p className="font-mono cursor-default font-normal text-[.925rem] tracking-tight text-text hover:text-accent mx-auto">
            2022 © Mikołaj Mrózek
          </p>
        </div>
      }
      {
        mobile &&
        <div className="w-full inline-flex justify-between my-3 px-4 align-middle">
          <p className="font-mono font-normal my-auto text-[.925rem] cursor-default tracking-tight text-text hover:text-accent">
            2022 © Mikołaj Mrózek
          </p>
          <div className="inline-flex my-auto">
            <a href="" target="_blank" className="group my-auto " title="GitHub">
              <GitHub size={26} className="stroke-text stroke-[1.75] group-hover:stroke-accent transition-all ease-in-out " />
            </a>
            <a href="" target="_blank" className="group my-auto ml-3" title="Intagram">
              <Instagram size={26} className="stroke-text stroke-[1.75] group-hover:stroke-accent transition-all ease-in-out " />
            </a>
            <a href="" target="_blank" className="group my-auto ml-3" title="LinkedIn">
              <Linkedin size={26} className="stroke-text stroke-[1.75] group-hover:stroke-accent transition-all ease-in-out " />
            </a>
          </div>
        </div>
      }

    </div>


  );
}

export default App;
