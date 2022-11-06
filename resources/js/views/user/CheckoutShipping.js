import logo from "../../../../public/images/logo.png";
import {Link} from "react-router-dom";
import Order from "./Order";

function CheckoutShipping() {
    const windowWidth = window.innerWidth >= 992

    return (
        <div className={`d-lg-flex`}>
            <div className={`p-5 ${windowWidth ? 'w-50' : 'w-100'}`}>
                <div className={`${windowWidth ? 'w-60' : 'w-100'} mx-auto`}>
                    <div className={`d-flex justify-content-center mt-5`}>
                        <img src={logo} alt={logo} className={`img-fluid`}/>
                    </div>
                    <div className={`d-flex justify-content-center align-items-center mt-4`}>
                        <Link to="/checkout/information" className={`text-decoration-none mainColor`}>
                            Information
                        </Link>
                        <span className={`mx-3 mainColor`}>
                       <i className="fas fa-chevron-right"></i>
                    </span>

                        <Link to="/checkout/shipping" className={`text-decoration-none text-black`}>
                            Shipping
                        </Link>
                        <span className={`mx-3`}>
                        <i className="fas fa-chevron-right"></i>
                    </span>

                        <Link to="/" className={`text-decoration-none text-secondary`}>
                            Payment
                        </Link>

                    </div>

                    <div className={`border p-3 mt-5 radius-7`}>
                        <div className={`border-bottom d-md-flex justify-content-between align-items-center pb-3`}>
                            <span className={`text-secondary w-17`}>Contact</span>
                            <p className={`${windowWidth ? 'w-60' : 'w-100'} mb-0`}>lilit@gmail.com</p>
                            <Link to="/checkout/information" className={`text-decoration-none mainColor w-17`}>
                                Change
                            </Link>
                        </div>
                        <div className={`d-md-flex justify-content-between align-items-center pt-3`}>
                            <span className={`text-secondary w-17`}>Ship to</span>
                            <p
                                className={`${windowWidth ? 'w-60' : 'w-100'} mb-0`}>950 Ridge RD C25, J9411, fl6,
                                Claymont DE 19703, United States</p>
                            <Link to="/checkout/information" className={`text-decoration-none mainColor w-17`}>
                                Change
                            </Link>
                        </div>

                    </div>

                    <h5 className={`fw-bold mt-5`}>Shipping method</h5>

                    <div className={`border p-3 radius-7 mt-3`}>
                        <div className={`border-bottom d-flex justify-content-between align-items-center pb-3`}>
                            <div className={`flex`}>
                                <input type={"radio"} className={`largeRadio`}/>
                                <div className={`ms-3`}>
                                    <p className={`mb-0`}>Standard shipping</p>
                                    <p className={`mb-0 font-14`}>Ships 6-7 business days</p>
                                </div>
                            </div>
                            <p>Free</p>
                        </div>

                        <div className={`d-flex justify-content-between align-items-center pt-3`}>
                            <div className={`flex`}>
                                <input type={"radio"} className={`largeRadio`}/>
                                <div className={`ms-3`}>
                                    <p className={`mb-0`}>Expedited shipping</p>
                                    <p className={`mb-0 font-14`}>Ships 1-2 business days</p>
                                </div>
                            </div>
                            <p className={`text-nowrap`}>2,000 AMD</p>
                        </div>

                    </div>

                    <div className={`d-md-flex justify-content-between align-items-center mt-5`}>
                        <Link className={`text-decoration-none mainColor fw-bold text-nowrap`}
                              to={`/checkout/information`}>
                                <span className={`mainColor mr-2`}>
                                    <i className="fas fa-chevron-left"></i>
                                </span>
                            Return to cart</Link>

                        <Link
                            className={`bg-black text-white btn p-3 radius-7 fw-bold text-decoration-none text-nowrap mt-3 mt-md-0`}
                            to={`/checkout/payment`}>
                            Continue to shipping
                        </Link>

                    </div>


                </div>

            </div>

            <Order/>


        </div>
    )

}

export default CheckoutShipping
