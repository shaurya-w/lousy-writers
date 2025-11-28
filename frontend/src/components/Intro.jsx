import React from 'react'
import pfp from '../assets/pfp.png';

const Intro = () => { 
  return (
    <div className="bg-ogyellow mt-3 sm:mt-[25vh] w-[80vw] h-auto rounded-2xl flex flex-col sm:flex-row justify-between items-center p-6 md:p-12 space-y-5 sm:space-y-0 sm:space-x-5 sm:min-h-[50vh] mb-[5vh]">
  
    {/*<div className="h-[30vh] w-[30vh] rounded-full overflow-hidden flex-shrink-0 border-[6px] border-yellow-300">
        <img src={pfp} alt="pfp-shaurya" className="object-cover w-full h-full" />
    </div>*/}

    <p className="text-justify font-mono tracking-normal whitespace-pre-line">
        Hello there! I'm Shaurya Wajge, a computer engineering student who loves trying out new things — whether it’s exploring tech, experimenting with ideas, or just following where curiosity takes me.
         It’s what drives me to keep exploring, building, and growing.

        I hope you have a good time reading about my experiences as much as I enjoy writing about them. It's nice to have you here!
    </p>
    </div>

  )
}

export default Intro