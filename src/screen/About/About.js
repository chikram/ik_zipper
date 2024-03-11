import React from 'react'
import Card from '../../components/Card'
const About = () => {
    return (
        <>
            <div className='container'>
                <h1 className='text-center text-danger fw-bold py-3'>About Our Product</h1>
                <img src="sho.PNG" alt="" width={"100%"} height={"500px"} />
            </div>
            <div className="container my-5">
                <div className="row center mx-auto">
                    <div className="col-8 col-md-6 col-xl-4 col-lg-4  py-2">
                        <Card title="Product Quality" pic="shoe1.jpg" body="Some quick example text to build on the card title and make up." btntxt="Learn More" />
                    </div>
                    <div className="col-8 col-md-6 col-xl-4 col-lg-4  py-2">
                        <Card title="Our Material" pic="shoes2.jpg" body="Some quick example text to build on the card title and make up." btntxt="Learn More" />
                    </div>
                    <div className="col-8 col-md-6 col-xl-4 col-lg-4  py-2">
                        <Card title="Your Rights To Know" pic="sho.PNG" body="Some quick example text to build on the card title and make up." btntxt="Learn More" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About