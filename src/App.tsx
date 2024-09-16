import Header from "./components/Header";
import Abouts from "./components/About";
import Button from "./components/Button";

import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full h-screen   ">
      {/* Header */}
      <Header />
      {/* Sobre */}
      <Abouts />
      {/* Botoes */}
      <div className="flex flex-col gap-4 px-5 py-[10px]">
        <Button>Portfolio</Button>
        <Button>Orcamentos</Button>
      </div>
      {/* Projetos */}
      <Projects />
    </div>
  );
}

export default App;
