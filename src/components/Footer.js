import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebookF, faXTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'

// Initialization for ES Users
import { Input, initMDB } from "mdb-ui-kit";


function Footer() {
    initMDB({ Input });
    return (
        <>


            <footer className="bg-body-tertiary text-center">

                <div className="container p-4">

                    <section className="mb-4">

                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faFacebookF} /></a>


                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faXTwitter} /></a>


                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faGoogle} /></a>


                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faInstagram} /></a>


                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </section>

                    <section className="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum
                            harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>


                    <section className="">

                        <div className="row">

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Product</h5>

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
                                <h5 className="text-uppercase">Product</h5>

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
                                <h5 className="text-uppercase">Product</h5>

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
                                <h5 className="text-uppercase">Product</h5>

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