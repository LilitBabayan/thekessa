import Header from "../../components/Header/Header";
import styles from "./UserSideStyles.module.scss";
import {Link} from "react-router-dom";
import {useState} from "react";
import {NotificationContainer, NotificationManager} from "react-notifications";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function login(e) {
        e.preventDefault()

        let data = {
            email: email,
            password: password,
        }
        axios.post(api_routes.user.login(), data).then((data) => {
            console.log(111, data)
            return props.history.push('/');
        }).catch((error) => {
            if (error.response.status === 422) {
                createNotification('error', error.response.data.message,)
                return props.history.push('/sign_in');
            }
        })
    }

    function csrf(e) {
        e.preventDefault()

        axios.get(api_routes.user.csrf()).then((data) => {
            console.log('csrf-data', data)
            login()
        }).catch(error => {
            console.log('error', error.response)
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
            <div className={`bg-pink ${styles.asd}`}>
                <div className={`container text-center`}>
                    <div className={`row flex justify-content-center`}>
                        <div className={`mt-5 pt-5 col-12 col-md-5`}>
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

                                <Link className={`text-black`} to={``}>Forgot password?</Link>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <NotificationContainer/>

        </div>
    )

}

export default Login
