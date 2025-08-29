import React from 'react'
import Intro from '../components/Intro'

const Home=()=>{
  return (
    <div className="min-h-screen inset-0 bg-bgd"> 
      <div className="flex flex-col items-center">
        <Intro />
      </div>
    </div>
  );
}

export default Home