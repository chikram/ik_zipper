import React from "react";

const Card = (probs) => {
  return (
    <div className="card" style={{ width: "20rem", height: "25rem" }}>
      <img src={probs.pic} className="card-img-top" alt="..." height="50%" />
      <div className="card-body">
        <h5 className="card-title text-center">{probs.title}</h5>
        <p className="card-text">{probs.body}</p>
        <div class="text-center">
          <button type="button" className="btn btn-warning" >{probs.btntxt}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
