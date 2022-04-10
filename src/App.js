import FooterMobile from './components/FooterMobile';
import FooterDesktop from './components/FooterDesktop';
import SocialLinksRight from './components/SocialLinksRight';
import NavBar from './components/NavBar';
import React, { useState, useEffect } from 'react';
import { Twirl as Hamburger } from 'hamburger-react'
import { isMobile } from 'react-device-detect';

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

      <NavBar mobile={mobile} visibleNav={visibleNav} isNavbarOpen={isNavbarOpen} _generateMobileNavLinks={_generateMobileNavLinks} lang={lang} setLang={setLang} setNavbarOpen={setNavbarOpen} _generateDesktopNavLinks={_generateDesktopNavLinks} />
      {
        !mobile &&
        <SocialLinksRight />
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
        <FooterDesktop />
      }
      {
        mobile &&
        <FooterMobile />
      }
    </div>
  );
}

export default App;
