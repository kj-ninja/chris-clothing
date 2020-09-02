import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import './Footer.scss';

const FooterPage = () => {
    return (
        <MDBFooter className="font-small pt-5 mt-5">
            <MDBContainer fluid className="text-md-left footer-container py-4">
                <MDBRow>
                    <MDBCol md="3">
                        <h5 className="title">About Us</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">About us</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Community</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Jobs</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Shipping</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Contact us</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title">Our Services</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Free Shipping</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Free Returns</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Our Franchising</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Terms & Conditions</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Privacy Policy</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title">Information</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Payment methods</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Shipping methods</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Product Returns</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Conformity of the products</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Delivery & Shipping</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="2">
                        <div className="footer-socials">
                            <a href="#!" className="twitter"></a>
                            <a href="#!" className="fb"></a>
                            <a href="#!" className="insta"></a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer className="copyright-container">
                    <span>
                    &copy; {new Date().getFullYear()} Copyright: <a
                    href="#!"> Chris Clothing</a>
                        </span>
                    <div className="terms">
                        <a href="#!">Terms of Sale</a>
                        <a href="#!">Terms of Use</a>
                        <a href="#!">Privacy Policy</a>
                    </div>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;