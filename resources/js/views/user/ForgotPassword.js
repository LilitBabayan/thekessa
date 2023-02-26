import {Link, withRouter} from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./UserSideStyles.module.scss";
import {NotificationContainer} from "react-notifications";
import React, {useEffect, useState} from "react";
import {createNotification} from "./UserHelpers";
import {useSelector} from "react-redux";

function ForgotPassword(props) {
    const [email, setEmail] = useState('');

    const user = useSelector(function (state) {
        return state.user
    })
    useEffect(() => {
        if (user && Object.keys(user).length) {
            props.history.push('/')
        }
    }, [user])

    function sendForgotPassLink(e) {
        e.preventDefault()
        let data = {
            email: email,
        }

        axios.post(api_routes.user.forgotPassword(), data).then((response) => {
            createNotification('success', response.data.message)
            setTimeout(() => {
                return props.history.push('/login');
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
                            <h2 className={`fw-bolder`}>PLease enter you email</h2>
                            <form onSubmit={(event) => sendForgotPassLink(event)}>

                                <input type={`text`} placeholder={`Email`} value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       className={`p-3 border w-100 radius-7 mt-3`}/>

                                <button className={`p-3 bg-black text-white fw-bold radius-7 mt-3 w-100`}>
                                    Send link
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

export default withRouter(ForgotPassword)
