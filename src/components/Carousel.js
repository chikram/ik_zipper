import React from 'react'

const Carousel = () => {
    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="sho.png"
                        className="d-block w-100 image-fluide"
                        alt="..."
                        height="700"
                    />
                    <div className="carousel-caption">
                        <h2 className="text-danger fw-bold">Third slide label</h2>
                        <p className="text-danger fs-5">
                            Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="shoe.png"
                        className="d-block w-100 image-fluide"
                        alt="..."
                        height="700"
                    />
                    <div className="carousel-caption">
                        <h2 className="text-danger fw-bold">Third slide label</h2>
                        <p className="text-danger fs-5">
                            Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="sho.PNG"
                        className="d-block w-100 image-fluide"
                        alt="..."
                        height="700"
                    />
                    <div className="carousel-caption">
                        <h2 className="text-danger fw-bold">Third slide label</h2>
                        <p className="text-danger fs-5">
                            Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
