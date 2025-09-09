import { useState } from "react";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

function App() {
  const [openFolder, setOpenFolder] = useState(false);

  // Lista de meses e pastas
  const folders = [
    { name: "JUNHO", path: "jun" },
    { name: "JULHO", path: "jul" },
    { name: "AGOSTO", path: "ago" },
  ];

  const handleToggle = (folder) => {
    setOpenFolder(openFolder === folder ? null : folder);
  };

  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    document.querySelector("html").classList.toggle("dark");
  };

  return (
    <>
      <Header />

      <div className="bg-gray-200 dark:bg-gray-900 dark:text-white flex flex-row justify-between items-center p-4">
        {/* Botões dinâmicos */}
        <div className="flex gap-4">
          {folders.map(({ name, path }) => (
            <Button key={path} text={name} action={() => handleToggle(path)} />
          ))}
        </div>

        <button
          onClick={() => {
            toggleDarkMode();
            setDark(!dark);
          }}
          className="border border-black dark:border-white px-2 py-1 rounded-2xl cursor-pointer transition-colors"
        >
          {!dark ?  <Sun /> : <Moon />}
        </button>
      </div>
      {/* Galeria dinâmica */}
      <div>{openFolder ? <Gallery folder={openFolder} /> : <HomePage />} </div>
    </>
  );
}

export default App;
