import React from 'react'

function Navbar() {
  return (
    <nav className='fixed w-full'>
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
