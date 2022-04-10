import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const Contact = ({ }) => {
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
        setError("Your message has been delivered!")
      }, (err) => {
        setEmail("")
        setTopic("")
        setMessage("")
        setSend(true)
        setError("Your message couldn't be delivered due to server error. Try again later.")
        // console.log('FAILED...', err);
      });
  }

  return (
    <div className="w-full flex flex-row mb-14 specific:mb-32 specific:mt-8 mt-4">
      <div className="font-mono hidden md:block font-normal text-accent text-6xl w-[2ch] -tracking-[.3rem] mr-2 md:text-[4.15rem] lg:text-[4.5rem] xl:text-[5.25rem]" />
      <div className="w-full flex flex-col specific:flex-row specific:justify-between justify-center specific:align-middle">
        <div className="m-auto w-fit specific:pb-8">
          <p className="w-[32ch] text-text font-sans font-light text-[1.1rem]">
            I'm open for new opportunities, as well as having a talk with you. So if you're intrested in cooperation, or have any other questions feel free to contact me by email.
          </p>
          <a href="mailto:mikolaj.marcin.mrozek@gmail.com" className="w-full mt-8 shadow-start hover:shadow-finish focus:shadow-finish flex justify-center border-accent focus:text-bg hover:text-bg transition-all ease-in-out duration-300 -tracking-[.075em] text-[.9rem] text-base xl:text-[1.05rem] border-solid border-2 font-mono text-accent rounded-[.3rem] px-4 py-2 sm:px-6 sm:py-2 xl:px-7 xl:py-[.6rem]">
            send an e-mail direclty
          </a>
        </div>
        <div className="flex flex-row w-3/4 justify-center specific:flex-col specific:w-fit specific:h-fit specific:my-auto specific:pb-8 align-middle mx-auto my-6">
          <div className="bg-disabled w-full h-[.01rem] my-auto max-w-[10rem] specific:w-[.01rem] specific:h-9 specific:mx-auto" />
          <p className="font-mono text-disabled text-2xl px-2 specific:pt-[.15rem] specific:pb-[.4rem]">or</p>
          <div className="bg-disabled w-full h-[.01rem] my-auto max-w-[10rem] specific:w-[.01rem] specific:h-9 specific:mx-auto" />
        </div>
        <div className="flex flex-col w-fit mx-auto justify-center ">
          <form onSubmit={_submit} className="relative">
            <div className={`bg-card mb-[.6rem] pt-[.35rem] pb-2 px-3 mx-auto w-[32ch] rounded-[.3rem] text-text font-sans font-light text-[1.1rem] focus-within:ring-1 transition-all duration-300 ease-in-out focus-within:ring-accent ${!send ? "opacity-1000" : "opacity-0"}`}>
              <input value={email} type="email" required placeholder="e-mail" onChange={(e) => setEmail(e.target.value)} className="w-full outline-none autofill:bg-bg bg-transparent  text-text font-sans font-light text-[1.1rem] " />
            </div>
            <div className={`bg-card mb-[.6rem] pt-[.35rem] pb-2 px-3 mx-auto w-[32ch] rounded-[.3rem] text-text font-sans font-light text-[1.1rem] focus-within:ring-1 transition-all duration-300 ease-in-out focus-within:ring-accent ${!send ? "opacity-1000" : "opacity-0"}`}>
              <input value={topic} type="title" required placeholder="title" onChange={(e) => setTopic(e.target.value)} className="w-full outline-none  autofill:bg-bg bg-transparent text-text font-sans font-light text-[1.1rem] " />
            </div>
            <div className={`bg-card mb-[.6rem] pt-[.35rem] pb-2 px-3 mx-auto w-[32ch] rounded-[.3rem] text-text font-sans font-light text-[1.1rem] focus-within:ring-1 transition-all duration-300 ease-in-out focus-within:ring-accent ${!send ? "opacity-1000" : "opacity-0"}`}>
              <textarea value={message} type="text" required placeholder="message" onChange={(e) => setMessage(e.target.value)} className="w-full autofill:bg-bg max-w-full h-32 min-h-[8rem] max-h-48 overflow-x-hidden overflow-y-auto outline-none bg-transparent text-text font-sans font-light text-[1.1rem] " />
            </div>
            <button className={`w-full mt-6 shadow-start hover:shadow-finish focus:shadow-finish flex justify-center border-accent hover:text-bg focus:text-bg transition-all ease-in-out duration-300 -tracking-[.075em] text-[.9rem] text-base xl:text-[1.05rem] border-solid border-2 font-mono text-accent rounded-[.3rem] px-4 py-2 sm:px-6 sm:py-2 xl:px-7 xl:py-[.6rem] ${!send ? "opacity-1000" : "opacity-0"}`}>
              send a message
            </button>
            <div className={`absolute flex flex-col justify-center align-middle inset-0 rounded-[.3rem] transition-all duration-300 ease-in-out bg-card ${send ? "scale-100 opacity-1000" : "scale-0 opacity-0"}`}>
              <p className="w-10/12 mx-auto outline-none text-center autofill:bg-bg bg-transparent  text-header font-sans font-normal text-[1.25rem]">{error}</p>
              <button className="w-10/12 mx-auto outline-none autofill:bg-bg bg-transparent  text-accent font-sans font-thin text-base" onClick={() => setSend(false)}>Send another message</button>
            </div>
          </form>
        </div>
      </div>
      <div className="font-mono hidden md:block font-normal text-accent text-6xl w-[2ch] -tracking-[.3rem] mr-2 md:text-[4.15rem] lg:text-[4.5rem] xl:text-[5.25rem]" />
    </div>
  );
}


export default Contact;