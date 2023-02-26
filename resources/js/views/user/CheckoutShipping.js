import logo from "../../../../public/images/logo.png";
import {Link, withRouter} from "react-router-dom";
import Order from "./Order";
import {useDispatch, useSelector} from "react-redux";
import {createNotification} from "./UserHelpers";
import styles from "./UserSideStyles.module.scss";

function CheckoutShipping(props) {
    const dispatch = useDispatch()

    const windowWidth = window.innerWidth >= 992

    const shipping_method = useSelector(function (state) {
        return state.order.shipping_method
    })
    const email = useSelector(function (state) {
        return state.order.email
    })

    const address = useSelector(function (state) {
        return state.order.address + ', ' + state.order.apartment + ', ' + state.order.city + ', ' + state.order.state + ', ' + state.order.country
    })

    function continueToShipping(e) {
        e.preventDefault()
        if (!shipping_method) {
            createNotification('error', 'Please fill in all fields')
        } else {
            return props.history.push('/checkout/payment');
        }
    }

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

                        <span className={`text-black`}>
                            Shipping
                        </span>
                        <span className={`mx-3`}>
                        <i className="fas fa-chevron-right"></i>
                    </span>

                        <span className={`text-secondary`}>
                            Payment
                        </span>

                    </div>

                    <div className={`border p-3 mt-5 radius-7`}>
                        <div className={`border-bottom d-md-flex justify-content-between align-items-center pb-3`}>
                            <span className={`text-secondary w-17`}>Contact</span>
                            <p className={`${windowWidth ? 'w-60' : 'w-100'} mb-0`}>{email}</p>
                            <Link to="/checkout/information"
                                  className={`text-decoration-none mainColor w-17 ${styles.removeBlueLink}`}>
                                Change
                            </Link>
                        </div>
                        <div className={`d-md-flex justify-content-between align-items-center pt-3`}>
                            <span className={`text-secondary w-17`}>Ship to</span>
                            <p
                                className={`${windowWidth ? 'w-60' : 'w-100'} mb-0`}>{address}</p>
                            <Link to="/checkout/information"
                                  className={`text-decoration-none mainColor w-17 ${styles.removeBlueLink}`}>
                                Change
                            </Link>
                        </div>

                    </div>

                    <h5 className={`fw-bold mt-5`}>Shipping method</h5>

                    <div className={`border p-3 radius-7 mt-3`}>
                        <div className={`border-bottom d-flex justify-content-between align-items-center pb-3`}>
                            <div className={`flex`}>
                                <input type={"radio"} className={`largeRadio radio-custom`} name={shipping_method}
                                       id={`freeShipping`}
                                       checked={shipping_method === 'free'}
                                       onChange={(e) => {
                                           dispatch({
                                               type: 'CHANGE_ORDER',
                                               payload: {
                                                   shipping_method: 'free'
                                               }
                                           })
                                       }}/>
                                <label className={`flex radio-custom-label align-items-center`}
                                       htmlFor={`freeShipping`}>
                                    <div>
                                        <p className={`mb-0`}>Standard shipping</p>
                                        <p className={`mb-0 font-14`}>Ships 6-7 business days</p>
                                    </div>

                                </label>
                            </div>
                            <p>Free</p>
                        </div>
                        <div className={`d-flex justify-content-between align-items-center pt-3`}>
                            <div className={`flex`}>
                                <input type={"radio"} className={`largeRadio radio-custom`} name={shipping_method}
                                       checked={shipping_method === 'expedited'} id={`expeditedShipping`}
                                       onChange={(e) => {
                                           dispatch({
                                               type: 'CHANGE_ORDER',
                                               payload: {
                                                   shipping_method: 'expedited'
                                               }
                                           })
                                       }}/>
                                <label className={`flex radio-custom-label align-items-center`}
                                       htmlFor={`expeditedShipping`}>
                                    <div>
                                        <p className={`mb-0`}>Expedited shipping</p>
                                        <p className={`mb-0 font-14`}>Ships 1-2 business days</p>
                                    </div>
                                </label>
                            </div>
                            <p className={`text-nowrap`}>2,000 AMD</p>
                        </div>

                    </div>

                    <div className={`d-md-flex justify-content-between align-items-center mt-5`}>
                        <Link className={`text-decoration-none mainColor fw-bold text-nowrap ${styles.removeBlueLink}`}
                              to={`/checkout/information`}>
                                <span className={`mainColor mr-2`}>
                                    <i className="fas fa-chevron-left"></i>
                                </span>
                            Return to information</Link>

                        <button
                            className={`bg-black text-white btn p-3 radius-7 fw-bold text-decoration-none text-nowrap mt-3 mt-md-0`}
                            disabled={!shipping_method}
                            onClick={(e) => {
                                continueToShipping(e)
                            }}>
                            Continue to shipping
                        </button>

                    </div>


                </div>

            </div>

            <Order/>


        </div>
    )

}

export default withRouter(CheckoutShipping)
