import Card from "./Card";

const Gallery = ({ folder }) => {
  // Importa todas as imagens de todas as pastas dentro de assets
  const allImages = import.meta.glob("../assets/**/*.{png,jpg,jpeg,svg,webp}", {
    eager: true,
  });

  // Filtra apenas as imagens da pasta recebida por props
  const images = Object.entries(allImages)
    .filter(([path]) => path.includes(`/assets/${folder}/`))
    .map(([, img], index) => ({
      src: img.default,
      id: index,
    }));

  return <Card imagens={images} />;
};

export default Gallery;
