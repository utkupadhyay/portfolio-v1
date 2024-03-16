import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';;
import Navigation from './components/navigation/Navigation';
import herosection from './assets/hero-section.jpeg'
const AppBackup = () => {
  // const elemRef = useRef<HTMLDivElement>(null);
  // const scaleValues = [1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3];
  // const currentScaleIndex = useRef(0);
  // const [scale, setScale] = useState(1);
  // // const preScroll = useRef<number>(0);
  // // const [scale, setScale] = useState(1.1);
  // // useLayoutEffect(() => {
  // //   const botPos = (element: HTMLDivElement) => element.getBoundingClientRect().bottom;
  // //   console.log(elemRef.current)
  // //   const onScroll = () => {
  // //     if (!elemRef.current) {
  // //       return;
  // //     }
  // //     const divBotPos = botPos(elemRef.current);
  // //     const scrollPos = preScroll.current > window.scrollY;
  // //     console.log({ divBotPos, scrollPos })
  // //     preScroll.current = window.scrollY;
  // //     if (scrollPos && divBotPos > window.innerHeight) {
  // //       setScale(1);
  // //       return;
  // //     }
  // //     if (divBotPos < window.innerHeight) {
  // //       setScale(1.3);
  // //     }
  // //   };

  // //   window.addEventListener("scroll", onScroll);
  // //   return () => window.removeEventListener("scroll", onScroll);
  // // }, []);
  // useEffect(() => {
  //   const onScroll = () => {
  //     if (elemRef.current && currentScaleIndex.current < scaleValues.length - 1) {
  //       const divBotPos = elemRef.current.getBoundingClientRect().bottom;
  //       if (divBotPos < window.innerHeight) {
  //         currentScaleIndex.current++;
  //         setScale(scaleValues[currentScaleIndex.current]);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <>
      <Navigation />
      <div className='flex flex-col items-center justify-between px-5 sm:px-10 lg:px-20 pb-xs max-w-content mx-auto'>
        <div className='flex flex-col w-full'>
          <h1 className="mb-xs max-w-[370px] sm:max-w-[650px] ml-0 md:ml-1/12 transition-all duration-300">
            <span className='block'>Hey</span>
            <span className='block'>I'm Utkarsh</span>
          </h1>
          <h2 className="sm:max-w-[780px] ml-1/6 md:ml-4/12 md:mr-1/12 transition-all duration-300">- a part-time designer and a full-time frontend developer</h2>
        </div>
        <div
          // ref={elemRef}
          className="relative w-full h-auto aspect-video rounded-sm md:rounded overflow-hidden mt-md mb-gr lg:mt-lg 2xl:mt-xl lg:mb-xxl mx-auto bg-cover bg-center"
          style={{
            backgroundImage: `url(${herosection})`,
            opacity: 1,
            width: '90%',
            // transform: `scale(${scale})`
            // transform: `translateY(0px) scale(1) translateZ(0px)`
          }}

        />
        <div className='mb-gr lg:mb-lg sm:max-w-[780px] ml-1/6 md:ml-4/12 md:mr-1/12 transition-all duration-300'>
          <div>I love building products that solve user problems. I am currently
            building enterprise level products for Honeywell Technology Solutions, India.   I am deeply invested in keeping up with the most recent trends and technologies in frontend development, thereby ensuring that I consistently deliver state-of-the-art solutions.</div>
          <h2></h2>
        </div>
        <div>
          <h1>
            Here’s what you can expect from me...
          </h1>
          <div className='flex flex-wrap flex-col md:flex-row gap-5 mt-gr lg:mt-lg mb-md lg:mb-xl'>
            <h2 style={{ backgroundColor: 'rgb(138, 216, 192)', opacity: 1, transform: 'none' }} className="min-h-[350px] lg:min-h-[500px] rounded-sm md:rounded p-[30px] lg:p-[50px] w-full md:w-[calc(33.33%-10px)]">
              I’ll bring years of experience, big energy and fresh thinking.
            </h2>
            <h2 style={{ backgroundColor: 'rgb(198, 244, 89)', opacity: 1, transform: 'none' }} className="min-h-[350px] lg:min-h-[500px] rounded-sm md:rounded p-[30px] lg:p-[50px] w-full md:w-[calc(66.66%-10px)]">
              Listen, challenge and reconnect the dots — joining your team with conviction and openness.
            </h2>
            <h2 style={{ backgroundColor: 'rgb(178, 149, 206)', opacity: 1, transform: 'none' }} className="min-h-[350px] lg:min-h-[500px] rounded-sm md:rounded p-[30px] lg:p-[50px] w-full md:w-[calc(41.667%-10px)]">
              Collaborate with UX and work as a team to create the best product.
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-xs mb-lg lg:mb-xl sm:max-w-[780px] ml-1/6 md:ml-4/12 md:mr-1/12 transition-all duration-300">
          <div>I’ve lived and worked in Hyderabad, Noida, Lucknow. Also, remote.</div>
          <div>Connect with me - <div className='reverse'>hello@utkupadhyay.com</div></div>
        </div>
        <footer className='w-full flex justify-between items-center'>
          <div className='relative text-14 md:text-18' style={{ margin: '0 auto' }}>Utkarsh Upadhyay - Jai Shree Ram</div>
        </footer>
        {/* <section className="intro-section-container">
          <p>
            I love building products that solve user problems. I am currently
            building enterprise level products for Honeywell Technology Solutions, India.
          </p>
          <p>
            I possess a solid foundation in HTML, CSS, JavaScript, and React, and I have successfully delivered multiple projects that highlight my proficiency in creating adaptable and user-friendly interfaces. I am deeply invested in keeping up with the most recent trends and technologies in frontend development, thereby ensuring that I consistently deliver state-of-the-art solutions.
          </p>
        </section> */}

      </div>
    </>
  );
};
export default AppBackup;
