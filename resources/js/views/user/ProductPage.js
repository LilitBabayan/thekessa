import {withRouter} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import {Load} from "../../components/Loading/Load";
import SimpleImageSlider from "react-simple-image-slider";
import StarRatings from "react-star-ratings/build/star-ratings";
import {stringToArray} from "./userHelpers";


function ProductPage(props) {
    const [productId, setProductId] = useState(props.match.params.id);
    const [product, setProduct] = useState({});
    const [consistency, setConsistency] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [rating, setRating] = useState(4);

    useEffect(() => {
        getProduct().then((data) => {
            setProduct(data.data.product)
            setShowLoading(false)
        })
    }, [])

    function getProduct() {
        return new Promise((resolve, reject) => {
            axios.get(api_routes.user.product(productId)).then((response) => {
                return response;
            }).then(json => {
                resolve(json);
            }).catch(error => {
                reject(error)
            });
        });
    }


    return (
        <div>
            <Header/>
            <div className={`container-fluid`}>
                {!showLoading ? (
                    <div className={`row`}>
                        <div className={`col-6 p-0`}>
                            <SimpleImageSlider
                                width={850}
                                height={850}
                                images={product.images}
                                showBullets={true}
                                showNavs={true}
                            />
                        </div>
                        <div className={`col-6 px-5 py-5`}>
                            <StarRatings
                                rating={rating}
                                starRatedColor="black"
                                starEmptyColor="lightGray"
                                starHoverColor="black"
                                changeRating={setRating}
                                numberOfStars={5}
                                name='rating'
                                starDimension="20px"
                            />

                            <h5 className={`fw-bold my-4`}>Overview</h5>
                            <p className={`w-50`}>{product.description}</p>

                            <h5 className={`fw-bold my-4`}>Includes</h5>


                        </div>


                    </div>
                ) : (
                    <div>
                        <Load/>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default withRouter(ProductPage)
