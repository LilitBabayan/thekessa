import logo from "../../../../public/images/logo.png"
import {Link} from "react-router-dom";
import Emitter from "../../services/emitter";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
    const splitLocation = location.pathname.split('/')
    const windowWidth = window.innerWidth >= 992

    function openSidebar() {
        Emitter.emit('openSidebar')
    }


    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
            <div className="container">
                {!windowWidth ? (
                    <div className={`d-flex w-100 justify-content-between`}>
                        <Link to="/">
                            <img src={logo} className={`img-fluid`} alt={logo}/>
                        </Link>
                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                ) : null}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className={`d-flex justify-content-between align-items-center w-100 montserrat py-3`}>
                        <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center ">
                            <li className="nav-item">
                                <Link className={`nav-link ${splitLocation[1] === "shop" ? 'mainColor' : 'text-dark'}`}
                                      to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${splitLocation[1] === "about" ? 'mainColor' : 'text-dark'}`}
                                      to="/about"> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${splitLocation[1] === "ingredients" ? 'mainColor' : 'text-dark'}`}
                                    to="/ingredients"> Ingredients</Link>
                            </li>
                        </ul>
                        {windowWidth ? (
                            <Link to="/">
                                <img src={logo} className={`img-fluid`} alt={logo}/>
                            </Link>
                        ) : null}

                        <ul className="navbar-nav mb-2 mb-lg-0 flex align-items-center">
                            <Link
                                className={`nav-link ${splitLocation[1] === "sign_up" ? 'mainColor' : 'text-dark'}`}
                                to="/sign_up"> My account</Link>
                            <li className="nav-item">
                                <button className="nav-link bg-transparent" onClick={() => openSidebar()}>
                                    <svg width="41" height="38" viewBox="0 0 41 38" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25.3317 11.3333C25.3317 17.2243 22.6453 21.9999 19.3315 21.9999C16.0176 21.9999 13.3313 17.2243 13.3313 11.3333C11.999 0 16.0373 0 19.3511 0C22.6649 0 25.9984 0 25.3317 11.3333Z"
                                            fill="#DC9C9C"/>
                                        <path
                                            d="M2.31185 8.96045C1.77189 8.96045 1.33398 9.39832 1.33398 9.93828C1.33398 10.4782 1.77164 10.9161 2.31185 10.9161H5.56098C7.17932 14.9242 8.77327 18.9397 10.3786 22.955L8.90173 26.5095C8.77804 26.806 8.81283 27.1631 8.99131 27.43C9.17001 27.6969 9.48694 27.8654 9.80819 27.864H26.1051C26.6216 27.8713 27.0968 27.403 27.0968 26.8862C27.0968 26.3697 26.6216 25.9011 26.1051 25.9084H11.2749L12.1202 23.8918L27.8164 22.6392C28.2272 22.6069 28.5992 22.2868 28.6924 21.8855L30.6482 13.4115C30.7762 12.8406 30.2757 12.2179 29.6908 12.2197H8.1888L7.12956 9.57156C6.98451 9.21303 6.60983 8.96045 6.22311 8.96045H2.31185ZM8.9732 14.1754H15.0234V17.1086H10.1446L8.9732 14.1754ZM16.979 14.1754H20.8902V17.1086H16.979V14.1754ZM22.8459 14.1754H28.4582L27.7859 17.1086H22.8459V14.1754ZM10.9288 19.0642H15.0235V21.7021L12.08 21.9363L10.9288 19.0642ZM16.979 19.0642H20.8902V21.2336L16.979 21.5494V19.0642ZM22.8459 19.0642H27.3275L26.9406 20.755L22.8459 21.0811L22.8459 19.0642ZM13.0678 28.5161C11.2792 28.5161 9.80841 29.9868 9.80841 31.7753C9.80841 33.5638 11.2792 35.0346 13.0678 35.0346C14.8564 35.0346 16.3272 33.5638 16.3272 31.7753C16.3272 29.9868 14.8564 28.5161 13.0678 28.5161ZM22.8459 28.5161C21.0573 28.5161 19.5865 29.9868 19.5865 31.7753C19.5865 33.5638 21.0573 35.0346 22.8459 35.0346C24.6345 35.0346 26.1053 33.5638 26.1053 31.7753C26.1053 29.9868 24.6345 28.5161 22.8459 28.5161ZM13.0678 30.4717C13.7994 30.4717 14.3714 31.0437 14.3714 31.7753C14.3714 32.5069 13.7994 33.0789 13.0678 33.0789C12.3362 33.0789 11.7642 32.5067 11.7642 31.7753C11.7642 31.0437 12.3364 30.4717 13.0678 30.4717ZM22.8459 30.4717C23.5775 30.4717 24.1495 31.044 24.1495 31.7753C24.1495 32.5069 23.5773 33.0789 22.8459 33.0789C22.1143 33.0789 21.5423 32.5069 21.5423 31.7753C21.5423 31.0437 22.1143 30.4717 22.8459 30.4717Z"
                                            fill="black" fillOpacity="0.85"/>
                                    </svg>

                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <Sidebar/>
        </nav>
    )
}

export default Header
