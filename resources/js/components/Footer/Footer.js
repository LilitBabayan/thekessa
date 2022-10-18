import logo from "../../../../public/images/logo.png"

function Footer() {
    return (
        <div className={`bg-dark text-white p-5 container-fluid`}>
            <div className={`row`}>
                <div className={`col-3`}>
                    <h5 className={`fw-bold mb-4`}>Shop</h5>
                    <p>The Kessa</p>
                    <p>Blog</p>
                    <p>Reviews</p>
                </div>
                <div className={`col-3`}>
                    <h5 className={`fw-bold mb-4`}>About</h5>
                    <p>Who we are</p>
                    <p>Our Mission</p>
                    <p>Ingredients</p>
                    <p>FAQ</p>
                </div>
                <div className={`col-3`}>
                    <h5 className={`fw-bold mb-4`}>Company</h5>
                    <p>Contact us</p>
                    <p>Careers</p>
                </div>
                <div className={`col-3`}>
                    <h5 className={`fw-bold mb-4`}>Follow us on</h5>
                    <span>
                        <i className="fa-brands fa-facebook-f fa-lg"/>
                    </span>
                    <span className={`ml-2`}>
                        <i className="fa-brands fa-twitter fa-lg"/>
                    </span>
                    <span className={`ml-2`}>
                        <i className="fa-brands fa-square-instagram fa-lg"/>
                    </span>
                    <span className={`ml-2`}>
                        <i className="fa-brands fa-linkedin-in fa-lg"/>
                    </span>
                </div>
            </div>
            <div className={`row border-top border-gray border-1`}>
                <div className={`col-4`}>
                    <img src={logo} alt={logo} className={`img-fluid`}/>
                </div>
                <div className={`col-6 flex justify-content-between`}>
                    <p>© 2022, The Kessa. All rights reserved.</p>
                    <div className={`flex`}>
                        <p>Terms & Conditions</p>
                        <p className={`ml-3`}>Privacy Policy</p>
                        <p className={`ml-3`}>Cookie Statement</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
