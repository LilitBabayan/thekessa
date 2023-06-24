import {withRouter} from "react-router-dom";
import Header from "../../components/Header/Header";
import React from "react";
import Footer from "../../components/Footer/Footer";

function PrivacyPolicy() {
    return (
        <div>
            <Header/>
            <div className={`container my-5`}>

                <h2 className={`text-center font-weight-bold`}>Privacy Policy</h2>
                <h6>
                    At The Kessa, we are committed to protecting your privacy and ensuring the security of your personal
                    information. This Privacy Policy outlines how we collect, use, disclose, and protect the information
                    you provide when using our website. By accessing and using our website, you consent to the terms of
                    this Privacy Policy.
                </h6>

                <ul>
                    <li>
                        Information We Collect:
                        <p className={`mb-1 mt-2`}><u className={`fw-bold mr-2`}>Personal Information:</u>
                            When you make a purchase or register an account on our website, we collect personal
                            information such as your name, email address, shipping address, and payment details.
                        </p>

                        <p className={`mb-1`}><u className={`fw-bold mr-2`}>Log Data:</u>
                            Our servers automatically record certain information when you visit our website, including
                            your IP address, browser type, referring/exit pages, and timestamps.
                        </p>
                        <p className={`mb-1`}><u className={`fw-bold mr-2`}>Cookies:</u>
                            We may use cookies to enhance your browsing experience and provide personalized features.
                            You can modify your browser settings to decline cookies if you prefer.
                        </p>
                    </li>

                    <li>
                        Use of Information:
                        <p className={`mb-1 mt-2`}>
                            We use the information you provide to process your orders, respond to your inquiries, and
                            improve our services.
                        </p>
                        <p className={`mb-1`}>
                            We may use your email address to send you promotional offers, updates, and newsletters. You
                            can opt out of these communications at any time.
                        </p>
                        <p className={`mb-1`}>
                            We do not sell, trade, or rent your personal information to third parties without your
                            explicit
                            consent, except as required by law.
                        </p>

                    </li>

                    <li>
                        Data Security:

                        <p className={`mb-1 mt-2`}>
                            We implement various security measures to protect your personal information from
                            unauthorized
                            access, alteration, or disclosure.
                        </p>
                        <p className={`mb-1`}>
                            However, please note that no method of transmission over the internet or electronic storage
                            is
                            100% secure. We strive to use commercially acceptable means to protect your personal
                            information, but we cannot guarantee its absolute security.
                        </p>
                    </li>

                    <li>
                        Third-Party Links:
                        <p className={`mb-1 mt-2`}>
                            Our website may contain links to third-party websites. We are not responsible for the
                            privacy
                            practices or content of those websites. We encourage you to review the privacy policies of
                            any
                            third-party websites you visit.
                        </p>

                    </li>

                    <li>
                        Changes to Privacy Policy:
                        <p className={`mb-1 mt-2`}>
                            We reserve the right to update or modify this Privacy Policy at any time. Any changes will
                            be
                            effective immediately upon posting on our website. We encourage you to review this Privacy
                            Policy periodically.
                        </p>

                    </li>
                </ul>

                If you have any questions or concerns about our Privacy Policy, please contact us at info@thekessa.com.


            </div>
            <Footer/>
        </div>
    )

}

export default withRouter(PrivacyPolicy)
