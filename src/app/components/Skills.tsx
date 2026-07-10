import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgJS from "figma:asset/d8f49d7d4da0f0356d9e2ecf89ffc51e51f9733b.png";
import imgTS from "figma:asset/a9b533bd795d4292679f5eccc919d387218287d6.png";
import imgPython from "figma:asset/bb8afea5bfcfd9c02e54b21a9136b1337f35f032.png";
import imgPHP from "figma:asset/21a89cd3fa60527756574000c3b04bbea6d6132e.png";
import imgNextJS from "figma:asset/dcccb9983dc8555e295aeb7af085ee0f47fa3a19.png";
import imgReact from "figma:asset/9c281c2bc47d5f2ef76ab2ab68e323c287fb7647.png";
import imgTailwind from "figma:asset/3ff34f6796918d13a277525c2c75330e79bb7f52.png";
import imgFigma from "figma:asset/a5cdccc87643af5e19253ec6003f2d14aa3fe386.png";
import imgReactNative from "figma:asset/9c281c2bc47d5f2ef76ab2ab68e323c287fb7647.png"; // Uses same logo as React

const skills = [
  { name: "Javascript", icon: imgJS },
  { name: "Typescript", icon: imgTS },
  { name: "Python", icon: imgPython },
  { name: "PHP", icon: imgPHP },
  { name: "Next Js", icon: imgNextJS },
  { name: "React", icon: imgReact },
  { name: "React Native", icon: imgReactNative },
  { name: "Tailwind CSS", icon: imgTailwind },
  { name: "Figma", icon: imgFigma },
];

export function Skills() {
  return (
    <section id="skills" className="w-full px-6 md:px-12 lg:px-24 py-20 pb-40 relative z-10">
      <div className="flex flex-col items-start md:items-center mb-16 w-full text-center">
        <h2 className="font-['Boldonse',sans-serif] text-5xl md:text-[64px] tracking-[1.92px] uppercase">
          <span className="text-white drop-shadow-lg">PROFESSIONAL </span>
          <br className="md:hidden" />
          <span className="text-[#d5ff01] drop-shadow-lg">SKILLS</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 justify-items-center max-w-6xl mx-auto mt-50">
        {skills.map((skill, i) => (
          <div key={i} className="bg-white w-full max-w-[189px] aspect-square rounded-[40px] flex flex-col items-center justify-center p-6 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="h-[70px] flex items-center justify-center mb-4 w-full">
              <ImageWithFallback 
                src={skill.icon} 
                alt={`${skill.name} icon`} 
                className="max-h-full max-w-[80%] object-contain"
              />
            </div>
            <p className="font-['Inter',sans-serif] font-bold text-[#1e1e1e] text-lg md:text-xl text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
