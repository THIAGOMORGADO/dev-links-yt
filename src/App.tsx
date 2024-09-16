import Moon from "./assets/moon.svg";
import Sun from "./assets/sun.svg";

import Perfil from "./assets/prefil.png";
import { useState } from "react";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

import hyuppImg from "./assets/hyupp.png";
import justaImg from "./assets/justa.png";
import speedImg from "./assets/speed.png";
import QtcImg from "./assets/qtc.png";

function App() {
  const [theme, setTheme] = useState(true);

  function ToggleTheme() {
    setTheme(!theme);
  }

  return (
    <div className="w-full h-screen bg-[#eee]">
      {/* Header */}
      <header className=" h-[62px] p-5 flex items-center justify-end">
        <button onClick={ToggleTheme}>
          {theme ? (
            <img width={35} height={35} src={Moon} />
          ) : (
            <img width={35} height={35} src={Sun} />
          )}
        </button>
      </header>
      {/* Sobre */}
      <div className="py-2 flex items-center justify-center flex-col gap-[10px]">
        <img
          height={100}
          width={100}
          src={Perfil}
          alt="sun"
          className="rounded-full"
        />
        <p className="font-bold text-[18px] text-[#212529]">Thiago Morgado</p>
        <p className="text-sm font-nome text-[14px] text-[#858585] ">
          Desemvolvedor Full Stack
        </p>

        <div className="flex items-center gap-[10px]">
          <button className="rounded-full bg-[#212529] flex items-center justify-center p-[10px] h-[35px] w-[35px] text-[#eeee] shadow-gray-600 shadow-md transition-all duration-500 hover:scale-x-110">
            <InstagramLogo size={15} />
          </button>
          <button className="rounded-full bg-[#212529] flex items-center justify-center p-[10px] h-[35px] w-[35px] text-[#eeee] shadow-gray-600 shadow-md transition-all duration-500 hover:scale-x-110">
            <LinkedinLogo size={15} />
          </button>
          <button className="rounded-full bg-[#212529] flex items-center justify-center p-[10px] h-[35px] w-[35px] text-[#eeee] shadow-gray-600 shadow-md transition-all duration-500 hover:scale-x-110">
            <GithubLogo size={15} />
          </button>
        </div>
      </div>
      {/* Techs */}
      <div className=""></div>
      {/* Botoes */}
      <div className="flex flex-col gap-4 px-5 py-[10px]">
        <button className="h-12 bg-[#212529] text-[#eee] font-bold rounded-md text-[14px] shadow-gray-600 shadow-md transition-all duration-500 hover:scale-x-105">
          Portfolio
        </button>
        <button className="h-12 bg-[#212529] text-[#eee] font-bold rounded-md text-[14px] shadow-gray-600 shadow-md transition-all duration-500 hover:scale-x-105">
          Orcamentos
        </button>
      </div>
      {/* Projetos */}
      <div className="w-full py-[10px] px-5 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h3 className="text-[#212529]">Projetos Principais...</h3>
          <button className="text-[#858585]">Ver Mais</button>
        </div>
        <div className="flex items-center justify-between">
          <button className="w-[70px] transition-all 500 hover:scale-105 items-center ">
            <img src={hyuppImg} />
            <p className="overflow-hidden py-1 text-[11px] whitespace-nowrap text-ellipsis">
              Hyupp
            </p>
          </button>
          <button className="w-[70px] transition-all 500 hover:scale-105  items-center ">
            <img src={justaImg} />
            <p className="overflow-hidden py-1 text-[11px] whitespace-nowrap text-ellipsis">
              Justa
            </p>
          </button>
          <button className="w-[70px] transition-all 500 hover:scale-105  items-center ">
            <img src={speedImg} />
            <p className="overflow-hidden py-1 text-[11px] whitespace-nowrap text-ellipsis">
              Speed
            </p>
          </button>
          <button className="w-[70px] transition-all 500 hover:scale-105  items-center ">
            <img src={QtcImg} />
            <p className="overflow-hidden py-1 text-[11px] whitespace-nowrap text-ellipsis">
              Quero to chat
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
