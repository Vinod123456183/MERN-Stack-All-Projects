import React, { useState } from "react";
import { FaExpand, FaDownload, FaTimes } from "react-icons/fa";

function ImgComponent() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  const imageUrl =
    "https://substackcdn.com/image/fetch/$s_!Grxm!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8e1f2393-d40a-4b43-98fe-394cbd237a3c_1920x1080.jpeg";

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      {/* Image with hover icon */}
      <div
        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        onClick={toggleFullscreen}
      >
        <img
          src={imageUrl}
          alt="Preview"
          className="w-full h-auto transition duration-300 group-hover:brightness-90"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaExpand className="text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full" />
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          {/* Top right buttons */}
          <div className="absolute top-4 right-4 flex space-x-3">
            {/* Download Button */}
            <a
              href={imageUrl}
              download="data-with-baraa.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-black bg-opacity-60 hover:bg-opacity-80 p-3 rounded-full transition"
              title="Download"
            >
              <FaDownload size={20} />
            </a>

            {/* Close Button */}
            <button
              onClick={toggleFullscreen}
              className="text-white bg-black bg-opacity-60 hover:bg-opacity-80 p-3 rounded-full transition"
              title="Close"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Fullscreen Image */}
          <img
            src={imageUrl}
            alt="Fullscreen"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default ImgComponent;
