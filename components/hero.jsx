import React from 'react';

const Hero = () => {
    return (
        <div className="flex justify-center items-center py-10 px-4 md:py-20">
            <div className="flex flex-col md:flex-row items-center justify-between w-full h-80 max-w-5xl p-6 md:p-10 bg-gradient-to-r from-cyan-100 to-white rounded-lg shadow-lg">

                <div className="text-gray-800 text-center md:text-left md:w-1/2">
                    <h1 className="text-xl md:text-3xl font-bold">LAKSANA</h1>
                    <p className="mt-2 text-sm md:text-lg">
                        Laporan Aduan Kendala Sarana Prasarana.
                    </p>
                </div>


                <div className="relative mt-6 md:mt-0 w-full h-48 md:w-[320px] md:h-[200px] rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="./hero.jpeg"
                        alt="Politeknik Negeri Pontianak"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 text-white bg-opacity-50 text-center font-bold text-lg md:text-lg px-2 py-1 rounded">
                        POLITEKNIK NEGERI PONTIANAK
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
