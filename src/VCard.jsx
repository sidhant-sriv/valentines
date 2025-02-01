import React, { useState } from "react";

const ValentinesCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <style>{`
        .card-container {
          perspective: 1000px;
          width: 600px;   /* Fixed width on larger screens */
          margin: 50px auto;
        }

        .card {
          width: 100%;
          height: 600px;  /* Taller card for desktop */
          position: relative;
          transform-style: preserve-3d;
          transition: transform 1s;
          cursor: pointer;
        }
        .card.open {
          transform: rotateY(-180deg);
        }
        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Sour Gummy', cursive, sans-serif;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .card-front {
          background: linear-gradient(135deg, #f3e5f5, #e1bee7);
          color: #6a1b9a;
          padding: 20px;
        }
        .card-front h1 {
          font-size: 3rem;
          margin: 0;
        }
        .card-front p {
          margin-top: 10px;
          font-size: 1.5rem;
        }
        .card-back {
          background: #fff;
          color: #4a148c;
          transform: rotateY(180deg);
          padding: 20px;
          font-size: 1.5rem;
        }
        .card-back img {
          max-width: 90%;
          max-height: 70%;
          border-radius: 12px;
          margin-bottom: 10px;
        }

        /* Responsive adjustments for screens up to 600px wide */
        @media (max-width: 600px) {
          .card-container {
            width: 90%; /* Switch to responsive width on small screens */
            margin: 20px auto;
          }
          .card {
            height: 400px; /* Reduce card height on smaller screens */
          }
          .card-front h1 {
            font-size: 2rem;
          }
          .card-front p {
            font-size: 1.2rem;
          }
          .card-back {
            font-size: 1.2rem;
          }
          .card-back img {
            max-height: 50%;
          }
        }
      `}</style>

      <div className="card-container">
        <div
          className={`card ${isOpen ? "open" : ""}`}
          onClick={handleCardClick}
        >
          <div className="card-face card-front">
            <h1>Happy Valentine's Day, Chavi!</h1>
            <p>Tap to open your card</p>
          </div>
          <div className="card-face card-back">
            <img src="src/assets/image.jpeg" alt="Valentine's Day" />
            <p>I love Chavz, happy valentine</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValentinesCard;