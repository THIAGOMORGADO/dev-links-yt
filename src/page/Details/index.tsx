import { useTheme } from "../../hooks/useTheme";
import { ArrowLeft, LinkSimpleHorizontal } from "@phosphor-icons/react";

import Moon from "../../assets/moon.svg";
import Sun from "../../assets/sun.svg";

import justaImg from "../../assets/justa.png";

export default function Details() {
  const { theme, setTheme } = useTheme();

  function handleChangeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div className="">
      <header className=" h-[62px] p-5   flex items-center justify-between">
        <button className="transition-all 500 hover:scale-110">
          <ArrowLeft
            weight="bold"
            size={22}
            className="text-dark dark:text-white"
          />
        </button>
        <h2 className="font-bold text-lg text-dark dark:text-white ">
          Detalhes do projeto
        </h2>

        <button onClick={handleChangeTheme}>
          {theme !== "dark" ? (
            <img width={22} height={22} src={Moon} />
          ) : (
            <img width={22} height={22} src={Sun} />
          )}
        </button>
      </header>
      <main className="p-5 flex flex-col gap-3">
        <div className="flex flex-col items-center gap-5">
          <img src={justaImg} />
        </div>
        <div className="flex justify-center items-center gap-3">
          <h3 className="text-dark  dark:text-white font-bold text-lg">
            Justa Troca
          </h3>
          <a href="#" target="_blank" rel="noopener noreferrer" className="">
            <LinkSimpleHorizontal size={22} weight="bold" />
          </a>
        </div>
        <div className="text-[#858585] dark:text-[#eee]">
          O aplicatiovo justa trpca tem como objetivo facilitar a troca de nems
          matteriais ou serviços
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-lg">Habilidades</h1>
          <div className="flex flex-wrap gap-6">
            <span className=""></span>
          </div>
        </div>
      </main>
    </div>
  );
}
