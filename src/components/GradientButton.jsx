import React from "react";

function GradientButton() {

 
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `public/PRATHMESH CHOUGULE CV.pdf`; // path to your resume
    link.download = "PRATHMESH CHOUGULE CV.pdf"; // name of the downloaded file
    link.click();
  };

  return (
    <>
      <div class=" bg-[linear-gradient(90deg,#FF4D6D_0%,#BD3EB2_25%,#7B2FF7_50%,#2F86F7_75%,#2FF7ED_100%)] p-[2px]">
        <a
          onClick={handleDownload}
          href="#"
          class="block bg-black text-white uppercase font-heading text-center min-w-[205px] px-12 py-2 lg:py-3 
            hover:bg-[linear-gradient(90deg,#FF4D6D_0%,#BD3EB2_25%,#7B2FF7_50%,#2F86F7_75%,#2FF7ED_100%)]
            hover:text-white
            transition-all duration-300 ease-in-out"
        >
          Download CV
        </a>
      </div>
    </>
  );
}

export default GradientButton;
