import React from "react";

const Card = ({ movie }) => {
  return (
    <div>
      <h2>{`#${movie.ranking} ${movie.title}`}</h2>
      <img src={movie.img.src} alt={movie.img.alt} />
      <p>{`Director: ${movie.director}`}</p>
      <p>{`Year: ${movie.year}`}</p>
    </div>
  );
};

export default Card;
