import React from "react";

const Card = () => {
  return (
    <div className="card" style={{ height: "25rem", width: "20rem" }}>
      <img
        src="shoe.png"
        className="card-img-top h-50 image-fluide"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <div class="text-center"> 
            <button type="button" className="btn btn-warning" >Order Now</button> 
        </div> 
      </div>
    </div>
  );
};

export default Card;
