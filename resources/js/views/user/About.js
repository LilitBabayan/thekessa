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

function About() {
    return (
        <div>
            <Header/>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-6`}>
                        <img src={About1} className={`img-fluid`} alt={About1}/>
                    </div>
                    <div className={`col-6`}>
                        <div className={`w-75 pl-4`}>
                            <p>My journey to use less single-use plastic began when I became a new mom. I was horrified
                                to
                                learn that all the plastic I was throwing away was contaminating our water supply and
                                generating hundreds of microplastics in the water and food I was feeding my baby. I
                                wanted
                                to do my part to help, but it was impossible to find household products like window
                                cleaner,
                                lotion, and toothpaste that didn’t come packaged in plastic. From there, The Kessa was
                                born.</p>
                            <h5 className={`mt-3`}>Our mission is simple: make it easy to be eco with innovative
                                products in
                                reusable packaging
                                that are convenient, effective and affordable.</h5>
                            <p className={`mt-3`}>I hope you’ll join us as we clean up the planet!</p>
                            <p className={`mt-3`}>Elen Mkrtichyan, CEO + Co-Founder</p>
                        </div>
                    </div>

                    <div className={`col-12 text-center my-5`}>
                        <h4 className={`fw-bolder`}>Our Mission</h4>
                        <p className={`col-4 mx-auto`}>
                            Join us and millions of others on our journey to reduce plastic waste. Here’s how and why we
                            do it—every little bit counts.
                        </p>
                        <Link to={`/shop`}
                            className={`btn bg-white border-2 radius-12 px-5 py-3 fw-bold mt-5`}>Shop now</Link>

                    </div>

                </div>

            </div>
                <div className={`d-flex align-items-center justify-content-center position-relative my-5`}>
                    <div className={`w-35`}>
                        <img src={Ingredient1} className={`img-fluid ${styles.ingredient1}`} alt={Ingredient1}/>
                        <img src={Ingredient2} className={`img-fluid ${styles.ingredient2}`} alt={Ingredient2}/>
                        <img src={Ingredient3} className={`img-fluid ${styles.ingredient3}`} alt={Ingredient3}/>
                        <img src={Ingredient4} className={`img-fluid ${styles.ingredient4}`} alt={Ingredient4}/>
                    </div>
                    <div className={`w-35 py-5 my-3`}>
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

                <div className={`my-5 py-5 text-center position-relative`}>
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
