import React from 'react';

const DogCard = ({ dog }) => {
  return (
    <div className="movie">
      <div>
        <p>{dog.message[0]}</p>
      </div>

      <div>
        <img
          src={
            dog.message[0] !== 'N/A'
              ? dog.message[0]
              : 'https://via.placeholder.com/400'
          }
          alt={dog.message[0]}
        />
      </div>

      <div>
        <span>{dog.message[0]}</span>
        <h3>{dog.message[0]}</h3>
      </div>
    </div>
  );
};

export default DogCard;
