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
                        <Card />
                    </div>
                    <div className="col-8 col-md-6 col-xl-4 col-lg-4  py-2">
                        <Card />
                    </div>
                    <div className="col-8 col-md-6 col-xl-4 col-lg-4  py-2">
                        <Card />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About