import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import Fade from 'react-reveal/Fade';


const Contact = ({ lang }) => {
  const [email, setEmail] = useState("")
  const [topic, setTopic] = useState("")
  const [message, setMessage] = useState("")
  const [send, setSend] = useState(false)
  const [error, setError] = useState("Your message has been delivered!")

  const _submit = (e) => {
    e.preventDefault();
    emailjs.send('service_oqd2lnv', 'template_vwgaa2e', { email: email, title: topic, message: message }, 'jdz--DZkGDC5Te1Ax')
      .then((response) => {
        // console.log('SUCCESS!', response.status, response.text);
        setEmail("")
        setTopic("")
        setMessage("")
        setSend(true)
        const tmp = lang === "en" ? "Your message has been delivered!" : "Twoja wiadomośc została dostarczona!"
        setError(tmp)
      }, (err) => {
        setEmail("")
        setTopic("")
        setMessage("")
        setSend(true)
        const tmp = lang === "en" ? "Your message couldn't be delivered due to server error. Try again later." : "Twoja wiadomość nie mogła zostac dostarczona. Spróbuj ponownie później."
        setError(tmp)
        // console.log('FAILED...', err);
      });
  }

  return (
    <div className="w-full flex flex-row mb-14 specific:mb-32 specific:mt-8 mt-4">
      <Fade bottom delay={400} distance="4rem">
        <div className="font-mono lg:-tracking-[.5rem] hidden md:block font-normal text-accent text-6xl w-[2ch] -tracking-[.3rem] mr-2 md:text-[4.15rem] lg:text-[4.5rem] xl:text-[5.25rem]" />
        <div className="w-full flex flex-col specific:flex-row specific:justify-between justify-center specific:align-middle">
          <div className="m-auto w-fit specific:pb-8">
            <p className="w-[32ch] text-text font-sans font-light text-[1.1rem]">
              {
                lang === "en" ?
                  `I'm open for new opportunities. So if you're interested in cooperation, have any other questions, or just wanted to say "hi" then feel free to contact me by email.` :
                  `Jestem otwarty na na nowe możliwości. Więc jeżeli jesteś zainteresowany współpracą, masz inne pytania, lub po prostu chcesz napisać "cześć" to wiedz, że moja skrzynka jest zawsze otwarta.`
              }

            </p>
            <a href="mailto:mikolaj.marcin.mrozek@gmail.com" className="w-full mt-8 shadow-start hover:shadow-finish focus:shadow-finish flex justify-center border-accent focus:text-bg hover:text-bg transition-all ease-in-out duration-300 -tracking-[.075em] text-[.9rem] text-base xl:text-[1.05rem] border-solid border-2 font-mono text-accent rounded-[.3rem] px-4 py-2 sm:px-6 sm:py-2 xl:px-7 xl:py-[.6rem]">
              {
                lang === "en" ?
                  "send an e-mail direclty" :
                  "wyślij maila bezpośrednio"
              }
            </a>
          </div>
          <Fade bottom delay={500}>
            <div className="flex flex-row w-3/4 justify-center specific:flex-col specific:w-fit specific:h-fit specific:my-auto specific:pb-8 align-middle mx-auto my-6">
              <div className="bg-disabled w-full h-[.01rem] my-auto max-w-[10rem] specific:w-[.01rem] specific:h-9 specific:mx-auto" />

              <p className="font-mono text-disabled text-2xl px-2 specific:pt-[.15rem] specific:pb-[.4rem]">
                {
                  lang === "en" ?
                    "or" :
                    "lub"
                }
              </p>


              <div className="bg-disabled w-full h-[.01rem] my-auto max-w-[10rem] specific:w-[.01rem] specific:h-9 specific:mx-auto" />
            </div>
          </Fade>
          <div className="flex flex-col w-fit mx-auto justify-center ">
            <Fade bottom delay={500}>
              <form onSubmit={_submit} className="relative">
                <div className={`bg-card mb-[.6rem] pt-[.35rem] pb-2 px-3 mx-auto w-[32ch] rounded-[.3rem] text-text font-sans font-light text-[1.1rem] focus-within:ring-1 transition-all duration-300 ease-in-out focus-within:ring-accent ${!send ? "opacity-1000" : "opacity-0"}`}>
                  <input value={email} type="email" required placeholder="e-mail" onChange={(e) => setEmail(e.target.value)} className="rounded-sm w-full outline-none autofill:bg-card bg-transparent  text-text font-sans font-light text-[1.1rem] " />
                </div>
                <div className={`bg-card mb-[.6rem] pt-[.35rem] pb-2 px-3 mx-auto w-[32ch] rounded-[.3rem] text-text font-sans font-light text-[1.1rem] focus-within:ring-1 transition-all duration-300 ease-in-out focus-within:ring-accent ${!send ? "opacity-1000" : "opacity-0"}`}>
                  <input value={topic} type="title" required placeholder={lang === "en" ? "title" : "tytuł"} onChange={(e) => setTopic(e.target.value)} className="rounded-sm w-full outline-none  autofill:bg-card bg-transparent text-text font-sans font-light text-[1.1rem] " />
                </div>
                <div className={`bg-card mb-[.6rem] pt-[.35rem] pb-2 px-3 mx-auto w-[32ch] rounded-[.3rem] text-text font-sans font-light text-[1.1rem] focus-within:ring-1 transition-all duration-300 ease-in-out focus-within:ring-accent ${!send ? "opacity-1000" : "opacity-0"}`}>
                  <textarea value={message} type="text" required placeholder={lang === "en" ? "message" : "wiadomość"} onChange={(e) => setMessage(e.target.value)} className="w-full autofill:bg-card max-w-full h-32 min-h-[8rem] max-h-48 overflow-x-hidden overflow-y-auto outline-none bg-transparent text-text font-sans font-light text-[1.1rem] " />
                </div>
                <button className={`w-full mt-6 shadow-start hover:shadow-finish focus:shadow-finish flex justify-center border-accent hover:text-bg focus:text-bg transition-all ease-in-out duration-300 -tracking-[.075em] text-[.9rem] text-base xl:text-[1.05rem] border-solid border-2 font-mono text-accent rounded-[.3rem] px-4 py-2 sm:px-6 sm:py-2 xl:px-7 xl:py-[.6rem] ${!send ? "opacity-1000" : "opacity-0"}`}>
                  {
                    lang === "en" ?
                      "send a message" :
                      "wyślij wiadomość"
                  }
                </button>
                <div className={`absolute flex flex-col justify-center align-middle inset-0 rounded-[.3rem] transition-all duration-300 ease-in-out bg-card ${send ? "scale-100 opacity-1000" : "scale-0 opacity-0"}`}>
                  <p className="w-10/12 mx-auto outline-none text-center autofill:bg-card bg-transparent  text-header font-sans font-normal text-[1.25rem]">{error}</p>
                  <button className="w-10/12 mx-auto outline-none autofill:bg-card bg-transparent  text-accent font-sans font-thin text-base" onClick={() => setSend(false)}>
                    {
                      lang === "en" ?
                        "Send another message" :
                        "Wyślij kolejną wiadomość"
                    }
                  </button>
                </div>
              </form>
            </Fade>
          </div>
        </div>
        <div className="font-mono lg:-tracking-[.5rem] hidden md:block font-normal text-accent text-6xl w-[2ch] -tracking-[.3rem] mr-2 md:text-[4.15rem] lg:text-[4.5rem] xl:text-[5.25rem]" />

      </Fade>
    </div>
  );
}


export default Contact;