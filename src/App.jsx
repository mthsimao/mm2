import { useState } from "react";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const [openFolder, setOpenFolder] = useState(null);

  // Lista de meses e pastas
  const folders = [
    { name: "JUNHO", path: "jun" },
    { name: "JULHO", path: "jul" },
    { name: "AGOSTO", path: "ago" },
    // Adicione novos meses aqui
  ];

  const handleToggle = (folder) => {
    setOpenFolder(openFolder === folder ? null : folder);
  };

  return (
    <div>
      <div className="p-4">
        {/* Botões dinâmicos */}
        <div className="flex gap-4 mb-6">
          {folders.map(({ name, path }) => (
            <Button
              key={path}
              text={name}
              action={() => handleToggle(path)}
            />
          ))}
        </div>
        {/* Galeria dinâmica */}
        <div>
          {openFolder && <Gallery folder={openFolder} />}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
