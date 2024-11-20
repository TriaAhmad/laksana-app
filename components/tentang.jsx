import React from "react";

const Tentang = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 space-y-8 bg-white">
      <h1 className="text-2xl  font-bold text-center my-4 py-2">
        Tentang Laksana
      </h1>

      <div className="p-6 border-2 border-cyan-400 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 text-center hover:scale-105 transition-transform duration-300 ease-in-out">
        <p className="text-base md:text-lg">
          Laksana adalah aplikasi yang dikembangkan oleh UPA TIK Politeknik
          Negeri Pontianak untuk memudahkan pelaporan kendala sarana prasarana
          dan penanganan aduan terkait internet serta PPKS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3 lg:w-3/4">
        <div className="p-6 border-2 border-cyan-400 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-lg md:2xl font-bold mb-2">Visi</h2>
          <p className="text-sm md:text-xl">
            Menjadi platform unggulan untuk penanganan aduan secara efisien dan
            responsif.
          </p>
        </div>

        <div className="p-6 border-2 border-cyan-400 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-lg md:2xl font-bold mb-2">Misi</h2>
          <ol className="text-sm md:text-xl text-left list-decimal list-inside">
            <li>
              Mempermudah akses pelaporan kendala sarana prasarana kampus.
            </li>
            <li>Meningkatkan respons cepat terhadap aduan yang dilaporkan.</li>
            <li>Menjamin keamanan dan kenyamanan civitas akademika.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
