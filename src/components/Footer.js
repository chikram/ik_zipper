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
                                        <a className="text-body" href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a className="text-body" href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a className="text-body" href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a className="text-body" href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-bold">Career</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="text-body" href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a className="text-body" href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a className="text-body" href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a className="text-body" href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-bold">Contact Us</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="text-body" href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a className="text-body" href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a className="text-body" href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a className="text-body" href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-bold">News Room</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="text-body" href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a className="text-body" href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a className="text-body" href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a className="text-body" href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </section>
                    <section className="mb-4 mt-5 d-flex flex-row ">

                        <a className="btn m-1 border border-dark" href="#!" role="button"
                        ><FontAwesomeIcon icon={faFacebookF} /></a>


                        <a className="btn  m-1 border border-dark" href="#!" role="button"
                        ><FontAwesomeIcon icon={faXTwitter} /></a>


                        <a className="btn  m-1 border border-dark" href="#!" role="button"
                        ><FontAwesomeIcon icon={faGoogle} /></a>


                        <a className="btn  m-1 border border-dark" href="#!" role="button"
                        ><FontAwesomeIcon icon={faInstagram} /></a>


                        <a className="btn m-1 border border-dark" href="#!" role="button"
                        ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </section>

                </div>

                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2022 Copyright:
                    <a className="text-reset fw-bold" href="/">Ik Zipper</a>
                </div>

            </footer>

        </>
    )
}

export default Footer