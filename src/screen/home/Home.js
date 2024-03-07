import React from "react";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

const Home = () => {
  return (
    <>
      <div className="container my-4">
        <Carousel />
      </div>
      <div className="container my-5">
        <div className="row ">
          <div className="col-8  col-md-6 col-xl-4 col-lg-4">
            <Card />
          </div>
          <div className="col-8 col-md-6 col-xl-4 col-lg-4">
            <Card />
          </div>
          <div className="col-8 col-md-6 col-xl-4 col-lg-4">
            <Card />
          </div>

        </div>
        <div className="row py-4">
          <div className="col-8  col-md-6 col-xl-4 col-lg-4">
            <Card />
          </div>
          <div className="col-8 col-md-6 col-xl-4 col-lg-4">
            <Card />
          </div>
          <div className="col-8 col-md-6 col-xl-4 col-lg-4">
            <Card />
          </div>

        </div>

      </div>
    </>
  );
};

export default Home;
