import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleDark = ()=>{
    document.documentElement.classList.toggle("dark")
  }

  return (
    <>
      <nav>
        {/* Top Navbar */}
        <div className="flex justify-between items-center fixed top-0 w-full h-[12vh] bg-nav text-fgd z-5 px-4 drop-shadow-xs drop-shadow-black dark:drop-shadow-gray">
          <p className="font-semibold font-saira -rotate-[5deg] text-[4.5vh] text-shadow-[#00d577] text-shadow-md tracking-tighter whitespace-nowrap max-w-[55vw] relative bottom-0.5">LOUSY WRITERS</p>

          {/* Right side: Desktop Menu + Icons */}
          <div className="flex items-center space-x-4">
            {/* Desktop Menu */}
            <ul className="hidden lg:flex justify-between items-center w-[30vw] text-[2.5vh] font-semibold tracking-normal">
              <li><Link className="relative after:-translate-x-1/2 after:absolute after:left-1/2 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-fgd after:transition-all after:duration-400 hover:after:w-full" to="/academics">academics</Link></li>
              <li><Link className="relative after:-translate-x-1/2 after:absolute after:left-1/2 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-fgd after:transition-all after:duration-400 hover:after:w-full" to="/academics" to="/tech">tech</Link></li>
              <li><Link className="relative after:-translate-x-1/2 after:absolute after:left-1/2 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-fgd after:transition-all after:duration-400 hover:after:w-full" to="/academics" to="/sidequests">side quests</Link></li>
            </ul>

            {/* Moon Icon */}
            <svg
              className="fill-fgd h-[3vh] lg:h-[3vh] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              onClick={toggleDark}
            >
              <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
            </svg>

            {/* Hamburger Icon (mobile only) */}
            <svg
              onClick={() => setMenuOpen(true)}
              className="fill-fgd h-[3vh] lg:h-[4.5vh] lg:hidden cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        
    {menuOpen && (
        <div
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-400"
        />
    )}

    {/* Sliding sidebar menu */}
    <div
        className={`fixed top-0 right-0 h-screen w-[70vw] bg-ogyellow p-5 drop-shadow-2xl z-40 transform transition-transform duration-400 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="relative mb-6">
        <h2 className="font-semibold">MENU</h2>
        <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-0 top-0">
            <svg
            className="fill-gray-900 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 
            0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 
            0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 
            0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 
            393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 
            12.5 45.3 0l160-160z" />
            </svg>
        </button>
        </div>

        <hr className="py-1.5" />

        <ul className="space-y-4 font-light text-gray-900">
        <li className="cursor-pointer"><Link to="/academics" className="relative no-underline after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full">ACADEMICS</Link></li>
        <hr />
        <li className="cursor-pointer"><Link to="/tech" className="relative no-underline after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full">TECH</Link></li>
        <hr />
        <li className="cursor-pointer"><Link to="/sidequests" className="relative no-underline after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full">SIDE QUESTS</Link></li>
        <hr />
        </ul>
    </div>
    </nav>
    </>
  );
}

export default Navbar;