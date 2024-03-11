import React, { useState } from 'react';;
import Navigation from './components/navigation/Navigation';

const App = () => {

  return (
    <>
      <Navigation />
      <main className='flex flex-col items-center justify-between px-5 sm:px-10 lg:px-20 pb-xs max-w-content mx-auto'>
        <div className='flex flex-col w-full'>
          <h1 className="wave mb-xs max-w-[290px] sm:max-w-[520px] ml-0 md:ml-1/12 transition-all duration-300">
            <span className='block'>Hey</span>
            <span className='block'>I'm Utkarsh</span>
          </h1>
          <section className="sm:max-w-[780px] ml-1/6 md:ml-4/12 md:mr-1/12 transition-all duration-300">- a part-time designer and a full-time frontend developer</section>
        </div>

        <section className="intro-section-container">
          <p>
            I love building products that solve user problems. I am currently
            building enterprise level products for Honeywell Technology Solutions, India
          </p>
          <p>
            I possess a solid foundation in HTML, CSS, JavaScript, and React, and I have successfully delivered multiple projects that highlight my proficiency in creating adaptable and user-friendly interfaces. I am deeply invested in keeping up with the most recent trends and technologies in frontend development, thereby ensuring that I consistently deliver state-of-the-art solutions.
          </p>
        </section>
      </main>
    </>
  );
};
export default App;
