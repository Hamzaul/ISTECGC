"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Galleryheader from "@/components/gallerytabcomp/galleryheader/Galleryheader";
import Gallerycard from "@/components/gallerytabcomp/Gallerycard";
import { IoCloseOutline } from "react-icons/io5";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/FooterCGC";
import { galleryImages } from "@/data/gallery";

const shuffleArray = (array) => {
  const copy = [...array];
  let currentIndex = copy.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [copy[currentIndex], copy[randomIndex]] = [
      copy[randomIndex],
      copy[currentIndex],
    ];
  }
  return copy;
};

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgsrc] = useState("");

  const getImg = (imgsrc) => {
    setTempImgsrc(imgsrc);
    setModel(true);
  };

  useEffect(() => {
    setGallery(shuffleArray(galleryImages));
  }, []);

  return (
    <div className="mt-16 md:mt-24 flex flex-col justify-between my-10">
      <Navbar />
      <div>
        <Galleryheader />
      </div>
      <div
        className={`w-[100%] h-[100vh] fixed flex justify-center items-center bg-black top-0 left-0 z-50 transition duration-500 ease-in-out ${
          model
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-0"
        }`}
      >
        {tempimgSrc && (
          <Image
            src={tempimgSrc}
            width={1080}
            height={1080}
            alt="selectedimg"
            className="w-auto max-w-[100%] h-auto max-h-[100%] block box-border py-5 mx-auto"
          />
        )}
        <IoCloseOutline
          className="absolute top-5 right-5 text-white text-4xl cursor-pointer"
          onClick={() => setModel(false)}
        />
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-3 mx-[1%] md:mx-[50px] md:my-2">
        <Gallerycard gallery={gallery} getImg={getImg} />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
