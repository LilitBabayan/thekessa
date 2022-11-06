import logo from "../../../../public/images/logo.png"
import {Link} from "react-router-dom";
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import Order from "./Order";


function CheckoutInformation() {
    const windowWidth = window.innerWidth >= 992

    return (
        <div className={`d-lg-flex`}>
            <div className={`p-5 ${windowWidth ? 'w-50' : 'w-100'}`}>
                <div className={`${windowWidth ? 'w-60' : 'w-100'} mx-auto`}>
                    <div className={`d-flex justify-content-center mt-5`}>
                        <img src={logo} alt={logo} className={`img-fluid`}/>
                    </div>
                    <div className={`d-flex justify-content-center align-items-center mt-4`}>
                        <Link to="/" className={`text-decoration-none text-black`}>
                            Information
                        </Link>
                        <span className={`mx-3`}>
                       <i className="fas fa-chevron-right"></i>
                    </span>

                        <Link to="/checkout/shipping" className={`text-decoration-none text-secondary`}>
                            Shipping
                        </Link>
                        <span className={`mx-3 text-secondary`}>
                        <i className="fas fa-chevron-right"></i>
                    </span>

                        <Link to="/" className={`text-decoration-none text-secondary`}>
                            Payment
                        </Link>

                    </div>

                    <form>
                        <div className={`d-md-flex justify-content-between mt-5`}>
                            <p className={`mb-2`}>Contact information</p>
                            <p className={`text-secondary mb-2`}>Already have an account?
                                <Link to={`/sign_in`} className={`mainColor ml-2`}>Log in</Link>
                            </p>
                        </div>
                        <input type={`text`} placeholder={`Email`} className={`p-2 form-control`}/>
                        <div className={`d-flex mt-2`}>
                            <input type={`checkbox`}/>
                            <span className={`font-14 ml-2`}>Email me with news and offers</span>
                        </div>
                        <p className={`mb-2 mt-4`}>Shipping address</p>
                        <div className={`d-flex`}>
                            <input type={`text`} placeholder={`First name`} className={`form-control p-2 mr-2`}/>
                            <input type={`text`} placeholder={`Last name`} className={`form-control p-2 ml-2`}/>
                        </div>

                        <input type={`text`} placeholder={`Address`} className={`form-control p-2 mt-3`}/>
                        <input type={`text`} placeholder={`Apt, suite, etc.`} className={`form-control p-2 mt-3`}/>

                        <div className={`d-flex mt-3`}>
                            <input type={`text`} placeholder={`City`} className={`form-control p-2`}/>

                            <RegionDropdown
                                country={''}
                                value={''}
                                id={'state'}
                                blankOptionLabel={`State`}
                                defaultOptionLabel={`State`}
                                classes={`form-control p-2 mx-3`}
                            />

                            <input type={`text`} placeholder={`Zip`} className={`form-control p-2`}/>
                        </div>

                        <CountryDropdown
                            value={``} id={'country'}
                            classes={`p-2 form-control mt-3`}
                            defaultOptionLabel={`Country`}
                        />


                        <input type={`text`} placeholder={`Phone`} className={`form-control p-2 mt-3`}/>

                        <div className={`d-md-flex justify-content-between align-items-center mt-5`}>
                            <Link className={`text-decoration-none mainColor fw-bold text-nowrap`}>
                                <span className={`mainColor mr-2`}>
                                    <i className="fas fa-chevron-left"></i>
                                </span>
                                Return to cart</Link>

                            <Link
                                className={`bg-black text-white btn p-3 radius-7 fw-bold text-decoration-none text-nowrap mt-3 mt-md-0`}>
                                Continue to shipping
                            </Link>

                        </div>

                    </form>
                </div>

            </div>

            <Order/>


        </div>
    )

}

export default CheckoutInformation
