import Perfil from "../../assets/prefil.png";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Abouts() {
  return (
    <div className="py-2 flex items-center justify-center flex-col gap-[10px]">
      <img
        height={100}
        width={100}
        src={Perfil}
        alt="sun"
        className="rounded-full"
      />
      <p className="font-bold text-[18px] text-dark dark:text-white">
        Thiago Morgado
      </p>
      <p className="text-sm font-nome text-[14px] text-[#858585] ">
        Desemvolvedor Full Stack
      </p>

      <div className="flex items-center gap-[10px]">
        <button className="rounded-full bg-[#212529] dark:bg-slate-50 flex items-center justify-center p-[10px] h-[35px] w-[35px] text-[#eeee] shadow-gray-600 shadow-md transition-all duration-500 hover:scale-x-110">
          <InstagramLogo size={15} className="text-white dark:text-dark" />
        </button>
        <button className="rounded-full bg-[#212529] dark:bg-slate-50 flex items-center justify-center p-[10px] h-[35px] w-[35px] text-[#eeee] shadow-gray-600 shadow-md transition-all duration-500 hover:scale-x-110">
          <LinkedinLogo size={15} className="text-white dark:text-dark" />
        </button>
        <button className="rounded-full bg-[#212529] dark:bg-slate-50 flex items-center justify-center p-[10px] h-[35px] w-[35px] text-[#eeee] shadow-gray-600 shadow-md transition-all duration-500 hover:scale-x-110">
          <GithubLogo size={15} className="text-white dark:text-dark" />
        </button>
      </div>
    </div>
  );
}
