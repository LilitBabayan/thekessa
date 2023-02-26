import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, {useEffect, useState} from 'react';
import {Load} from "../../components/Loading/Load";
import StarRatings from "react-star-ratings/build/star-ratings";
import {numberWithCommas} from "./UserHelpers";
import {Link, withRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import {getProduct, getProducts, reviewProduct} from "./ProductHelpers";


function Shop() {

    const [products, setProducts] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [reviewKey, setReviewKey] = useState(Math.random());

    const user = useSelector(function (state) {
        return state.user
    })

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data.data.products)
            setShowLoading(false)
        })
    }, [])

    function setRating(rate, productId) {
        let data = {
            rate: rate,
        }
        reviewProduct(productId, data).then((response) => {
            if (response.data.success) {
                getProduct(productId).then((res) => {
                    if (res.data.product) {
                        let found = products.find(elem => elem.id === productId)
                        if (found) {
                            found.avgrating = res.data.product.avgrating
                            found.ratings_count = res.data.product.ratings_count
                            setReviewKey(Math.random())
                        }
                    }
                })
            }
        })
    }

    return (
        <div>
            <Header/>
            <div className={`container mb-5`}>
                {!showLoading ? (
                    <div className={`row flex justify-content-between`}>
                        {products.map((product, index) => {
                            return (
                                <div className={`col-12 col-md-5 my-5`} key={index}>
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.images[0].url}
                                             className={`img-fluid w-100`}
                                             alt={product.images[0].url}/>
                                    </Link>
                                    <div className={`flex justify-content-between mt-4`}>
                                        <h4 className={`fw-bold`}>{product.name}</h4>
                                        <h5 className={`fw-bold text-nowrap`}>{numberWithCommas(product.price)} AMD</h5>
                                    </div>

                                    {user && Object.keys(user).length ? (
                                        <div className={`d-flex align-items-end`} key={reviewKey}>
                                            <StarRatings
                                                rating={product.avgrating ? product.avgrating : 0}
                                                starRatedColor="black"
                                                starEmptyColor="lightGray"
                                                starHoverColor="black"
                                                changeRating={(e) => setRating(e, product.id)}
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension="25px"
                                            />

                                            <u className={`ms-3`}>{product.ratings_count} reviews</u>
                                        </div>

                                    ) : null}

                                </div>
                            )
                        })
                        }
                    </div>
                ) : (
                    <div>
                        <Load/>
                    </div>
                )}


            </div>


            <Footer/>
        </div>
    )
}

export default withRouter(Shop)
