import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ imagens }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {imagens.map((image, index) => (
        <div key={image.id || index}>
          <LazyLoadImage
            src={image.src}
            alt={`Imagem ${index + 1}`}
            effect="blur"
            loading="lazy"
            placeholderSrc={image.src} // Mostra uma versão borrada antes da imagem real
            className="w-full h-auto object-cover rounded-xl shadow-2xs"
            srcSet={`${image.src}?w=400 400w, ${image.src}?w=800 800w`}
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
