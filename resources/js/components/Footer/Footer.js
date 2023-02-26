import logo from "../../../../public/images/logo.png"

function Footer(props) {
    return (
        <div className={`bg-dark text-white ${props.fixed ? 'fixed-bottom' : ''}`}>
            <div className={`container px-lg-0 py-5`}>
                <div className={`row`}>
                    <div className={`col-12 col-md-6 col-lg-3`}>
                        <h5 className={`fw-bold mb-4`}>Shop</h5>
                        <p>The Kessa</p>
                        <p>Blog</p>
                        <p>Reviews</p>
                    </div>
                    <div className={`col-12 col-md-6 col-lg-3`}>
                        <h5 className={`fw-bold mb-4`}>About</h5>
                        <p>Who we are</p>
                        <p>Our Mission</p>
                        <p>Ingredients</p>

                        <p>FAQ</p>
                    </div>
                    <div className={`col-12 col-md-6 col-lg-3`}>
                        <h5 className={`fw-bold mb-4`}>Company</h5>
                        <p>Contact us</p>
                        <p>Careers</p>
                    </div>
                    <div className={`col-12 col-md-6 col-lg-3`}>
                        <h5 className={`fw-bold mb-4`}>Follow us on</h5>
                        <a href={`https://www.facebook.com/thekessa`} className={`text-decoration-none text-white`}>
                            <i className="fa-brands fa-facebook-f fa-lg"/>
                        </a>
                        <span className={`ml-2`}>
                        <i className="fa-brands fa-twitter fa-lg"/>
                    </span>
                        <a href={`https://www.instagram.com/thekessa`}
                           className={`text-decoration-none text-white ml-2`}>

                            <i className="fa-brands fa-square-instagram fa-lg"/>
                        </a>
                        <span className={`ml-2`}>
                        <i className="fa-brands fa-linkedin-in fa-lg"/>
                    </span>
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
                            <p>© {new Date().getFullYear()} , The Kessa. All rights reserved.</p>
                            <div className={`d-lg-flex`}>
                                <p>Terms & Conditions</p>
                                <p className={`mx-lg-5`}>Privacy Policy</p>
                                <p>Cookie Statement</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer
