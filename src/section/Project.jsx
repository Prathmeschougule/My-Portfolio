import React from "react";
import GradientButton2 from "../components/GradientButton2";
import projects from "../components/projectData";

function Project() {
  return (
    <>
      <div className="h-screen bg-white text-black py-24 lg:py-40 ">
         <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
            <div className="max-w-xl">
                <h3>Project</h3>
                <p className="text-lg lg:text-xl">Showcasing my full-stack projects built with Java, Spring Boot, React.js, and modern web tools.</p>
            </div>
            <div >
                <GradientButton2 />
            </div>  
        </div> 
        
            <div className="flex gap-4  lg:gap-8 ms:4 lg:ms-[30%] mt-6  overflow-hidden">
                {projects.map(({id,name,link,image})=>(
                     <a key={id} href={link} className="relative rounded-2xl w-full min-w-[250px] lg:min-w-[450px]   h-40 lg:h-80 block overflow-hidden group">
                        <img src={image} alt=""className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        <span className="absolute top-4 right-4 bg-black text-white uppercase leading-[1.4] font-heading px-5 py-1 rounded-full text-sm lg-text-lg">{name}</span>
                    </a>
                 ))}         
            </div>
      </div>
    </>
  );
}

export default Project;
