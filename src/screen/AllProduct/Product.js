import React from 'react'
import ProductCard from '../../components/ProductCard'
import './product.css'
const Product = () => {
    return (
        <>
            <div className='container my-5'>
                <h1 className='text-center text-danger fs-1 fw-bold'>All <span className='text-dark'>Product</span></h1>
                <h2 className='text-center pt-3'>Shoes</h2>
                <div className="row py-5">
                    <div className="col-xs-6 col-lg-3 col-md-4 col-sm-6 ">
                        <ProductCard />
                    </div>
                    <div className="col-xs-6 col-lg-3 col-md-4 col-sm-6">
                        <ProductCard />
                    </div>
                    <div className="col-xs-6 col-lg-3 col-md-4 col-sm-6">
                        <ProductCard />
                    </div>
                    <div className="col-xs-6 col-lg-3 col-md-4 col-sm-6">
                        <ProductCard />
                    </div>
                    <div className="col-xs-6 col-lg-3 col-md-4 col-sm-6 crdpro">
                        <ProductCard />
                    </div>
                    <div className="col-xs-6 col-lg-3 col-md-4 col-sm-6 crdpro">
                        <ProductCard />
                    </div>
                    <div className="col-xs-6 col-lg-3 col-md-4 col-sm-6 crdpro">
                        <ProductCard />
                    </div>
                    <div className="col-xs-6 col-lg-3 col-md-4 col-sm-6 crdpro">
                        <ProductCard />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product