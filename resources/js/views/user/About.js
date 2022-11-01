import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About1 from "../../../../public/images/about_1.png"
import About2 from "../../../../public/images/about_2.png"
import About3 from "../../../../public/images/about_3.png"
import styles from "./UserSideStyles.module.scss";
import Water1 from "../../../../public/images/water_bg_1.png"
import Water2 from "../../../../public/images/water_bg_2.png"
import Water3 from "../../../../public/images/water_bg_3.png"
import Water4 from "../../../../public/images/water_bg_4.png"
import Water5 from "../../../../public/images/water_bg_5.png"
import Water6 from "../../../../public/images/water_bg_6.png"
import Ingredient1 from "../../../../public/images/ingredients_2.png"
import Ingredient2 from "../../../../public/images/ingredients_5.png"
import Ingredient3 from "../../../../public/images/ingredients_3.png"
import Ingredient4 from "../../../../public/images/ingredients_3.png"
import About4 from "../../../../public/images/about_4.png"

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
                            <p className={`mt-3`}>Lidia, CEO + Co-Founder</p>
                        </div>
                    </div>

                    <div className={`col-12 text-center my-5`}>
                        <h4 className={`fw-bolder`}>Our Mission</h4>
                        <p className={``}>
                            Join us and millions of others on our journey to reduce plastic waste. Here’s how and why we
                            do it—every little bit counts.
                        </p>
                        <button className={`btn bg-white border border-dark px-5 py-3 fw-bold mt-5`}>Shop now</button>

                    </div>

                </div>

            </div>
            <div className={`position-relative`}>
                <img src={About2} className={`img-fluid w-100 mw-100`} alt={About2}/>
            </div>
            <div className={`position-relative`}>
                <img src={About3} className={`img-fluid w-100 mw-100`} alt={About3}/>
                <div>
                    <img src={Water1} className={`img-fluid ${styles.water1}`} alt={Water1}/>
                    <img src={Water2} className={`img-fluid ${styles.water2}`} alt={Water2}/>
                    <img src={Water3} className={`img-fluid ${styles.water3}`} alt={Water3}/>
                    <img src={Water4} className={`img-fluid ${styles.water4}`} alt={Water4}/>
                    <img src={Water5} className={`img-fluid ${styles.water5}`} alt={Water5}/>
                    <img src={Water6} className={`img-fluid ${styles.water6}`} alt={Water6}/>
                    <img src={Water1} className={`img-fluid ${styles.water7}`} alt={Water1 + 7}/>

                </div>


                <div className={`container text-center text-white `}>
                    <div className={styles.waterText}>
                        <h1 className={`fw-bolder mb-0`}>We're eating</h1>
                        <h1 className={`fw-bolder mb-0`}>+</h1>
                        <h1 className={`fw-bolder mb-0`}>drinking plastic</h1>

                        <p className={`my-5`}>We’re eating a credit card’s worth of plastic each week and 90% of the
                            water we drink and the food we eat contain microplastics.</p>


                        <h1 className={`fw-bolder mb-0 pt-5`}>We're</h1>
                        <h1 className={`fw-bolder mb-0`}>damaging our</h1>
                        <h1 className={`fw-bolder mb-0`}>wildlife</h1>

                        <p className={`my-5`}>Plastic has been found in 100% of marine turtles, 59% of whales, 36% of
                            seals and 40% of seabird species examined.</p>

                        <h1 className={`fw-bolder mb-0 pt-5`}>We're polluting</h1>
                        <h1 className={`fw-bolder mb-0`}>our oceans</h1>

                        <p className={`my-5`}>By 2050, scientists predict that the ocean will contain more plastic by
                            weight than fish.</p>
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
                    <h2 className={`fw-bold`}>We're done with plastic.</h2>
                    <h6 className={`fw-bold my-3`}>Want to support the plastic-free journey?</h6>

                    <button className={`btn radius-7 border border-dark px-4 py-3 fw-bold mt-2`}>
                        Shop now
                    </button>

                    <img src={About4} className={styles.about4} alt={About4}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About
