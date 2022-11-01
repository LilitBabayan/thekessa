import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, {useEffect, useState} from 'react';
import {Load} from "../../components/Loading/Load";
import StarRatings from "react-star-ratings/build/star-ratings";
import {numberWithCommas} from "./userHelpers";
import {Link} from "react-router-dom";


function Shop() {

    const [products, setProducts] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [rating, setRating] = useState(4.3);
    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data.data.products)
            setShowLoading(false)
        })
    }, [])


    function getProducts() {
        return new Promise((resolve, reject) => {
            axios.get(api_routes.user.products()).then((response) => {
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
            <div className={`container`}>
                {!showLoading ? (
                    <div className={`row flex justify-content-between`}>
                        {products.map((product, index) => {
                            return (
                                <div className={`col-5 my-5`} key={index}>
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.images[0].url}
                                             className={`img-fluid w-100`}
                                             alt={product.images[0].url}/>
                                    </Link>
                                    <div className={`flex justify-content-between mt-4`}>
                                        <h4 className={`fw-bold`}>{product.name}</h4>
                                        <h5 className={`fw-bold`}>{numberWithCommas(product.price)} AMD</h5>
                                    </div>
                                    <StarRatings
                                        rating={rating}
                                        starRatedColor="black"
                                        starEmptyColor="lightGray"
                                        starHoverColor="black"
                                        changeRating={setRating}
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="25px"
                                    />
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

export default Shop
