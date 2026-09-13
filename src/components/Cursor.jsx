'use client'
import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;
    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const flareSize = isPointer ? 0 : 30;
  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  return (
    <>
      <div
        className="cursor z-11"
        style={{
          ...cursorStyle,
          left: `${position.x - flareSize / 2}px`,
          top: `${position.y - flareSize / 2}px`,
          width: `${flareSize}px`,
          height: `${flareSize}px`,
        }}
      ></div>
      <div
        className="cursorbg z-10"
        style={{
          left: `${position.x - 100}px`, 
          top: `${position.y - 100}px`, 
          position: "absolute",
          width: "200px", 
          height: "200px", 
          pointerEvents: "none",
        }}
      ></div>
    </>
  );
}

export default Cursor;
