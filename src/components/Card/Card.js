import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="card border-dark mt-4 mb-1">
      <h3 className="card-header text-center text-uppercase text-white bg-dark px-1">{`#${movie.ranking} ${movie.title}`}</h3>
      <img src={movie.img.src} className="card-img-top" alt={movie.img.alt} />
      <div className="card-body">
        <p className="card-text">
          <span className="fw-bold">Director:</span> {`${movie.director}`}
        </p>
        <p className="card-text">
          <span className="fw-bold">Year:</span> {`${movie.year}`}
        </p>
      </div>
    </div>
  );
};

export default Card;
