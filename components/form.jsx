"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Form = () => {
  const [nama, setNama] = useState("");
  const [noIdentitas, setNoIdentitas] = useState("");
  const [noHp, setNoHp] = useState("");
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [listUnit, setListUnit] = useState([]);
  const [listKategori, setListKategori] = useState([]);
  const [message, setMessage] = useState("");
  const [unitKerja, setUnitKerja] = useState("");
  const [kategori, setKategori] = useState("");
  const [loading, setLoading] = useState(false);



  const findPriority = (e) => {
    e.preventDefault();
    const {value} = e.target;
    setPriority(value)
  }

  const findUnitKerja = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setUnitKerja(value)
  };

  const findKategori = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setKategori(value)
  };

  const kirimform = async (e) => {
    e.preventDefault()
    if (!nama.length || !noIdentitas.length || !unitKerja.length || !noHp.length || !title.length || !message.length || !priority.length ||
      !kategori.length
    ) {
      toast("Harap isi semua input formulirnya")

      return
    }

    try {
      setLoading(true)
      const formsData = new FormData()
      formsData.append("nama", nama)
      formsData.append("no_identitas", noIdentitas)
      formsData.append("unit", unitKerja)
      formsData.append("no_hp", noHp)
      formsData.append("title", title)
      formsData.append("message", message)
      formsData.append("priority", priority)
      formsData.append("kategori_pekerjaan_id", kategori)

      const response = await axios.post("https://laksana.polnep.ac.id/api/laporan", formsData)
      if (response.data.success) {
        toast(response.data.message)
        setLoading(false)
      } else {
        toast("Gagal Mengirim Formulir Laporan")
        setLoading(false)
      }

    } catch (error) {
      toast("Gagal Mengirim Formulir Laporan")
      setLoading(false)
    }
  };


  useEffect(() => {
    const fetchListUnitKerja = async () => {
      try {
        const response = await axios.get("https://laksana.polnep.ac.id/api/unit")

        setListUnit(response.data.data)
        console.log(listUnit)
      } catch (error) {

      }
    }

    fetchListUnitKerja()
  }, [])

  useEffect(() => {
    const fetchListKategori = async () => {
      try {
        const response = await axios.get("https://laksana.polnep.ac.id/api/kategori")

        setListKategori(response.data.data)
        console.log(listKategori)
      } catch (error) {

      }
    }

    fetchListKategori()
  }, [])

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

        <form onSubmit={kirimform} className="p-4 md:p-6">
          {/* Nama dan No Telepon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={event => setNama(event.target.value)}
                placeholder="ketik nama anda"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">No Telepon</label>
              <input
                type="text"
                value={noHp}
                onChange={event => setNoHp(event.target.value)}
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
                value={noIdentitas}
                onChange={event => setNoIdentitas(event.target.value)}
                placeholder="ketik nomor identitas NIK/NIM/NIP"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Unit Kerja</label>
              <select onChange={findUnitKerja} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white">
                <option>--Pilih Unit Kerja--</option>
                {
                  listUnit?.map(unit => (
                    <option key={unit.id} value={unit.id}>{unit.nama}</option>
                  ))
                }
              </select>
            </div>
          </div>

          {/* Judul */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Judul</label>
            <input
              type="text"
              value={title}
              onChange={event => setTitle(event.target.value)}
              placeholder="ketik judul laporan"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Keterangan */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Keterangan</label>
            <textarea
              placeholder="ketik Keterangan"
              value={message}
              onChange={event => setMessage(event.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              rows="4"
            ></textarea>
          </div>

          {/* Kategori Masalah dan Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Kategori Masalah</label>
              <select onChange={findKategori} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white">
                <option>--Pilih Kategori Masalah--</option>
                {
                  listKategori?.map(kategori => (
                    <option key={kategori.id} value={kategori.id}>{kategori.kategori}</option>
                  ))
                }
              </select>
            </div>

            {/* Priority */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Priority</label>
              <select onChange={findPriority} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white">
                <option>--Pilih Priority--</option>
                <option value="low">LOW</option>
                <option value="normal">NORMAL</option>
                <option value="high">HIGH</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            {
              loading ? (
                <button
                  type="submit"
                  disabled
                  className="px-8 py-2 bg-gray-400 text-black cursor-not-allowed font-medium rounded-full hover:bg-cyan-500"
                >
                  Loading....
                </button>
              )
                : (<button
                  type="submit"
                  className="px-8 py-2 bg-cyan-400 text-white font-medium rounded-full hover:bg-cyan-500"
                >
                  Submit
                </button>)
            }
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;