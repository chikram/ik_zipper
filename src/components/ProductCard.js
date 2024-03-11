import React from 'react'
import img1 from '../assets/2.jpg'
const ProductCard = () => {
    return (
        <>
            <div className="card border-0" id="myCard" style={{ width: "12rem" }}>
                <img src={img1} className="card-img-top" alt="..." height="200" />
                <div className="card-body">
                    <h5 className="card-title text-center py-3">Card title</h5>
                </div>
            </div>

        </>
    )
}

export default ProductCard