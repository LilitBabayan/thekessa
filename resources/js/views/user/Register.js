import Header from "../../components/Header/Header";
import {Link, withRouter} from "react-router-dom";
import styles from "./UserSideStyles.module.scss"
import React, {useState} from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications';


function Register(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function register(e) {
        e.preventDefault()
        let data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            password_confirmation: password
        }
        axios.post(api_routes.user.register(), data).then((data) => {
            if (data.status === 201) {
                return props.history.push('/');
            }
        }).catch((error) => {
            if (error.response.status === 422) {
                createNotification('error', error.response.data.message,)
                return props.history.push('/sign_up');
            }
            return props.history.push('/404');
        })
    }

    function createNotification(type, msg) {
        switch (type) {
            case 'info':
                NotificationManager.info(msg);
                break;
            case 'success':
                NotificationManager.success(msg, 'Title here');
                break;
            case 'warning':
                NotificationManager.warning(msg, 'Close after 3000ms');
                break;
            case 'error':
                NotificationManager.error(msg, 'Something went wrong!');
                break;
        }

    };


    return (
        <div>
            <Header/>
            <div className={`bg-pink ${styles.fullHeight}`}>
                <div className={`container text-center`}>
                    <div className={`row flex justify-content-center`}>
                        <div className={`mt-5 pt-5 col-12 col-lg-5`}>
                            <h2 className={`fw-bolder`}>Create account</h2>

                            <p className={`my-3`}>Already have an account?
                                <Link to="/sign_in" className={`fw-bold text-black ml-2`}>
                                    Sign in</Link></p>
                            <form onSubmit={(event) => register(event)}>
                                <input type={`text`} placeholder={`First name`} value={firstName}
                                       onChange={(e) => setFirstName(e.target.value)}
                                       className={`p-3 border w-100 radius-7 mt-3`}/>
                                <input type={`text`} placeholder={`Last name`} value={lastName}
                                       onChange={(e) => setLastName(e.target.value)}
                                       className={`p-3 border w-100 radius-7 mt-3`}/>
                                <input type={`text`} placeholder={`Email`} value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       className={`p-3 border w-100 radius-7 mt-3`}/>
                                <input type={`password`} placeholder={`Password`} value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                       className={`p-3 border w-100 radius-7 mt-3`}/>

                                <button className={`p-3 bg-black text-white fw-bold radius-7 mt-3 w-100`}>
                                    Sign up
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

export default withRouter(Register)
