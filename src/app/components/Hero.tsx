import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgPortrait from "../../assets/pic.png";
import svgPaths from "../../imports/Desktop1/svg-g8eqll0k0q";
import resume from "../../assets/resum.pdf";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 lg:px-24 pt-9 pb-16"
    >
      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full lg:w-1/2 mt-12 lg:mt-0">
        <div className="font-['Iceland',sans-serif] text-6xl md:text-[80px] lg:text-[110px] xl:text-[128px] text-white leading-[0.9] uppercase">
          <p>HERE</p>
          <p>TECHNOLOGY MEETS PASSION</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-8 md:mt-12">
          <a
            href="https://github.com/Abinjacob23"
            target="_blank"
            rel="noreferrer"
            className="w-[60px] h-[62px] bg-[#1e1e1e] rounded-[10px] flex items-center justify-center hover:bg-[#333] transition-colors"
          >
            <svg width="29" height="32" fill="none" viewBox="0 0 28.0978 31.7682">
              <path
                d={svgPaths.p20071ec0}
                stroke="#86981D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/abinjacob250"
            target="_blank"
            rel="noreferrer"
            className="w-[60px] h-[62px] bg-[#1e1e1e] rounded-[10px] flex items-center justify-center hover:bg-[#333] transition-colors"
          >
            <svg width="32" height="33" fill="none" viewBox="0 0 31.3171 32.4744">
              <path
                d={svgPaths.p22fd5b00}
                stroke="#86981D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={svgPaths.p3a611300}
                stroke="#86981D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={svgPaths.p15db1100}
                stroke="#86981D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abinjacob258@gmail.com"
            className="w-[60px] h-[62px] bg-[#1e1e1e] rounded-[10px] flex items-center justify-center hover:bg-[#333] transition-colors"
          >
            <svg width="32" height="33" fill="none" viewBox="0 0 31.3171 32.4744">
              <path
                d={svgPaths.pa259d80}
                stroke="#86981D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={svgPaths.p22d84200}
                stroke="#86981D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Resume Button */}
        <a
          href={resume}
          download
          className="mt-10 md:mt-12 bg-[#ff7801] text-black font-['Iceland',sans-serif] text-2xl md:text-[32px] px-8 py-3 rounded-full hover:scale-105 hover:bg-[#ff8a20] transition-all duration-300 uppercase"
        >
          DOWNLOAD RESUME
        </a>
      </div>


      {/* RIGHT SIDE */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">

        <div className="relative w-[300px] h-[300px] md:w-[436px] md:h-[426px]">

          {/* Portrait */}
          <div
            className="
              absolute
              left-1/2
              top-[-150px]
              -translate-x-1/2
              w-[1400px]
              h-[1400px]
              rounded-full
              overflow-hidden
              z-10
            "
          >
            <ImageWithFallback
              src={imgPortrait}
              alt="Abin Jacob"
              className="
                absolute
                left-1/2
                -translate-x-1/2
                top-[-0px]
                w-[350px]
                h-[600px]
                scale-x-125
              "
            />
          </div>

        </div>

      </div>
    </section>
  );
}