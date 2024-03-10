import React from "react";

const Card = () => {
  return (
    <div className="card" style={{ width: "20rem", height: "25rem" }}>
      <img src="sho.PNG" className="card-img-top" alt="..." height="50%" />
      <div className="card-body">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class="text-center">
          <button type="button" className="btn btn-warning" >Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
