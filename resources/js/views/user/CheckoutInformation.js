import logo from "../../../../public/images/logo.png"
import {Link, withRouter} from "react-router-dom";
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import Order from "./Order";
import {useDispatch, useSelector} from "react-redux";
import {NotificationContainer} from 'react-notifications';
import React from "react";
import {createNotification} from "./UserHelpers";
import styles from "./UserSideStyles.module.scss";


function CheckoutInformation(props) {
    const windowWidth = window.innerWidth >= 992

    const email = useSelector(function (state) {
        return state.order.email
    })
    const first_name = useSelector(function (state) {
        return state.order.first_name
    })
    const last_name = useSelector(function (state) {
        return state.order.last_name
    })
    const address = useSelector(function (state) {
        return state.order.address
    })
    const apartment = useSelector(function (state) {
        return state.order.apartment
    })
    const city = useSelector(function (state) {
        return state.order.city
    })
    const state = useSelector(function (state) {
        return state.order.state
    })
    const zip = useSelector(function (state) {
        return state.order.zip
    })
    const country = useSelector(function (state) {
        return state.order.country
    })
    const phone = useSelector(function (state) {
        return state.order.phone
    })
    const user = useSelector(function (state) {
        return state.user
    })

    const dispatch = useDispatch()

    function continueToShipping(e) {
        e.preventDefault()
        if (!first_name || !last_name || !address || !apartment || !state || !city || !country || !phone) {
            createNotification('error', 'Please fill in all fields')
        } else {
            return props.history.push('/checkout/shipping');
        }

    }


    return (
        <div className={`d-lg-flex`}>
            <div className={windowWidth ? 'w-50 p-5' : 'w-100 p-3'}>
                <div className={`${windowWidth ? 'w-60' : 'w-100'} mx-auto`}>
                    <div className={`d-flex justify-content-center mt-5`}>
                        <img src={logo} alt={logo} className={`img-fluid`}/>
                    </div>
                    <div className={`d-flex justify-content-center align-items-center mt-4`}>
                        <span className={`text-black`}>
                            Information
                        </span>
                        <span className={`mx-3`}>
                       <i className="fas fa-chevron-right"></i>
                    </span>

                        <span className={`text-secondary`}>
                            Shipping
                        </span>
                        <span className={`mx-3 text-secondary`}>
                        <i className="fas fa-chevron-right"></i>
                    </span>

                        <span className={`text-secondary`}>
                            Payment
                        </span>

                    </div>

                    <form>
                        <div className={`d-md-flex justify-content-between mt-5`}>
                            <p className={`mb-2`}>Contact information</p>
                            {!Object.keys(user).length ?
                                <p className={`text-secondary mb-2`}>Already have an account?
                                    <Link to={`/login`} className={`mainColor ml-2`}>Log in</Link>
                                </p>
                                : null}

                        </div>
                        <input type={`text`} placeholder={`Email`} className={`p-2 form-control`} value={email}
                               disabled={!!Object.keys(user).length}
                               onChange={(e) => {
                                   dispatch({
                                       type: 'CHANGE_ORDER',
                                       payload: {
                                           email: e.target.value
                                       }
                                   })
                               }}/>
                        {!Object.keys(user).length ? (
                            <div className={`d-flex mt-2`}>
                                <input type={`checkbox`} id={`mailCheckbox`}/>
                                <label htmlFor={`mailCheckbox`} className={`font-14 ml-2`}>Email me with news and
                                    offers</label>
                            </div>
                        ) : null}

                        <p className={`mb-2 mt-4`}>Shipping address</p>
                        <div className={`d-flex`}>
                            <input type={`text`} placeholder={`First name`} className={`form-control p-2 mr-2`}
                                   value={first_name} disabled={!!Object.keys(user).length}
                                   onChange={(e) => {
                                       dispatch({
                                           type: 'CHANGE_ORDER',
                                           payload: {
                                               first_name: e.target.value
                                           }
                                       })
                                   }}/>
                            <input type={`text`} placeholder={`Last name`} className={`form-control p-2 ml-2`}
                                   value={last_name} disabled={!!Object.keys(user).length}
                                   onChange={(e) => {
                                       dispatch({
                                           type: 'CHANGE_ORDER',
                                           payload: {
                                               last_name: e.target.value
                                           }
                                       })
                                   }}/>
                        </div>

                        <input type={`text`} placeholder={`Address`} className={`form-control p-2 mt-3`} value={address}
                               onChange={(e) => {
                                   dispatch({
                                       type: 'CHANGE_ORDER',
                                       payload: {
                                           address: e.target.value
                                       }
                                   })
                               }}/>
                        <input type={`text`} placeholder={`Apt, suite, etc.`} className={`form-control p-2 mt-3`}
                               value={apartment}
                               onChange={(e) => {
                                   dispatch({
                                       type: 'CHANGE_ORDER',
                                       payload: {
                                           apartment: e.target.value
                                       }
                                   })
                               }}/>

                        <div className={`d-flex mt-3`}>
                            <input type={`text`} placeholder={`City`} className={`form-control p-2`} value={city}
                                   onChange={(e) => {
                                       dispatch({
                                           type: 'CHANGE_ORDER',
                                           payload: {
                                               city: e.target.value
                                           }
                                       })
                                   }}/>
                            <RegionDropdown
                                country={country}
                                value={state}
                                id={'state'}
                                blankOptionLabel={`State`}
                                defaultOptionLabel={`State`}
                                classes={`form-control p-2 mx-3`}
                                onChange={(e) => {
                                    dispatch({
                                        type: 'CHANGE_ORDER',
                                        payload: {
                                            state: e
                                        }
                                    })
                                }}
                            />

                            <input type={`text`} placeholder={`Zip`} className={`form-control p-2`} value={zip}
                                   onChange={(e) => {
                                       dispatch({
                                           type: 'CHANGE_ORDER',
                                           payload: {
                                               zip: e.target.value
                                           }
                                       })
                                   }}/>
                        </div>

                        <CountryDropdown
                            value={country} id={'country'}
                            classes={`p-2 form-control mt-3`}
                            defaultOptionLabel={`Country`}
                            onChange={(e) => {
                                dispatch({
                                    type: 'CHANGE_ORDER',
                                    payload: {
                                        country: e
                                    }
                                })
                            }}
                        />


                        <input type={`number`} placeholder={`Phone`} className={`form-control p-2 mt-3`} value={phone}
                               onChange={(e) => {
                                   dispatch({
                                       type: 'CHANGE_ORDER',
                                       payload: {
                                           phone: e.target.value
                                       }
                                   })
                               }}/>

                        <div className={`d-md-flex justify-content-between align-items-center mt-5`}>
                            <Link
                                className={`text-decoration-none mainColor fw-bold text-nowrap ${styles.removeBlueLink}`}
                                to={'/'}>
                                <span className={`mainColor mr-2`}>
                                    <i className="fas fa-chevron-left"></i>
                                </span>
                                Return to cart</Link>

                            <button
                                className={`bg-black text-white btn p-3 radius-7 fw-bold text-decoration-none text-nowrap mt-3 mt-md-0`}
                                disabled={!first_name || !last_name || !address || !apartment || !state || !city || !country || !phone}
                                onClick={(e) => {
                                    continueToShipping(e)
                                }}>
                                Continue to shipping
                            </button>

                        </div>

                    </form>
                </div>

            </div>

            <Order/>
            <NotificationContainer/>


        </div>
    )

}

export default withRouter(CheckoutInformation)
