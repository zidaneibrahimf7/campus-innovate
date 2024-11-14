import { useState } from 'react';

const videoData = [
  {
    src: "https://drive.google.com/file/d/1VZarqbEygPugoTtnsVljyfI1wI3r0_ey/preview",
    name: "Build Up WMK IPB 2024",
    description: "Testimoni Peserta Team Build Up WMK IPB 2024 Team A",
  },
  {
    src: "https://drive.google.com/file/d/1VYoM-BS7nGDtNnzDe5b3cMFj2AONqOgP/preview",
    name: "Build Up WMK IPB 2024",
    description: "Testimoni Peserta Team Build Up WMK IPB 2024 Team B",
  },
];

const VideoPagination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < videoData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <main className="relative flex items-center justify-center w-full">
      {/* Tombol Previous */}
      <button
        onClick={handlePrevious}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentIndex === 0}
      >
        &#9664;
      </button>

      {/* Iframe Video */}
      <div className="flex flex-col items-center gap-2 md:w-[80rem] w-[20rem] md:h-[610px]">
        <iframe
          src={videoData[currentIndex].src}
          className="rounded-lg w-full md:h-full h-[310px]"
          allow="autoplay"
          allowFullScreen={true}
        />
        <h2 className="md:text-lg text-sm font-bold text-center text-secondary">{videoData[currentIndex].name}</h2>
        <p className="md:text-lg text-xs font-normal text-center text-secondary">{videoData[currentIndex].description}</p>
      </div>

      {/* Tombol Next */}
      <button
        onClick={handleNext}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${
          currentIndex === videoData.length - 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentIndex === videoData.length - 1}
      >
        &#9654;
      </button>
    </main>
  );
};

export default VideoPagination;
