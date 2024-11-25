"use client";
import React, { useState } from "react";

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center my-10 min-h-screen bg-white p-4">
      {/* Title */}
      <h1 className="text-center text-xl md:text-2xl font-bold mb-6 md:mb-8 text-black">
        LAYANAN PENGADUAN
        <br />
        KENDALA POLITEKNIK NEGERI
        <br />
        PONTIANAK
      </h1>

      {/* Form Container */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-cyan-200 py-3 md:py-4">
          <h2 className="text-center text-lg md:text-xl font-semibold text-black">
            SAMPAIKAN LAPORAN ANDA
          </h2>
        </div>

        <form className="p-4 md:p-6">
          {/* Nama dan No Telepon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nama</label>
              <input
                type="text"
                placeholder="ketik nama anda"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">No Telepon</label>
              <input
                type="text"
                placeholder="ketik nomor telepon "
                className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* No Identitas dan Unit Kerja */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">No Identitas</label>
              <input
                type="text"
                placeholder="ketik nomor identitas NIK/NIM/NIP"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Unit Kerja</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white">
                <option>--Pilih Unit Kerja--</option>
                <option>UPA TIK POLNEP</option>
                <option>HUMAS POLNEP</option>
                <option>UMUM</option>
                <option>Satgas PPKS</option>
                <option>Kerumah Tanggapan</option>
              </select>
            </div>
          </div>

          {/* Judul */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Judul</label>
            <input
              type="text"
              placeholder="ketik judul laporan"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Keterangan */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Keterangan</label>
            <textarea
              placeholder="ketik Keterangan"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              rows="4"
            ></textarea>
          </div>

          {/* Kategori Masalah dan Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Kategori Masalah</label>
              <div className="flex flex-wrap gap-3">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="Internet"
                    checked={selectedCategory === "Internet"}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="hidden"
                  />
                  <span className={`flex items-center gap-2 px-4 py-1.5 rounded-full border cursor-pointer ${
                    selectedCategory === "Internet"
                      ? "bg-cyan-400 text-white border-cyan-400"
                      : "bg-white text-black border-cyan-400"
                  }`}>
                    <span className="w-4 h-4 border-2 border-current rounded-full flex items-center justify-center">
                      {selectedCategory === "Internet" && (
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                      )}
                    </span>
                    Internet
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="PPKS"
                    checked={selectedCategory === "PPKS"}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="hidden"
                  />
                  <span className={`flex items-center gap-2 px-4 py-1.5 rounded-full border cursor-pointer ${
                    selectedCategory === "PPKS"
                      ? "bg-cyan-400 text-white border-cyan-400"
                      : "bg-white text-black border-cyan-400"
                  }`}>
                    <span className="w-4 h-4 border-2 border-current rounded-full flex items-center justify-center">
                      {selectedCategory === "PPKS" && (
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                      )}
                    </span>
                    PPKS
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Priority</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white">
                <option>LOW</option>
                <option>MEDIUM</option>
                <option>HIGH</option>
              </select>
            </div>
          </div>

          {/* Upload File */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Upload File</label>
            <div className="border-2 border-dashed border-cyan-400 rounded-md p-4 md:p-8 text-center">
              {selectedFile ? (
                <p className="text-sm text-cyan-500 truncate">
                  {selectedFile.name}
                </p>
              ) : (
                <>
                  <div className="w-12 h-12 mx-auto mb-2">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-cyan-400">
                      <path
                        d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 16.2091 19.2091 18 17 18H7C4.79086 18 3 16.2091 3 14C3 11.7909 4.79086 10 7 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 12V15M12 15L14 13M12 15L10 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">Drag and drop your files here</p>
                  <p className="text-xs text-gray-400 mb-4">file supported: JPG, PNG, GIF</p>
                </>
              )}
              <input
                type="file"
                className="hidden"
                id="fileInput"
                onChange={handleFileChange}
              />
              <label
                htmlFor="fileInput"
                className="px-4 py-2 bg-cyan-400 text-white rounded-full cursor-pointer hover:bg-cyan-500 inline-block"
              >
                Browse File
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-2 bg-cyan-400 text-white font-medium rounded-full hover:bg-cyan-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;