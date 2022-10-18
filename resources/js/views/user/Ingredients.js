import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Ingredients1 from "../../../../public/images/ingredients_1.png"
import Ingredients2 from "../../../../public/images/ingredients_2.png"
import Ingredients3 from "../../../../public/images/ingredients_3.png"
import Ingredients4 from "../../../../public/images/ingredients_4.png"
import Ingredients5 from "../../../../public/images/ingredients_5.png"

function Ingredients() {
    return (
        <div>
            <Header/>
            <div className={`bg-pink text-center`}>
                <img src={Ingredients1} className={`img-fluid mt-5`} alt={Ingredients1}/>
            </div>

            <div className={`d-flex justify-content-center my-5 text-center`}>
                <div className={`w-25`}>
                    <h5 className={`mainColor fw-bold`}>Our ingredients</h5>

                    <h2 className={`fw-bolder my-3`}>Everything You Need, Nothing You Don't</h2>
                    <p>Our freshly-pressed scrubs are 100% gluten-free, vegan, and cruelty-free — without any harsh
                        chemicals. Here's what we put inside to give you a <span className={`fw-bold`}>healthier, brighter skin.</span>
                    </p>
                </div>
            </div>

            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-6 px-5`}>
                        <div className={`flex align-items-center justify-content-center px-4`}>
                            <img src={Ingredients2} className={`img-fluid ingredientWidth`} alt={Ingredients2}/>
                            <div>
                                <h5 className={`fw-bold`}>The Kessa box</h5>
                                <p className={`mt-3`}>The word "quartz" is derived from the German word "Quarz".</p>
                            </div>
                        </div>
                    </div>

                    <div className={`col-6 px-5`}>
                        <div className={`flex align-items-center justify-content-center px-4`}>
                            <img src={Ingredients3} className={`img-fluid ingredientWidth`} alt={Ingredients3}/>
                            <div>
                                <h5 className={`fw-bold`}>Scrub balls</h5>
                                <p className={`mt-3`}>The word "quartz" is derived from the German word "Quarz".</p>
                            </div>
                        </div>
                    </div>

                    <div className={`col-6 px-5`}>
                        <div className={`flex align-items-center justify-content-center px-4`}>
                            <img src={Ingredients4} className={`img-fluid ingredientWidth`} alt={Ingredients4}/>
                            <div>
                                <h5 className={`fw-bold`}>Roze quarts</h5>
                                <p className={`mt-3`}>The word "quartz" is derived from the German word "Quarz".</p>
                            </div>
                        </div>
                    </div>

                    <div className={`col-6 px-5`}>
                        <div className={`flex align-items-center justify-content-center px-4`}>
                            <img src={Ingredients5} className={`img-fluid ingredientWidth`} alt={Ingredients5}/>
                            <div>
                                <h5 className={`fw-bold`}>Body/Face gloves</h5>
                                <p className={`mt-3`}>Body/Face gloves for exfoliating.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    )

}

export default Ingredients
