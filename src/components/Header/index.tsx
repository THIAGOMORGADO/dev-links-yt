import React from "react";
import { useTheme } from "../../hooks/useTheme";

import Moon from "../../assets/moon.svg";
import Sun from "../../assets/sun.svg";

export default function Header() {
  const { theme, setTheme } = useTheme();

  function handleChangeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header className=" h-[62px] p-5 flex items-center justify-end">
      <button onClick={handleChangeTheme}>
        {theme !== "dark" ? (
          <img width={35} height={35} src={Moon} />
        ) : (
          <img width={35} height={35} src={Sun} />
        )}
      </button>
    </header>
  );
}
