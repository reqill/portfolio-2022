import React, { useState, useEffect } from 'react';

const App = () => {
  return (
    <div className="w-full flex">

      <main className="w-11/12 mx-auto">
        <div>
          <h6 className="text-accent font-mono -tracking-[.075em] text-[.9rem] -mb-[.1rem]">
            Hi, my name is
          </h6>
          <h1 className="text-header font-sans text-[2.1rem] font-bold tracking-wide leading-10">
            Mikołaj Mrózek.
          </h1>
          <h1 className="text-text font-sans text-[2.1rem] font-bold tracking-wide leading-10">
            I build things for web.
          </h1>
          <h4 className="text-text font-sans font-normal mt-3 leading-5">
            I'm a self-taught front-end developer specializing in building and designing exeptional digital products.
          </h4>
        </div>
      </main>
    </div>


  );
}

export default App;
