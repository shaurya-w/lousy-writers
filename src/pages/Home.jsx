import React from 'react'
import Intro from '../components/Intro'

const Home = () => {
  return (
    <div className='h-screen bg-bgd'> 
      <div className="flex flex-row justify-center items-center">
        <Intro />
      </div>
    </div>
  )
}

export default Home