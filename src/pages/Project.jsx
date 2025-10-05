import React from 'react'
import Projects from '../section/Projects'
import projects from '../components/projectData'

function Project() {
  return (
    <>
        <div className='text-black bg-white'>
            <div className='main-container pt-20 lg:py-28'>
                <h2 className='text-6xl lg:text-[8vw] font-heading text-center font-bold tracking-tight leading-[1]'>Projects</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-12  lg:mt-16'>
                    {projects.map(({id,name,image,link,description})=>(
                      <a key={id} href={link} className= ' overflow-hidden flex flex-col'>
                          <div className='group overflow-hidden h-[300px] rounded-2xl'>
                            <img src={image} alt=""  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                          </div>
                          <span className="uppercase leading-[1.4] lg:text-2xl font-heading mt-4" >{name}</span>
                           <p className='leading-[1] text-[12px] lg:text-[1vw] text-gray-500'>{description}</p>
                      </a>                   
                    ) )}
                </div>  
            </div>
           
        </div>
    </>
    
  )
}

export default Project
