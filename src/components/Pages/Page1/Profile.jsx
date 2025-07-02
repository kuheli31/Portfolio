import React from "react";
import Typewriter from "./TypingEffect";

export default function Profile() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col md:flex-row items-center md:items-start justify-center px-4 md:px-16 py-8 gap-10">
      
       {/* Profile Image with Gradient Border (Column 1)*/}
      <div className="bg-transparent pt-8 flex justify-center md:justify-start">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[4px] rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/133209155?v=4"
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg aspect-square"
          />
        </div>
      </div>

      {/* Right Content (Column 2) */}
      <div className="flex flex-col bg-transparent  items-center md:items-start justify-start gap-3 w-full">

        {/* Typewriter Centered */}
        <div className="bg-transparent w-full text-center md:text-left text-base sm:text-lg md:text-lg font-extrabold min-h-[2.5rem] sm:min-h-[3rem]">
  <Typewriter />
</div>


        {/* Developer Description Box */}
        <div className="bg-transparent w-full px-4">
  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[4px] sm:p-[3px] md:p-[4px] rounded-xl w-full">
    <div className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold text-center sm:text-left leading-relaxed">
      I’m exploring the world of AI/ML, built projects that learn and adapt, and paired them with clean, responsive frontend interfaces and solid backend systems. From model training to full-stack deployment, I love turning ideas into working products that feel smooth and smart.
    </div>
  </div>
</div>



      </div>
    </div>
  );
}
