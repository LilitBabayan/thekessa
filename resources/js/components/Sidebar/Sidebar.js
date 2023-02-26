import {useEffect, useState} from "react";
import Emitter from "../../services/emitter";
import styles from "./../../views/user/UserSideStyles.module.scss"
import {Link} from "react-router-dom";
import {numberWithCommas} from "../../views/user/UserHelpers";

function Sidebar() {
    const windowWidth = window.innerWidth >= 992
    const [shoppingCart, setShoppingCart] = useState(localStorage.getItem('shopping_cart'));
    const [total, setTotal] = useState(localStorage.getItem('order_price'));

    useEffect(() => {
        Emitter.on('openSidebar', () => {
            document.getElementById("myNav").style.width = windowWidth ? "35%" : "100%";
        })
    }, [])

    useEffect(() => {
        Emitter.on('refreshCard', () => {
            setShoppingCart(localStorage.getItem('shopping_cart'))
            setTotal(+localStorage.getItem('order_price'))
        })

    }, [shoppingCart, total])


    function closeSideBar() {
        document.getElementById("myNav").style.width = "0%";
    }

    function change(type, id) {
        let data = JSON.parse(shoppingCart)
        let product = data.find(elem => elem.product.id === id)
        if (product) {
            if (type === 'add') {
                product.quantity++
                setTotal(+total + product.product.price)
                localStorage.setItem('order_price', +total + product.product.price);
            } else if (type === 'subtract') {
                product.quantity--
                setTotal(+total - product.product.price)
                localStorage.setItem('order_price', +total - product.product.price);
            } else {
                data.splice(data.indexOf(product), 1)
                setTotal(+total - product.product.price * product.quantity)
                localStorage.setItem('order_price', +total - product.product.price * product.quantity);
            }
        }
        if (data.length) {
            localStorage.setItem('shopping_cart', JSON.stringify(data));
        } else {
            localStorage.removeItem("shopping_cart")
            localStorage.removeItem("order_price")
        }

        setShoppingCart(localStorage.getItem('shopping_cart'))
        setTotal(localStorage.getItem('order_price'))
    }

    return (
        <div id="myNav" className={styles.sideBar}>
            <div className={`d-flex bg-white px-4 py-2 align-items-center shadow`}>
                <button className={`bg-transparent`} onClick={() => closeSideBar()}>
                    <i className="fa-solid fa-arrow-right-long fa-2x"></i>
                </button>
                <h4 className={`fw-bolder mb-0 ms-3`}>My cart</h4>
            </div>
            {shoppingCart?.length && total ? (
                <div>
                    <div className={`p-3`}>
                        {JSON.parse(shoppingCart).map((elem, index) => {
                            return (
                                <div
                                    className={`bg-white p-3 flex justify-content-between ${index !== 0 ? 'mt-3' : ''}`}
                                    key={index}>
                                    <img src={elem.product.images[0].url} className={`w-17`}
                                         alt={elem.product.images[0].url}/>
                                    <div className={`w-100 px-3 flex flex-column justify-content-between`}>
                                        <div className={`d-flex justify-content-between align-items-start`}>
                                            <div>
                                                <h5>{elem.product.name}</h5>
                                                <p>{elem.quantity} pack</p>
                                            </div>
                                            <button className={`bg-transparent`}
                                                    onClick={() => change('remove', elem.product.id)}>
                                                <i className={`fa fa-times fa-lg`}/>
                                            </button>
                                        </div>

                                        <div className={`d-flex justify-content-between align-items-end`}>
                                            <div className={`d-flex align-items-center`}>
                                                <button className={`bg-transparent border rounded`}
                                                        disabled={elem.quantity === 1}
                                                        onClick={() => change('subtract', elem.product.id)}>
                                                    <i className="fa-solid fa-minus"></i>
                                                </button>
                                                <h5 className={`mb-0 mx-3`}>{elem.quantity}</h5>
                                                <button className={`bg-transparent border rounded`}
                                                        onClick={() => change('add', elem.product.id)}>
                                                    <i className="fa-regular fa-plus"></i>
                                                </button>
                                            </div>
                                            <p className={`mb-0 mainColor fw-bold`}>{numberWithCommas(elem.quantity * elem.product.price)} AMD</p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                    <div className={`bg-white p-4 shadow position-absolute bottom-0 w-100`}>
                        <div className={`d-flex justify-content-between w-100 mt-2`}>
                            <p>Subtotal</p>
                            <h5 className={`fw-bold`}>{numberWithCommas(total)} AMD</h5>
                        </div>
                        <Link className={`btn bg-dark radius-7 w-100 text-white fw-bold p-3 mt-3`}
                              to="/checkout/information">Continue to checkout</Link>
                        <p className={`font-12 text-center mt-2`}>Shipping calculated at checkout</p>
                    </div>
                </div>
            ) : (
                <div className={`bg-white p-4 shadow w-100 text-center mt-5`}>
                    Your cart is empty
                </div>
            )}


        </div>
    )

}

export default Sidebar

