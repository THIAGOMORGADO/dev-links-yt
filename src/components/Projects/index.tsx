import React from "react";

import hyuppImg from "../../assets/hyupp.png";
import justaImg from "../../assets/justa.png";
import speedImg from "../../assets/speed.png";
import QtcImg from "../../assets/qtc.png";

import { Project } from "../Project";

export default function Projects() {
  return (
    <div className="w-full py-[10px] px-5 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[#212529] dark:text-light">
          Projetos Principais...
        </h3>
        <button className="text-[#858585]">Ver Mais</button>
      </div>
      <div className="flex items-center justify-between">
        <Project image={hyuppImg} name="hyuupp" />
        <Project image={justaImg} name="Justa" />
        <Project image={QtcImg} name="Quero te Conhecer" />
        <Project image={speedImg} name="Speed" />
      </div>
    </div>
  );
}
