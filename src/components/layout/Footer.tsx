import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="shadow-sm bg-gray-800">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TirarVisto</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Início</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Serviços</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Destino</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Pacotes</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contato</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a href="https://eduardoreche.vercel.app/" className="hover:underline">Eduardo Reche</a> | Todos os direitos reservados.</span>
        </div>
    </footer>
  );
};

export default Footer;