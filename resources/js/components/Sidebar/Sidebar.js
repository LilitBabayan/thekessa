import {useEffect} from "react";
import Emitter from "../../services/emitter";
import styles from "./../../views/user/UserSideStyles.module.scss"
import productImg from "../../../../public/images/home_3.png"
import {Link} from "react-router-dom";

function Sidebar() {
    const windowWidth = window.innerWidth >= 992


    useEffect(() => {
        Emitter.on('openSidebar', () => {
            document.getElementById("myNav").style.width = windowWidth ? "35%" : "100%";
        })
    }, [])

    function closeSideBar() {
        document.getElementById("myNav").style.width = "0%";
    }

    return (
        <div id="myNav" className={styles.sideBar}>
            <div className={`d-flex bg-white px-4 py-2 justify-content-between align-items-center shadow`}>
                <button className={`bg-transparent`} onClick={() => closeSideBar()}>
                    <i className="fa-solid fa-arrow-right-long fa-2x"></i>
                </button>
                <h4 className={`fw-bolder mb-0`}>My cart</h4>
                <div className={`border border-dark rounded-circle p-3`}>
                    2
                </div>
            </div>

            <div className={`p-3`}>
                <div className={`bg-white p-3 flex justify-content-between`}>
                    <img src={productImg} className={`w-17`} alt={productImg}/>
                    <div className={`w-100 px-3 flex flex-column justify-content-between`}>
                        <div className={`d-flex justify-content-between align-items-start`}>
                            <div>
                                <h5>The Kessa scrub</h5>
                                <p>2 pack</p>
                            </div>
                            <button className={`bg-transparent`}>
                                <i className={`fa fa-times fa-lg`}/>
                            </button>
                        </div>

                        <div className={`d-flex justify-content-between align-items-end`}>
                            <div className={`d-flex align-items-center`}>
                                <button className={`bg-transparent border rounded`}>
                                    <i className="fa-solid fa-minus"></i>
                                </button>
                                <h5 className={`mb-0 mx-3`}>2</h5>
                                <button className={`bg-transparent border rounded`}>
                                    <i className="fa-regular fa-plus"></i>
                                </button>
                            </div>
                            <p className={`mb-0 mainColor fw-bold`}>20,000 AMD</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`bg-white p-4 shadow position-absolute bottom-0 w-100`}>
                <div className={`d-flex justify-content-between w-100 mt-2`}>
                    <p>Subtotal</p>
                    <h5 className={`fw-bold`}>20,000 AMD</h5>
                </div>
                <Link className={`btn bg-dark radius-7 w-100 text-white fw-bold p-3 mt-3`}
                      to="/checkout/information">Continue to checkout</Link>
                <p className={`font-12 text-center mt-2`}>Shipping calculated at checkout</p>
            </div>
        </div>
    )

}

export default Sidebar

