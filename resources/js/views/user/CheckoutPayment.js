import logo from "../../../../public/images/logo.png";
import cards from "../../../../public/images/cards.png";
import Order from "./Order";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm"
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";

const stripePromise = loadStripe('pk_test_51JNF79JreOzFhwnDlwR8bdTam66KedduwYHZFyuxwHyg7Mbmq3V7zH5lYVJqhHDjMro96qrWoJDzjwgwkYW2ks8Z00nK4I2OvN');

function CheckoutPayment() {
    const windowWidth = window.innerWidth >= 992

    const email = useSelector(function (state) {
        return state.order.email
    })
    const shipping_method = useSelector(function (state) {
        return state.order.shipping_method
    })

    const address = useSelector(function (state) {
        return state.order.address + ', ' + state.order.apartment + ', ' + state.order.city + ', ' + state.order.state + ', ' + state.order.country
    })

    return (
        <div className={`d-lg-flex`}>
            <div className={`p-5 ${windowWidth ? 'w-50' : 'w-100'}`}>
                <div className={`${windowWidth ? 'w-60' : 'w-100'} mx-auto`}>
                    <div className={`d-flex justify-content-center mt-5`}>
                        <img src={logo} alt={logo} className={`img-fluid`}/>
                    </div>
                    <div className={`d-flex justify-content-center align-items-center mt-4`}>
                        <span className={`mainColor`}>
                            Information
                        </span>
                        <span className={`mx-3 mainColor`}>
                       <i className="fas fa-chevron-right"></i>
                    </span>
                        <span className={`mainColor`}>
                            Shipping
                        </span>
                        <span className={`mx-3 mainColor`}>
                        <i className="fas fa-chevron-right"></i>
                    </span>

                        <span className={`text-black`}>
                            Payment
                        </span>

                    </div>

                    <div className={`border p-3 mt-5 radius-7`}>
                        <div className={`border-bottom d-md-flex justify-content-between align-items-center pb-3`}>
                            <span className={`text-secondary w-17`}>Contact</span>
                            <p className={`${windowWidth ? 'w-60' : 'w-100'} mb-0`}>{email}</p>
                            <span className={`mainColor w-17`}>
                                Change
                            </span>
                        </div>
                        <div className={`d-md-flex justify-content-between align-items-center py-3 border-bottom `}>
                            <span className={`text-secondary w-17`}>Ship to</span>
                            <p
                                className={`${windowWidth ? 'w-60' : 'w-100'} mb-0`}>{address}</p>
                            <span className={`mainColor w-17`}>
                                Change
                            </span>
                        </div>
                        <div className={`d-md-flex justify-content-between align-items-center pt-3`}>
                            <span className={`text-secondary w-17`}>Method</span>
                            <p
                                className={`${windowWidth ? 'w-60' : 'w-100'} mb-0`}>{shipping_method === 'free' ? 'Standard Shipping - Free' : 'Expedited Shipping - 2,000 AMD'}</p>
                            <span className={`mainColor w-17`}>
                                Change
                            </span>
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

export default withRouter(CheckoutPayment)

