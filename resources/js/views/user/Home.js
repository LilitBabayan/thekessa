import Header from "../../components/Header/Header";
import Background1 from "../../../../public/images/home_1.png"
import Background2 from "../../../../public/images/home_2.png"
import Background3 from "../../../../public/images/home_3.png"
import Background4 from "../../../../public/images/home_4.png"
import Background5 from "../../../../public/images/home_5.png"
import Background6 from "../../../../public/images/home_6.png"
import styles from "./UserSideStyles.module.scss"
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <div>
            <Header/>
            <div className={`container`}>
                <div className={`position-relative`}>
                    <img src={Background1} className={`${styles.expandedImg} img-fluid`} alt={Background1}/>
                    <div className={`${styles.homeAbsolute}`}>
                        <h1 className={`text-white fw-bolder`}>Meet your routine, reinvented.</h1>
                        <h5 className={`text-white lh-lg mt-3 fw-light`}>The only plastic-free and clean way to rub the
                            scrub on your body
                            you've used your whole
                            life.</h5>

                        <button className={`btn bg-white border border-dark px-5 py-3 fw-bold mt-5`}>Shop now</button>
                    </div>
                </div>

                <div className={`row `}>
                    <div className={`col-5 d-flex flex-column justify-content-center px-4`}>
                        <h3 className={`fw-bolder`}>How to use</h3>

                        <h5 className={`fw-bolder mainColor mt-4`}>Step 1</h5>
                        <p className={`mt-2`}>Take a hot shower/bath at least 5min.</p>

                        <h5 className={`fw-bolder mainColor mt-3`}>Step 2</h5>
                        <p className={`mt-2`}>Wet the glove and squeeze out excess water.</p>

                        <h5 className={`fw-bolder mainColor mt-3`}>Step 3</h5>
                        <p className={`mt-2 w-75`}>Move out of the water and scrub using long, upward strokes with palm
                            on your hands.</p>

                    </div>

                    <div className={`col-7 text-end`}>
                        <img src={Background2} alt={Background2} className={`img-fluid w-100`}/>
                    </div>
                </div>


                <div className={`row  flex justify-content-between`}>
                    <div className={`col-5`}>
                        <img src={Background3} alt={Background2} className={`img-fluid w-100`}/>
                        <div className={`flex justify-content-between mt-3`}>
                            <h5 className={`fw-bold`}>The Kessa scrub</h5>
                            <h5 className={`fw-bold`}>10,000 AMD</h5>
                        </div>
                    </div>

                    <div className={`col-5`}>
                        <img src={Background4} alt={Background2} className={`img-fluid w-100`}/>
                        <div className={`flex justify-content-between mt-3`}>
                            <h5 className={`fw-bold`}>The Kessa scrub combo</h5>
                            <h5 className={`fw-bold`}>12,000 AMD</h5>
                        </div>
                    </div>
                </div>

                <div className={`position-relative`}>
                    <img src={Background5} className={`${styles.expandedImg} img-fluid`} alt={Background5}/>
                </div>

                <div className={`text-center`}>
                    <img src={Background6} className={`img-fluid`} alt={Background6}/>
                </div>
            </div>

            <Footer/>
        </div>

    )
}

export default Home
