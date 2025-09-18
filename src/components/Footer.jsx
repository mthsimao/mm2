const Footer = () => {
  return (
    <>
      <footer className="dark:bg-gray-900 dark:text-white bg-gray-200 flex flex-row justify-between items-center p-4">
        <h2 className="italic">
          Created by:{" "}
          <a
            href="https://www.instagram.com/mthsimao/"
            target="_blank"
            className="cursor-pointer font-bold hover:underline"
          >
            Matheus Simão
          </a>
        </h2>

        <p>04/09/2025</p>
      </footer>
    </>
  );
};

export default Footer;
