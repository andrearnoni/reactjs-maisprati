import React, { useState } from "react";

const images = [
  "https://via.placeholder.com/150/0000FF/808080?text=Image1",
  "https://via.placeholder.com/150/FF0000/FFFFFF?text=Image2",
  "https://via.placeholder.com/150/FFFF00/000000?text=Image3",
  "https://via.placeholder.com/150/00FF00/0000FF?text=Image4",
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Imagem ${index + 1}`}
            style={{ cursor: "pointer", width: "150px", height: "150px" }}
            onClick={() => openImage(index)}
          />
        ))}
      </div>
      {selectedImage !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={images[selectedImage]}
              alt={`Imagem ${selectedImage + 1}`}
              style={{ width: "500px", height: "500px" }}
            />
            <button
              onClick={closeImage}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Fechar
            </button>
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                backgroundColor: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              &lt;
            </button>
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                backgroundColor: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
