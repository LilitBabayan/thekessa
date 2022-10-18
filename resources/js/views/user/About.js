import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About1 from "../../../../public/images/about_1.png"
import About2 from "../../../../public/images/about_2.png"
import About3 from "../../../../public/images/about_3.png"
import styles from "./UserSideStyles.module.scss";

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

                    <div className={`position-relative`}>
                        <img src={About2} className={`${styles.expandedImg} img-fluid`} alt={About2}/>
                    </div>
                    <div className={`position-relative`}>
                        <img src={About3} className={`${styles.expandedImg} img-fluid`} alt={About3}/>
                    </div>

                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default About
