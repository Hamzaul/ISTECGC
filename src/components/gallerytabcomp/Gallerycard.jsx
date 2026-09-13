import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Gallerycard = ({ gallery, getImg }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div>
      {gallery.map((item, index) => (
        <div
          key={index}
          ref={elementRef}
          className={`mb-4 break-inside-avoid p-4 border-4 border-black grayscale hover:grayscale-0 transition-all duration-500 ${
            isVisible ? "md:grayscale-0" : "md:grayscale"
          }`}
          onClick={() => getImg(item.image)}
        >
          <Image
            src={item.image}
            alt={item.id || "gallery image"}
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallerycard;

