import {withRouter} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import {Load} from "../../components/Loading/Load";
import SimpleImageSlider from "react-simple-image-slider";
import StarRatings from "react-star-ratings/build/star-ratings";
import {numberWithCommas} from "./UserHelpers";
import {getProduct, reviewProduct} from "./ProductHelpers";
import {useSelector} from "react-redux";
import Emitter from "../../services/emitter";


function ProductPage(props) {
    const [productId, setProductId] = useState(props.match.params.id);
    const [product, setProduct] = useState({});
    const [consistency, setConsistency] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [reviewKey, setReviewKey] = useState(Math.random());
    const [orderPrice, setOrderPrice] = useState(localStorage.getItem('order_price'));
    const user = useSelector(function (state) {
        return state.user
    })

    useEffect(() => {
        getProduct(productId).then((data) => {
            setProduct(data.data.product)
            setShowLoading(false)
        }).catch(error => {
            console.log('error', error)
            if (error?.response?.status == 422) {
                return props.history.push('/');
            }
            return props.history.push('/404')
        })
    }, [])

    function addToCart() {
        let newData = {
            quantity: quantity,
            product: product
        }
        let existingCart = localStorage.getItem('shopping_cart');
        if (existingCart) {
            let newArray = JSON.parse(existingCart)
            let sameProduct = newArray.find(elem => elem.product.id === product.id)
            if (sameProduct) {
                sameProduct.quantity += quantity
            } else {
                newArray.push(newData)
            }
            localStorage.setItem('shopping_cart', JSON.stringify(newArray))
            setOrderPrice(+orderPrice + quantity * product.price)
            localStorage.setItem('order_price', +orderPrice + quantity * product.price)
        } else {
            localStorage.setItem('shopping_cart', JSON.stringify([newData]))
            setOrderPrice(quantity * product.price)
            localStorage.setItem('order_price',quantity * product.price)

        }

        Emitter.emit('refreshCard')
    }

    function setRating(e) {
        let data = {
            rate: e,
        }
        reviewProduct(productId, data).then((response) => {
            if (response.data.success) {
                getProduct(productId).then((res) => {
                    if (res.data.product) {
                        product.avgrating = res.data.product.avgrating
                        product.ratings_count = res.data.product.ratings_count
                        setReviewKey(Math.random())

                    }
                })
            }
        })
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
                        <div className={`col-6 px-5 py-5 d-flex flex-column justify-content-between`}>
                            {user && Object.keys(user).length ? (
                                <div className={`d-flex align-items-end`} key={reviewKey}>
                                    <StarRatings
                                        rating={product.avgrating ? product.avgrating : 0}
                                        starRatedColor="black"
                                        starEmptyColor="lightGray"
                                        starHoverColor="black"
                                        changeRating={(e) => setRating(e)}
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="20px"
                                    />

                                    <u className={`ms-3`}>{product.ratings_count} reviews</u>

                                </div>) : null}


                            <h5 className={`fw-bold my-4`}>Overview</h5>
                            <p className={`w-50`}>{product.description}</p>

                            <h5 className={`fw-bold my-4`}>Includes</h5>


                            <div className={`d-flex align-items-center`}>
                                <h5 className={`mainColor me-5 mb-0`}>{numberWithCommas(quantity * product.price)} AMD</h5>
                                <div className={`d-flex align-items-center`}>
                                    <button className={`bg-transparent border rounded`}
                                            disabled={quantity <= 1}
                                            onClick={() => setQuantity(quantity - 1)}>
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                    <h5 className={`mb-0 mx-3`}>{quantity}</h5>
                                    <button className={`bg-transparent border rounded`}
                                            onClick={() => setQuantity(quantity + 1)}>
                                        <i className="fa-regular fa-plus"></i>
                                    </button>
                                </div>
                            </div>

                            <button className={`bg-black p-3 radius-7 w-75 text-white fw-bold mt-5`}
                                    onClick={() => {
                                        addToCart()
                                    }}
                            >Add to cart | {numberWithCommas(quantity * product.price)} AMD
                            </button>


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
