import React from "react";

function GradientButton() {
  const handleDownload = () => {
    const fileUrl = "/Prathmesh.pdf"; // file inside public/
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Prathmesh.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[linear-gradient(90deg,#FF4D6D_0%,#BD3EB2_25%,#7B2FF7_50%,#2F86F7_75%,#2FF7ED_100%)] p-[2px]">
      <button
        onClick={handleDownload}
        className="block bg-black text-white uppercase font-heading text-center min-w-[205px] px-12 py-2 lg:py-3 
          hover:bg-[linear-gradient(90deg,#FF4D6D_0%,#BD3EB2_25%,#7B2FF7_50%,#2F86F7_75%,#2FF7ED_100%)]
          hover:text-white
          transition-all duration-300 ease-in-out"
      >
        Download CV
      </button>
    </div>
  );
}

export default GradientButton;
