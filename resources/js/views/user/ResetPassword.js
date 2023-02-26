import {withRouter} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import styles from "./UserSideStyles.module.scss";
import {NotificationContainer} from "react-notifications";
import {createNotification} from "./UserHelpers";
import {useDispatch} from "react-redux";

function ResetPassword(props) {
    const [token, setToken] = useState(props.match.params.token);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        let urlParams = new URLSearchParams(window.location.search);
        setEmail(urlParams.get('email'))
    }, [])

    function resetPassword(e) {
        e.preventDefault()
        let data = {
            token: token,
            email: email,
            password: password,
            password_confirmation: confirmPassword
        }
        axios.post(api_routes.user.updatePassword(), data).then((response) => {
            createNotification('success', response.data.message)
            dispatch({type: "GET_USER", payload: response.data.user});
            setTimeout(() => {
                return props.history.push('/');
            }, 3000)

        }).catch((error) => {
            console.log('error', error)
            if (error.response.status === 422) {
                if (Object.keys(error.response.data.errors).length) {
                    for (const [key, value] of Object.entries(error.response.data.errors)) {
                        createNotification('error', value)
                    }
                }
            }

        })

    }


    return (
        <div>
            <Header/>
            <div className={`bg-pink ${styles.fullHeight}`}>
                <div className={`container text-center`}>
                    <div className={`row flex justify-content-center`}>
                        <div className={`mt-5 pt-5 col-12 col-lg-5`}>
                            <h2 className={`fw-bolder`}>PLease enter a new password</h2>
                            <form onSubmit={(event) => resetPassword(event)}>

                                <input type={`password`} placeholder={`Password`} value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                       className={`p-3 border w-100 radius-7 mt-3`}/>

                                <input type={`password`} placeholder={`Confirm password`} value={confirmPassword}
                                       onChange={(e) => setConfirmPassword(e.target.value)}
                                       className={`p-3 border w-100 radius-7 mt-3`}/>

                                <button className={`p-3 bg-black text-white fw-bold radius-7 mt-3 w-100`}>
                                    Reset
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <NotificationContainer/>

        </div>
    )

}

export default withRouter(ResetPassword)
