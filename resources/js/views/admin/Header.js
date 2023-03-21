import logo from "../../../../public/images/logo.png";
import {Link} from "react-router-dom";
import {logout} from "../../redux/store";
import {connect} from "react-redux";

function Header(props) {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
            <div className="container flex">
                <div>
                    <Link to="/" className={`text-decoration-none text-black`}>Dashboard</Link>
                    <Link to="/admin/users" className={`text-decoration-none text-black ms-3`}>Users</Link>
                    <Link to="/" className={`text-decoration-none text-black ms-3`}>Products</Link>
                </div>

                <Link to="/">
                    <img src={logo} className={`img-fluid`} alt={logo}/>
                </Link>

                <button className={`bg-transparent`}
                        onClick={(e) => {
                            props.logout()
                        }}>Logout
                </button>

            </div>

        </nav>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Header)

