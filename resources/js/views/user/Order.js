import styles from "./UserSideStyles.module.scss"
import {numberWithCommas} from "./UserHelpers";
import {useEffect} from "react";
import {withRouter} from "react-router-dom";

function Order(props) {
    const windowWidth = window.innerWidth >= 992
    let orderPrice = localStorage.getItem('order_price')
    let shoppingCart = JSON.parse(localStorage.getItem('shopping_cart'));

    useEffect(() => {
        if (!shoppingCart) {
            return props.history.push('/');
        }
    }, [])


    return (
        <div className={`bg-pink ${styles.fullHeight} ${windowWidth ? 'w-50 p-5' : 'w-100 p-3 mt-5'} d-flex align-items-center`}>
            <div className={`${windowWidth ? 'w-60' : 'w-100'} mx-auto`}>
                <div>
                    <div className={`py-4`}>
                        <p className={`fw-bold`}>Order summary</p>
                        {shoppingCart ?
                            shoppingCart.map((elem, index) => {
                                return (
                                    <div className={`bg-white p-3 flex justify-content-between radius-7 mt-2`}
                                         key={index}>
                                        <img src={elem.product.images[0].url} className={windowWidth ? 'w-17' : 'w-35'}
                                             alt={elem.product.images[0].url}/>
                                        <div className={`w-100 px-3 flex flex-column justify-content-center`}>
                                            <div className={`d-md-flex justify-content-between align-items-center`}>
                                                <div>
                                                    <h5 className={`text-nowrap ${!windowWidth ? 'font-14':''}`}>{elem.product.name}</h5>
                                                    <p className={!windowWidth ? 'font-14':''}>{elem.quantity} pack</p>
                                                </div>
                                                <p className={`mb-0 fw-bold text-nowrap`}>{numberWithCommas(elem.quantity * elem.product.price)} AMD</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : null}

                    </div>

                    <div className={`py-4 border-top border-bottom`}>
                        <div className={`d-flex`}>
                            <input type={`text`} placeholder={`Gift card or discount code`}
                                   className={`p-3 border w-100`}/>
                            <button className={`text-white bg-black fw-bold px-2 px-md-5`}>Apply</button>
                        </div>
                    </div>


                    <div className={`py-4 border-bottom`}>
                        <div className={`p-3 bg-white radius-7`}>
                            <div className={`d-flex justify-content-between`}>
                                <p className={`text-secondary`}>Subtotal</p>
                                <p className={`fw-bold text-nowrap`}>{numberWithCommas(orderPrice)} AMD</p>
                            </div>
                            <div className={`d-flex justify-content-between`}>
                                <p className={`text-secondary`}>Shipping</p>
                                <p className={`fw-bold`}>-</p>
                            </div>
                            <div className={`d-flex justify-content-between`}>
                                <p className={`text-secondary`}>Taxes</p>
                                <p className={`fw-bold`}>-</p>
                            </div>
                        </div>

                    </div>

                    <div className={`py-4 d-flex justify-content-between`}>
                        <p className={`text-secondary`}>Total</p>
                        <p className={`fw-bold`}>{numberWithCommas(orderPrice)} AMD</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default withRouter(Order)
