import logo from "../../../../public/images/logo.png";
import cards from "../../../../public/images/cards.png";
import {Link} from "react-router-dom";
import Order from "./Order";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe('pk_test_51JNF79JreOzFhwnDlwR8bdTam66KedduwYHZFyuxwHyg7Mbmq3V7zH5lYVJqhHDjMro96qrWoJDzjwgwkYW2ks8Z00nK4I2OvN');


function CheckoutPayment() {
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

                        <Link to="/checkout/shipping" className={`text-decoration-none mainColor`}>
                            Shipping
                        </Link>
                        <span className={`mx-3 mainColor`}>
                        <i className="fas fa-chevron-right"></i>
                    </span>

                        <Link to="/" className={`text-decoration-none text-black`}>
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
                        <div className={`d-md-flex justify-content-between align-items-center py-3 border-bottom `}>
                            <span className={`text-secondary w-17`}>Ship to</span>
                            <p
                                className={`${windowWidth ? 'w-60' : 'w-100'} mb-0`}>950 Ridge RD C25, J9411, fl6,
                                Claymont DE 19703, United
                                States</p>
                            <Link to="/checkout/information" className={`text-decoration-none mainColor w-17`}>
                                Change
                            </Link>
                        </div>
                        <div className={`d-md-flex justify-content-between align-items-center pt-3`}>
                            <span className={`text-secondary w-17`}>Method</span>
                            <p
                                className={`${windowWidth ? 'w-60' : 'w-100'}mb-0`}>Expedited Shipping - 2,000 AMD</p>
                            <Link to="/checkout/information" className={`text-decoration-none mainColor w-17`}>
                                Change
                            </Link>
                        </div>

                    </div>

                    <h5 className={`fw-bold mt-5`}>Payment</h5>
                    <p>All transactions are secure and encrypted.</p>

                    <div className={`border radius-7`}>
                        <div className={`d-flex justify-content-between align-items-center p-3`}>
                            <div className={`d-flex`}>
                                <input type={"radio"} className={`largeRadio`} id={`card`}/>
                                <label htmlFor="card" className={`ml-2`}>Credit card</label>
                            </div>
                            <div>
                                <img src={cards} className={`img-fluid`} alt={cards}/>
                            </div>
                        </div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm/>
                        </Elements>
                    </div>


                </div>

            </div>

            <Order/>


        </div>
    )
}

export default CheckoutPayment

