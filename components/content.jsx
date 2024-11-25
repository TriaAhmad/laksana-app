"use client";

import React from "react";
import Image from "next/image";
import Internet from "@/images/Internet.jpg";
import Ppks from "@/images/PPKS.jpg";

const Content = () => {
  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-16">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        PILIH LAPORAN ANDA
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Internet */}
        <a
          href="/input" 
          className="flex flex-col items-center justify-center w-full max-w-sm bg-white border-2 border-cyan-300 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 focus:ring-2 focus:ring-cyan-400"
        >
          <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-cyan-300">
            <Image
              src={Internet.src}
              alt="Internet Icon"
              width={100}
              height={100}              
            />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
            Internet
          </h2>
          <p className="text-center text-gray-600 text-sm">
            Kendala yang berhubungan dengan internet
          </p>
        </a>

        {/* Card 2: PPKS */}
        <a
          href="/input" 
          className="flex flex-col items-center justify-center w-full max-w-sm bg-white border-2 border-cyan-300 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 focus:ring-2 focus:ring-cyan-400"
        >
          <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-cyan-300">
            <Image
              src={Ppks.src}
              alt="PPKS Icon"
              width={100}
              height={100} 
            />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
            PPKS
          </h2>
          <p className="text-center text-gray-600 text-sm">
            Aduan terkait Pencegahan dan Penanganan Kekerasan Seksual
          </p>
        </a>
      </div>
    </div>
  );
};

export default Content;
