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
        
            <div className="flex gap-4">
                {projects.map(({id,name,link,image})=>(
                     <a key={id} href={link}>
                        <img src={image} alt="" />
                        <span>{name}</span>
                    </a>
                 ))}         
            </div>
      </div>
    </>
  );
}

export default Project;
