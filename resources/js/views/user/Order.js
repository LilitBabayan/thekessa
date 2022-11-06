import productImg from "../../../../public/images/home_3.png";
import styles from "./UserSideStyles.module.scss"

function Order() {
    const windowWidth = window.innerWidth >= 992

    return (
        <div className={`p-5 bg-pink ${styles.fullHeight} ${windowWidth ? 'w-50' : 'w-100'} d-flex align-items-center`}>
            <div className={`${windowWidth ? 'w-60' : 'w-100'} mx-auto`}>
                <div>
                    <div className={`py-4`}>
                        <p className={`fw-bold`}>Order summary</p>
                        <div className={`bg-white p-3 flex justify-content-between radius-7`}>
                            <img src={productImg} className={windowWidth ? 'w-17' : 'w-35'} alt={productImg}/>
                            <div className={`w-100 px-3 flex flex-column justify-content-center`}>
                                <div className={`d-md-flex justify-content-between align-items-center`}>
                                    <div>
                                        <h5 className={`text-nowrap`}>The Kessa scrub</h5>
                                        <p>2 pack</p>
                                    </div>
                                    <p className={`mb-0 fw-bold text-nowrap`}>20,000 AMD</p>
                                </div>
                            </div>
                        </div>
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
                                <p className={`fw-bold text-nowrap`}>20,000 AMD</p>
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
                        <p className={`fw-bold`}>20,000 AMD</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Order
