import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Work from './components/Work'
import FooterMobile from './components/FooterMobile';
import FooterDesktop from './components/FooterDesktop';
import SocialLinksRight from './components/SocialLinksRight';
import NavBar from './components/NavBar';
import Section from './components/Section'
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { isMobile } from 'react-device-detect';

const MOBILE_BREAKPOINT = 690;

const App = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false)
  const [lang, setLang] = useState("pl")
  const [width, setWidth] = useState(Number(window.innerWidth));
  const [mobile, setMobile] = useState(false)

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visibleNav, setVisibleNav] = useState(true);
  const queryParams = new URLSearchParams(window.location.search);
  const langParams = queryParams.get('lang');

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

  useEffect(() => {
    if (langParams === "en" && lang === "pl") {
      setLang("en")
    } else if (lang !== "pl") {
      window.history.pushState({}, "", "/");
      setLang("pl")
    }
  }, [])

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
      setNavbarOpen(false)
      setMobile(false)
    }
  }, [width, isMobile])

  // close navbar by clicking away
  const _closeMenu = () => {
    if (!mobile || !isNavbarOpen) return;
    setNavbarOpen(false)
  }


  return (
    <div className="w-full flex flex-col" id="home">
      <NavBar mobile={mobile} visibleNav={visibleNav} isNavbarOpen={isNavbarOpen} lang={lang} setLang={setLang} setNavbarOpen={setNavbarOpen} />
      {
        !mobile &&
        <SocialLinksRight lang={lang} />

      }
      <main className="w-11/12 sm:w-10/12 xl:w-9/12 mx-auto" onClick={() => _closeMenu()}>
        <Home lang={lang} />
        <Fade bottom delay={300} distance="4rem">
          <Section id="about" number="01" header={lang === "en" ? "About" : "O mnie"} subheader={lang === "en" ? "who is this guy?" : "kim właściwie jestem?"} />
        </Fade>
        <About lang={lang} />
        <Fade bottom delay={300} distance="4rem">
          <Section id="work" number="02" header={lang === "en" ? "Work" : "Prace"} subheader={lang === "en" ? "my featured projects." : "wyróżnione projekty"} />
        </Fade>
        <Work lang={lang} />
        <Fade bottom delay={300} distance="4rem">
          <Section id="contact" number="03" header={lang === "en" ? "Contact" : "Kontakt"} subheader={lang === "en" ? "let's get in touch!" : "porozmawiajmy!"} />
        </Fade>
        <Contact lang={lang} />
      </main>
      {
        !mobile &&
        <FooterDesktop lang={lang} />
      }
      {
        mobile &&
        <FooterMobile lang={lang} />
      }
    </div>
  );
}

export default App;
