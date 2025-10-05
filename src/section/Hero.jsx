import React, { useRef } from "react";
import GradientButton from "../components/GradientButton";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);
function Hero() {

  const heroRef = useRef(null);
  //pin hero section 
  useGSAP(()=>{
    ScrollTrigger.create({
      trigger:heroRef.current,
      start:"top top ",
      end:"bottom top",
      pin: true,
      pinSpacing:false,
      scrub:1
    })

    const split = new SplitText(heroRef.current.querySelector("h1 .word-text"), {
      type: "lines,words",
      mask:"lines"
    });

    gsap.from(split.words, {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.4,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%", // animate when 80% in viewport
      }
    });

    SplitText.create("h2", {
      type: "lines, words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        gsap.from(self.words, {
          y: 100,
          opacity: 0,
          stagger: 0.15,
          delay: 0.2,
        });
      }
    });

      gsap.from(".gradient-btn", {
      opacity: 0,
      y: 40,
      duration: 0.5,
      ease: "power2.out",
      delay: 1.4, // starts after text animations
      scrollTrigger: {
        trigger: ".gradient-btn",
        start: "top 90%", // play when visible
      },
    });

    gsap.from(".star svg", {
      scale: 0,
      rotate: 180,
      opacity: 0,
      transformOrigin: "center center",
      duration: 1.3,
      ease: "back.out(1.7)",
      onComplete: () => {
        // Start continuous rotation after the initial animation
        gsap.to(".star svg", {
          rotate: "+=360", // rotate infinitely
          transformOrigin: "center",
          duration: 20,    // adjust speed
          ease: "linear",
          repeat: -1,
        });
      },
    });
  }
  ), { scope: heroRef }; 

  return (
    <div ref={heroRef} className="relative overflow-hidden">
      <div className="main-container h-screen flex flex-col lg:justify-center items-start lg:py-12 max-lg:pt-40">
        <h1 className="relative text-2xl lg:text-[3.5vw] uppercase font-heading">
        <span className="word-text">Prathmesh Chougule</span>
        <span className="bottom-0 absolute w-full h-[0.6vh] bg-[linear-gradient(90deg,#FF4D6D_0%,#BD3EB2_25%,#7B2FF7_50%,#2F86F7_75%,#2FF7ED_100%)] left-0 z-[1]"></span>
      </h1>
        <h2 className="name-heading text-4xl lg:text-[4vw] uppercase font-extrabold font-heading leading-[1] tracking-tight mt-3 mb-6">
          java full stack developer <br />
          <span className="text-stroke"> & Designer </span>
        </h2>
        <div  className="gradient-btn lg:flex justify-start items-center gap-4">
          <GradientButton className="" />
          <div className="flex gap-4 mt-5 lg:mt-0">
              <a href="https://www.linkedin.com/in/prathmesh-chougule-693710263/"><img src="/projectImage/LinkedIn_logo_initials.png" alt="CV"  className=" h-15 lg:h-[50px] cursor-pointer"/></a>
             <a href="https://github.com/Prathmeschougule"> <img src="/projectImage/github.png" alt=""  className="h-15 lg:h-[50px] cursor-pointer"/></a>  
          </div>            
        </div>
      </div>
      {/* image */}
      <div className="star absolute -z-10 top-90 lg:top-32 right-[-40%] lg:right-[-15%] opacity-40">
        <svg className=" h-[48vh] lg:h-[80vh]"
          viewBox="0 0 1397 1397"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M282.6 139.58L197.396 213.737L595.931 642.196L51.7248 414.234L18.7426 526.842L595.931 708.113L5 828.96L51.7248 949.808L612.422 768.537L167.162 1150.3L238.624 1213.48L670.141 790.509L543.709 1370.03L639.907 1392L725.111 790.509L969.729 1326.08L1068.68 1276.65L769.087 768.537L1266.57 1054.18L1329.78 949.808L785.578 708.113L1393 655.929L1371.01 493.883L785.578 655.929L1266.57 290.64L1189.61 197.257L749.848 611.984L994.465 68.1703L879.028 24.2257L694.877 592.758L639.907 5L518.972 24.2257L639.907 611.984L282.6 139.58Z"
            stroke="url(#paint0_linear_1_7)"
            stroke-width="7"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_7"
              x1="699"
              y1="5"
              x2="699"
              y2="1392"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF4D6D" />
              <stop offset="0.125" stop-color="#DE4690" />
              <stop offset="0.25" stop-color="#BD3EB2" />
              <stop offset="0.5" stop-color="#7662D5" />
              <stop offset="0.75" stop-color="#2F86F7" />
              <stop offset="1" stop-color="#2FF7ED" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
