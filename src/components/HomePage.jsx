import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-500 dark:text-white flex flex-col min-h-screen">
      {/* Conteúdo principal */}
      <main className="flex-grow">
        <div>
          <h2 className="text-2xl font-bold text-center mt-8">Oiii!</h2>
        </div>
      </main>

      {/* Footer sempre no final */}
      <Footer />
    </div>
  );
};

export default HomePage;
