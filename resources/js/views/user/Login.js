import Header from "../../components/Header/Header";
import styles from "./UserSideStyles.module.scss";
import {Link, withRouter} from "react-router-dom";
import {useEffect, useState} from "react";
import {NotificationContainer} from "react-notifications";
import {useDispatch, useSelector} from "react-redux";
import {createNotification} from "./UserHelpers";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const user = useSelector(function (state) {
        return state.user
    })
    useEffect(() => {
        if (user && Object.keys(user).length) {
            props.history.push('/')
        }
    }, [user])


    function login(e) {
        e.preventDefault()
        let data = {
            email: email,
            password: password,
        }

        axios.get(api_routes.user.csrf()).then(() => {
            axios.post(api_routes.user.login(), data).then((response) => {
                dispatch({type: "GET_USER", payload: response.data.user});
                return props.history.push('/');
            }).catch((error) => {
                console.log('error', error)
                if (error.response.status === 422) {
                    if (Object.keys(error.response.data.errors).length) {
                        for (const [key, value] of Object.entries(error.response.data.errors)) {
                            createNotification('error', value)
                        }
                    }
                }
                return props.history.push('/login');
            })
        })
    }


    return (
        <div>
            <Header/>
            <div className={`bg-pink ${styles.fullHeight}`}>
                <div className={`container text-center`}>
                    <div className={`row flex justify-content-center`}>
                        <div className={`mt-5 pt-5 col-12 col-lg-5`}>
                            <h2 className={`fw-bolder`}>Sign in</h2>

                            <p className={`my-3`}>Don't have an account?
                                <Link to="/sign_up" className={`fw-bold text-black ml-2`}>
                                    Sign up</Link></p>
                            <form onSubmit={(e) => login(e)}>
                                <input type={`text`} placeholder={`Email`} value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       className={`p-3 border w-100 radius-7 mt-3`}/>
                                <input type={`password`} placeholder={`Password`} value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                       className={`p-3 border w-100 radius-7 mt-3`}/>

                                <button className={`p-3 bg-black text-white fw-bold radius-7 my-4 w-100`}>
                                    Sign in
                                </button>

                                <Link className={`text-black`} to={`/forgot_password`}>Forgot password?</Link>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <NotificationContainer/>

        </div>
    )

}

export default withRouter(Login)
