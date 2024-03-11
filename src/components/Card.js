import React from "react";
import { Link } from 'react-router-dom'
const Card = (probs) => {
  return (
    <div className="card cd" style={{ width: "20rem", height: "25rem" }}>
      <img src={probs.pic} className="card-img-top" alt="..." height="50%" />
      <div className="card-body">
        <h5 className="card-title text-center">{probs.title}</h5>
        <p className="card-text">{probs.body}</p>
        <div class="text-center">
          <Link type="button" className="btn btn-warning" to='/allproduct' >{probs.btntxt}</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
