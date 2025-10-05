import React, { useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';

gsap.registerPlugin(useGSAP);

function Navbar() {

  const [menuOpen , setMenuOpen] = useState(false);

  const navbarRef = useRef(null)
  useGSAP(()=>{
    gsap.from(navbarRef.current,{
      opacity:0,
      y:-100,
      duration:0.6
    })
  }

  );

  return (

    <>
      <nav ref={navbarRef} className='fixed w-full bg-black mix-blend-difference  z-30'>
        <div className='main-container  py-6 flex justify-between  items-center '>
            <img src="/projectImage/PC LOGO White.png" alt=""  className='h-12'/>
            <div onClick={()=> setMenuOpen(!menuOpen)} className='flex flex-col gap-1 cursor-pointer '>

                 <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${
                 menuOpen ? "rotate-45 translate-y-[4px]" : ' '} `}></span>

                 <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${
                 menuOpen ? "-rotate-45 translate-y-[4px]" : ' '} `}></span>
            </div>
        </div>
    </nav>

     <div className={` h-screen w-screen fixed z-20  bg-black text-white flex items-center py-50 text-xl gap-2   lg:flex flex-col lg:items-center lg:justify-center lg:text-3xl lg:gap-4 transition-transform duration-500
     ${menuOpen? "  translate-y-0 " : "-translate-y-full"}
     `}
     onClick={()=> setMenuOpen(false)}
     >
        <Link to="/" className='menu-link' >home</Link>     
        <Link to="/projects" className='menu-link'>Project </Link>
        <Link to="/contact"className='menu-link'>Contact</Link>
      </div>
    </>
    

    
  )
}

export default Navbar
