"use client";

import React from "react";
import Image from "next/image";
import Peta from "@/images/peta.png";

const Hubungi = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 space-y-8 bg-white">
      <h1 className="text-2xl font-bold text-cyan-300 mb-10 text-center">Hubungi Kami</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3 lg:w-3/4">

        <div>
          <h2 className="text-lg font-semibold text-cyan-300 mb-2">Alamat</h2>
          <p className="text-sm">
            Jl. Jenderal Ahmad Yani, Bansir Laut, Kec. Pontianak Tenggara, Kota Pontianak,
            Kalimantan Barat 78124
          </p>
        </div>


        <div>
          <h2 className="text-lg font-semibold text-cyan-300 mb-2">Kontak</h2>
          <p className="text-sm">
            Email: upatik@polnep.ac.id <br />
            Telepon: 0561 736180
          </p>
        </div>
      </div>


      <div className="w-full md:w-2/3 lg:w-3/4">
        <h2 className="text-lg font-semibold text-cyan-300 mb-2">Jam Operasional</h2>
        <table className="w-full text-sm">
          <tbody>
            <tr>
              <td className="pr-4">Senin-Sabtu</td>
              <td>06.00-22.00</td>
            </tr>
            <tr>
              <td className="pr-4">Minggu</td>
              <td>Tutup</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full pt-10 md:w-2/3 lg:w-1/2">
        <a
          href="https://maps.app.goo.gl/J5iiHreZBFfT88Ko6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={Peta.src}
            alt="Lokasi Pontianak"
            width={800}
            height={500}
            className="rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
          />
        </a>
      </div>
    </div>
  );
};

export default Hubungi;
