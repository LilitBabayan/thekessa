import Header from "../../components/Header/Header";
import Background1 from "../../../../public/images/home_1.png"
import Background2 from "../../../../public/images/home_2.png"
import Background3 from "../../../../public/images/home_3.png"
import Background4 from "../../../../public/images/home_4.png"
import Background5 from "../../../../public/images/home_5.png"
import styles from "./UserSideStyles.module.scss"
import Footer from "../../components/Footer/Footer";
import {Link, withRouter} from "react-router-dom";

function Home() {
    const windowWidth = window.innerWidth >= 992

    return (
        <div>
            <Header/>
            <div>
                <div className={`position-relative`}>
                    <img src={Background1} className={`img-fluid w-100 mw-100`} alt={Background1}/>

                    <div className={`container`}>
                        <div className={`${styles.homeAbsolute} ${windowWidth ? 'w-30' : 'w-50'}`}>
                            <p className={`text-white weight-800 ${windowWidth ? 'display-4' : 'mb-0'} `}>Meet your
                                routine,
                                reinvented.</p>
                            <h5 className={`text-white fw-light ${windowWidth ? 'lh-lg mt-3' : 'font-12 mt-1'}`}>The
                                only plastic-free and clean way to rub
                                the
                                scrub on your body
                                you've used your whole
                                life.</h5>
                            <Link
                                className={`btn text-decoration-none radius-12 bg-white border-2 fw-bold ${windowWidth ? 'px-5 py-3  mt-5' : ''}`}
                                to={`/shop`}>Shop now
                            </Link>
                        </div>

                    </div>
                </div>

                <div className={`container`}>
                    <div className={`row py-5 my-md-5`}>
                        <div className={`col-12 col-md-5 d-flex flex-column justify-content-center px-4`}>
                            <h3 className={`weight-800`}>How to use</h3>

                            <h5 className={`fw-bolder mainColor mt-4`}>Step 1</h5>
                            <p className={`mt-2`}>Take a hot shower/bath at least 5min.</p>

                            <h5 className={`fw-bolder mainColor mt-3`}>Step 2</h5>
                            <p className={`mt-2`}>Wet the glove and squeeze out excess water.</p>

                            <h5 className={`fw-bolder mainColor mt-3`}>Step 3</h5>
                            <p className={`mt-2 w-75`}>Move out of the water and scrub using long, upward strokes with
                                palm
                                on your hands.</p>

                        </div>

                        <div className={`col-12 col-md-7 text-end`}>
                            <img src={Background2} alt={Background2} className={`img-fluid w-100`}/>
                        </div>
                    </div>

                    <div className={`row flex justify-content-between py-md-5 my-md-5`}>
                        <div className={`col-12 col-md-5`}>
                            <Link to={`/shop`} className={`text-decoration-none`}>
                                <img src={Background3} alt={Background2} className={`img-fluid w-100`}/>
                                <div className={`flex justify-content-between mt-3`}>
                                    <h4 className={`fw-bold text-black`}>The Kessa scrub</h4>
                                    <h5 className={`fw-bold text-nowrap text-dark-gray`}>9,990 AMD</h5>
                                </div>
                            </Link>
                        </div>

                        <div className={`col-12 col-md-5 mt-5 mt-md-0`}>
                            <Link to={`/shop`} className={`text-decoration-none`}>
                                <img src={Background4} alt={Background2} className={`img-fluid w-100`}/>
                                <div className={`flex justify-content-between mt-3`}>
                                    <h4 className={`fw-bold text-black`}>The Kessa scrub combo</h4>
                                    <h5 className={`fw-bold text-nowrap text-dark-gray`}>12,990 AMD</h5>
                                </div>
                            </Link>
                        </div>
                    </div>


                </div>


                <div className={`position-relative pt-5 mt-0 mt-md-5`}>
                    <img src={Background5} className={`w-100 mw-100 img-fluid`} alt={Background5}/>
                </div>

            </div>
            <Footer/>
        </div>

    )
}

export default withRouter(Home)
