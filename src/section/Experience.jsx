import React from 'react'

function Experience() {
  return (
    <>
        <div className=' text-black bg-white'>
            <div className='main-container pb-8 lg:pb-10'>
               <h3>work experience</h3> 
            </div>
        </div>

        <div className='relative '>
            <div className='bg-black text-white py-12 lg:py-10'>
                <div className='main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center'>
                    {/* left side */}
                    <div className='flex gap-5 lg:gap-8'>
                        <span className='text-gray-700 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>01</span>
                        <h2 className='text-2xl md:text-5xl lg:text-6xl uppercase font-heading leading-[1]'>Software Developer </h2>
                    </div>
                    
                    {/* right side */}
                    <div className='items-center'>
                         <span className='text-gray-700 text-lg lg:text-2xl font-heading tracking-wide block text-start lg:text-right mb-3'>Aug 2024 – Jul 2025 </span>
                         <p className='text-lg lg:text-xl leading-relaxed'>Built a full-stack web application using Java, Spring Boot, and React.js with features like email automation, bulk uploads, and export functionality. Ensured reliability through JUnit testing and used Git/GitHub for version control and Postman for API testing.</p>
                    </div>                       
                </div>
            </div>

            <div className='bg-white text-black py-12 lg:py-10'>
                <div className='main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center'>
                    {/* left side */}
                    <div className='flex gap-5 lg:gap-8'>
                        <span className='text-gray-700 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>02</span>
                        <h2 className='text-2xl md:text-5xl lg:text-6xl uppercase font-heading leading-[1]'>java Developer </h2>
                    </div>
                    
                    {/* right side */}
                    <div className='items-center'>
                         <span className='text-gray-700 text-lg lg:text-2xl font-heading tracking-wide block text-start lg:text-right mb-3'>Apr 2024 –  Jul 2024</span>
                         <p className='text-lg lg:text-xl leading-relaxed'>Assisted in developing and maintaining Java applications using Spring Boot, REST APIs, and MySQL (CRUD & query optimization). Collaborated with the team in daily stand-ups, code reviews, and discussions.</p>
                    </div>                       
                </div>
            </div>
        </div>
    </>
  )
}

export default Experience
