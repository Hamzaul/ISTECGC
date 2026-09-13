import { useState, useEffect } from "react";

const LoadingSpinner = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-500 rounded-full animate-spin-fast border-t-transparent"></div>
          </div>
        </div>
        <span className="text-lg font-medium text-blue-500">Loading{dots}</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
