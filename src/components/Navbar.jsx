import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Navbar() {

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
    <nav ref={navbarRef} className='fixed w-full bg-black mix-blend-difference  z-30'>
        <div className='main-container  py-6 flex justify-between  items-center '>
            <img src="src/assets/PC LOGO White.png" alt=""  className='h-12'/>
            <div className='flex flex-col gap-3 cursor-pointer '>
                 <span className='inline-block w-10 lg:w-12  h-0.5 bg-amber-50'></span>
                 <span className='inline-block w-10 lg:w-12  h-0.5 bg-amber-50'></span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
