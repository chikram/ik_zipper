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
        <div className="row center mx-auto">
          <div className="col-8 col-md-6 col-xl-4 col-lg-4  py-2">
            <Card title="Our Product" pic="shoe1.jpg" body="Some quick example text to build on the card title and make up the bulk of the card's content." btntxt="Order Now" />
          </div>
          <div className="col-8 col-md-6 col-xl-4 col-lg-4  py-2">
            <Card title="Trendind Now" pic="shoes2.jpg" body="Some quick example text to build on the card title and make up the bulk of the card's content." btntxt="Order Now" />
          </div>
          <div className="col-8 col-md-6 col-xl-4 col-lg-4  py-2">
            <Card title="Careers" pic="sho.PNG" body="Some quick example text to build on the card title and make up the bulk of the card's content." btntxt="Order Now" />
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
