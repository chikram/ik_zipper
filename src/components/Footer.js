import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebookF, faXTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (
        <>


            <footer className="bg-body-tertiary text-center">

                <div className="container p-4">
                    <section className="">

                        <div className="row">

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-bold">Our Company</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-bold">Career</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-bold">Contact Us</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-bold">News Room</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a className="text-body text-decoration-none" href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </section>
                    <section className="mb-4 mt-5 d-flex flex-row icon">

                        <a className="btn m-1 border border-dark" href="#!" role="button"
                        ><FontAwesomeIcon icon={faFacebookF} style={{ color: "blue" }} /></a>


                        <a className="btn  m-1 border border-dark" href="#!" role="button"
                        ><FontAwesomeIcon icon={faXTwitter} style={{ color: "gray" }} /></a>


                        <a className="btn  m-1 border border-dark" href="#!" role="button"
                        ><FontAwesomeIcon icon={faGoogle} style={{ color: "red" }} /></a>


                        <a className="btn  m-1 border border-dark" href="#!" role="button"
                        ><FontAwesomeIcon icon={faInstagram} style={{ color: "red" }} /></a>


                        <a className="btn m-1 border border-dark" href="#!" role="button"
                        ><FontAwesomeIcon icon={faLinkedinIn} style={{ color: "blue" }} /></a>
                    </section>

                </div>

                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2022 Copyright:
                    <a className="text-reset fw-bold" href="/">Ik <span className='text-danger'>Zipper</span></a>
                </div>

            </footer>

        </>
    )
}

export default Footer