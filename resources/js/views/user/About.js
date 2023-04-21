import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About1 from "../../../../public/images/about_1.png"
import styles from "./UserSideStyles.module.scss";
import Ingredient1 from "../../../../public/images/ingredients_2.png"
import Ingredient2 from "../../../../public/images/ingredients_5.png"
import Ingredient3 from "../../../../public/images/ingredients_3.png"
import Ingredient4 from "../../../../public/images/ingredients_3.png"
import About4 from "../../../../public/images/about_4.png"
import {Link, withRouter} from "react-router-dom";
import {useState} from "react";

function About() {
    const [mobileWidth, setMobileWidth] = useState(window.innerWidth <= 768);

    return (
        <div>
            <Header/>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-12 col-md-6`}>
                        <img src={About1} className={`img-fluid`} alt={About1}/>
                    </div>
                    <div className={`col-12 col-md-6 d-flex align-items-center`}>
                        <div className={!mobileWidth ? 'w-75 pl-5' : ''}>
                            <p>As a beauty enthusiast, I was acutely aware of the challenges that healthcare
                                professionals
                                faced when it came to finding comfortable, high-quality scrubs that were both affordable
                                and sustainable. I saw firsthand how medical scrubs made from synthetic materials
                                could cause skin irritation, and how they contributed to the growing problem of textile
                                waste in the healthcare industry.

                                Determined to make a difference, I set out to create a company that would address
                                these issues head-on. I was inspired by the idea of creating scrubs that were not
                                only comfortable and functional but also environmentally friendly and socially
                                responsible.</p>

                            <p className={`mt-5`}>Lidia Mkrtichyan, CEO & Founder</p>
                        </div>
                    </div>

                    <div className={`col-12 text-center my-5`}>
                        <h4 className={`fw-bolder`}>Our Mission</h4>
                        <p className={`col-12 col-md-4 mx-auto`}>
                            Join us and millions of others on our journey to reduce plastic waste. Here’s how and why we
                            do it—every little bit counts.
                        </p>
                        <Link to={`/shop`}
                              className={`btn bg-white border-2 radius-12 px-5 py-3 fw-bold mt-5`}>Shop now</Link>

                    </div>

                </div>

            </div>
            <div
                className={`d-md-flex align-items-center justify-content-center ${!mobileWidth ? 'position-relative' : ''} my-5`}>
                <div className={mobileWidth ? 'w-100 position-relative' : 'w-35'}>
                    <img src={Ingredient1} className={`img-fluid ${styles.ingredient1}`} alt={Ingredient1}/>
                    <img src={Ingredient2} className={`img-fluid ${styles.ingredient2}`} alt={Ingredient2}/>
                    <img src={Ingredient3} className={`img-fluid ${styles.ingredient3}`} alt={Ingredient3}/>
                    <img src={Ingredient4} className={`img-fluid ${styles.ingredient4}`} alt={Ingredient4}/>
                </div>
                <div className={`${mobileWidth ? 'w-100 px-2' : 'w-35  py-5 my-3'}`}>
                    <h2 className={`fw-bolder mb-4`}>Our impact</h2>
                    <h5>
                        Our products have helped to eliminate over 1 billion single-use plastic bottles from
                        landfills and oceans since 2022.
                    </h5>
                    <h5 className={`my-5`}>
                        Instead of plastic poly-mailers, we ship with kraft envelopes padded with post-consumer
                        recycled newspapers.
                    </h5>
                    <h5>
                        Our boxes are made of fully recyclable corrugated cardboard and sealed with a kiss —or as
                        others call it, paper tape.
                    </h5>
                </div>

            </div>

            <div className={`my-2 my-md-5 py-2 py-md-5 text-center position-relative`}>
                <h1 className={`fw-bold mt-5`}>We're done with plastic.</h1>
                <h5 className={`fw-bold my-3`}>Want to support the plastic-free journey?</h5>

                <Link to={`/shop`}
                      className={`btn bg-white border-2 radius-12 px-5 py-3 fw-bold mt-5`}>Shop now</Link>

                <img src={About4} className={styles.about4} alt={About4}/>
            </div>
            <Footer/>
        </div>
    )
}

export default withRouter(About)
