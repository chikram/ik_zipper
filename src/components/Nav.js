import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">

            <div className="container">

                <button
                    className="navbar-toggler px-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarExample5"
                    aria-controls="navbarExample5"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarExample5">

                    <ul className="navbar-nav ps-lg-2 ">
                        <li className="nav-item">
                            <Link className="navbar-brand text-center fw-bold" to="/">IK <span className='text-danger'>Zipper</span></Link>
                        </li>

                        <li className="nav-item dropdown position-static b">
                            <Link
                                className="nav-link"
                                to="/"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <span className=" text-dark ">Our Product</span>
                                <span className="plus-icon d-lg-none">&#43;</span>
                            </Link>

                            <div
                                className="dropdown-menu w-100 mt-0 border-0"
                                aria-labelledby="navbarDropdown"
                            >
                                <div className="container">
                                    <div className="row my-4">
                                        <div className="col-md-8 col-lg-4 mb-4 mb-lg-0">
                                            <p className="text-uppercase font-weight-bold cd">
                                                Brand Name
                                            </p>
                                            <Link to="/" className="text-muted text-decoration-none">
                                                <div className="row mb-2">
                                                    <div className="col">
                                                        <img
                                                            src="sho.PNG"
                                                            alt=""
                                                            width="50"
                                                            height="50"
                                                            className="p-2"
                                                        />
                                                        <span className="mb-2 b ">Shoes</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="/" className="text-muted text-decoration-none">
                                                <div className="row mb-2">
                                                    <div className="col">
                                                        <img
                                                            src="sho.PNG"
                                                            alt=""
                                                            width="50"
                                                            height="50"
                                                            className="p-2"
                                                        />
                                                        <span className="mb-2 b ">Shoes</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="/" className="text-muted text-decoration-none">
                                                <div className="row mb-2">
                                                    <div className="col">
                                                        <img
                                                            src="sho.PNG"
                                                            alt=""
                                                            width="50"
                                                            height="50"
                                                            className="p-2"
                                                        />
                                                        <span className="mb-2 b ">Shoes</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="/" className="text-muted text-decoration-none">
                                                <div className="row mb-2">
                                                    <div className="col">
                                                        <img
                                                            src="sho.PNG"
                                                            alt=""
                                                            width="50"
                                                            height="50"
                                                            className="p-2"
                                                        />
                                                        <span className="mb-2 b ">Shoes</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-md-8 col-lg-4 mb-4 mb-lg-0">
                                            <p className="text-uppercase font-weight-bold cd">
                                                Brand Name
                                            </p>
                                            <Link to="/" className="text-muted text-decoration-none">
                                                <div className="row mb-2">
                                                    <div className="col">
                                                        <img
                                                            src="sho.PNG"
                                                            alt=""
                                                            width="50"
                                                            height="50"
                                                            className="p-2"
                                                        />
                                                        <span className="mb-2 b ">Shoes</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="/" className="text-muted text-decoration-none">
                                                <div className="row mb-2">
                                                    <div className="col">
                                                        <img
                                                            src="sho.PNG"
                                                            alt=""
                                                            width="50"
                                                            height="50"
                                                            className="p-2"
                                                        />
                                                        <span className="mb-2 b ">Shoes</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="/" className="text-muted text-decoration-none">
                                                <div className="row mb-2">
                                                    <div className="col">
                                                        <img
                                                            src="sho.PNG"
                                                            alt=""
                                                            width="50"
                                                            height="50"
                                                            className="p-2"
                                                        />
                                                        <span className="mb-2 b ">Shoes</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="/" className="text-muted text-decoration-none">
                                                <div className="row mb-2">
                                                    <div className="col">
                                                        <img
                                                            src="sho.PNG"
                                                            alt=""
                                                            width="50"
                                                            height="50"
                                                            className="p-2"
                                                        />
                                                        <span className="mb-2 b ">Shoes</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-md-8 col-lg-4 mb-4 mb-lg-0">
                                            <p className="text-uppercase font-weight-bold cd">
                                                Brand Name
                                            </p>
                                            <Link to="/" className="text-muted text-decoration-none">
                                                <div className="row mb-2">
                                                    <div className="col">
                                                        <img
                                                            src="sho.PNG"
                                                            alt=""
                                                            width="50"
                                                            height="50"
                                                            className="p-2"
                                                        />
                                                        <span className="mb-2 b ">Shoes</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="/" className="text-muted text-decoration-none">
                                                <div className="row mb-2">
                                                    <div className="col">
                                                        <img
                                                            src="sho.PNG"
                                                            alt=""
                                                            width="50"
                                                            height="50"
                                                            className="p-2"
                                                        />
                                                        <span className="mb-2 b ">Shoes</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="/" className="text-muted text-decoration-none">
                                                <div className="row mb-2">
                                                    <div className="col">
                                                        <img
                                                            src="sho.PNG"
                                                            alt=""
                                                            width="50"
                                                            height="50"
                                                            className="p-2"
                                                        />
                                                        <span className="mb-2 b ">Shoes</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="/" className="text-muted text-decoration-none">
                                                <div className="row mb-2">
                                                    <div className="col">
                                                        <img
                                                            src="sho.PNG"
                                                            alt=""
                                                            width="50"
                                                            height="50"
                                                            className="p-2"
                                                        />
                                                        <span className="mb-2 b ">Shoes</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item b">
                            <Link class="nav-link text-dark " aria-current="page" to="/about">About Our Product</Link>
                        </li>
                        <li class="nav-item b">
                            <Link class="nav-link text-dark" aria-current="page" to="/contact">Contact Us</Link>
                        </li>


                    </ul>
                </div>

            </div>

        </nav>

    )
}

export default Nav
