import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);



function About() {

  const aboutRef = useRef(null);

   useGSAP(() => {
    // Text fade effect
    SplitText.create(".about-text", {
      type: "lines, chars",
      onSplit(self) {
        gsap.set(self.chars, { opacity: 0.25 }); // set initial opacity

        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1
          },
        });
      },
    });
  }, { scope: aboutRef });

  return (
    <div ref={aboutRef} className=" relative z-10 h-screen bg-white rounded-tl-[60px] rounded-tr-[60px] ">
      <h1 className="about-text main-container text-gray-800 py-8  lg:py-12
       flex justify-center items-center font-heading h-full md:text-3xl lg:text-4xl leading-[1.25]">
        Skilled Java Full Stack Developer with hands-on experience in designing,
        developing, and maintaining robust web applications using Java, Spring
        Boot, Spring Framework, and React.js. Proficient in solving complex
        problems, writing clean and maintainable code, and effectively handling
        application-level issues. Currently working as a Software Developer at
        Survey Infotech, contributing to the development of scalable and
        high-performing solutions. Passionate about delivering innovative,
        user-focused applications while continuously improving through modern
        development practices and tools. Actively seeking new challenges in
        collaborative environments where I can contribute to impactful projects
        and further enhance my expertise as a full-stack professional.
      </h1>
    </div>
  );
}

export default About;
