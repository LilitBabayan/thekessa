import logo from "../../../../public/images/logo.png"
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <div className={`bg-dark text-white ${props.fixed ? 'fixed-bottom' : ''}`}>
            <div className={`container px-lg-0 py-5`}>
                <div className={`row`}>
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <h5 className={`fw-bold mb-4`}>Shop</h5>
                        <Link to={`/shop`} className={`d-block text-decoration-none text-white my-3`}>The Kessa</Link>
                        <Link to={`/shop`} className={`d-block text-decoration-none text-white my-3`}>Reviews</Link>
                    </div>
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <h5 className={`fw-bold mb-4`}>About</h5>
                        <Link to={`/about`} className={`d-block text-decoration-none text-white my-3`}>Who we are</Link>
                        <Link to={`/about`} className={`d-block text-decoration-none text-white my-3`}>Our
                            Mission</Link>
                        <Link to={`/ingredients`}
                              className={`d-block text-decoration-none text-white my-3`}>Ingredients</Link>
                    </div>

                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <h5 className={`fw-bold mb-4`}>Follow us on</h5>
                        <a href={`https://www.facebook.com/thekessa`}
                           className={`text-decoration-none text-white my-3`}>
                            <i className="fa-brands fa-facebook-f fa-lg"/>
                        </a>

                        <a href={`https://www.instagram.com/thekessa`}
                           className={`text-decoration-none text-white ml-4 my-3`}>
                            <i className="fa-brands fa-square-instagram fa-lg"/>
                        </a>

                    </div>
                </div>

            </div>
            <div className={`border-top border-lightGray`}>
                <div className={`container py-3`}>
                    <div className={`row d-flex align-items-center`}>
                        <div className={`col-12 col-lg-4 px-0`}>
                            <img src={logo} alt={logo} className={`img-fluid`}/>
                        </div>
                        <div className={`col-12 col-lg-8 d-lg-flex justify-content-between align-items-center`}>
                            <p className={`mb-0`}>© {new Date().getFullYear()} , The Kessa. All rights reserved.</p>
                            <div className={`d-lg-flex`}>
                                <Link to={`/terms-conditions`} className={`mx-3 text-decoration-none text-white`}>Terms
                                    & Conditions</Link>
                                <Link to={`/privacy-policy`} className={`mx-3 text-decoration-none text-white`}>Privacy
                                    Policy</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer
