import {withRouter} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from "react";

function TermsAndConditions() {
    return (
        <div>
            <Header/>
            <div className={`container my-5`}>
                <h2 className={`text-center font-weight-bold`}>Terms and Conditions</h2>
                <ul>
                    <li>
                        <p className={`mb-1 mt-2`}><u className={`fw-bold mr-2`}>Acceptance of Terms:</u>
                            By accessing and using our website, you agree to be bound by these terms and conditions.
                        </p>
                    </li>
                    <li>
                        <p className={`mb-1 mt-2`}><u className={`fw-bold mr-2`}>Product Descriptions:</u>
                            We strive to provide accurate and up-to-date product descriptions on our website. However,
                            we do not guarantee the accuracy, completeness, or reliability of any product information.
                        </p>
                    </li>
                    <li>
                        <p className={`mb-1 mt-2`}><u className={`fw-bold mr-2`}>Pricing and Payment:</u>
                            All prices listed on our website are in the local currency and are subject to change without
                            notice. Payment for purchases must be made through the available payment methods specified
                            on the checkout page.
                        </p>
                    </li>
                    <li>
                        <p className={`mb-1 mt-2`}><u className={`fw-bold mr-2`}>Shipping and Delivery:</u>
                            We aim to process and ship orders promptly. Delivery times may vary depending on the
                            shipping method and your location. Additional fees, such as customs duties or taxes, may
                            apply and are the responsibility of the customer.
                        </p>
                    </li>
                    <li>
                        <p className={`mb-1 mt-2`}><u className={`fw-bold mr-2`}>Returns and Refunds:</u>
                            We accept returns within 30 days of the purchase date, provided that the item is unused, in
                            its original packaging, and accompanied by a valid proof of purchase. Refunds will be issued
                            in the original form of payment.
                        </p>
                    </li>
                    <li>
                        <p className={`mb-1 mt-2`}><u className={`fw-bold mr-2`}>Intellectual Property:</u>
                            All intellectual property rights, including trademarks and copyrights, displayed on our
                            website are owned by us or our licensors. You may not use or reproduce any of these without
                            prior written permission.
                        </p>
                    </li>
                    <li>
                        <p className={`mb-1 mt-2`}><u className={`fw-bold mr-2`}>Limitation of Liability:</u>
                            We are not liable for any direct, indirect, incidental, or consequential damages arising
                            from the use or inability to use our products or website.
                        </p>
                    </li>
                    <li>
                        <p className={`mb-1 mt-2`}><u className={`fw-bold mr-2`}>Privacy and Data Protection:</u>
                            We are committed to protecting your privacy. Any personal information collected during your
                            visit to our website will be handled in accordance with our Privacy Policy.
                        </p>
                    </li>
                </ul>

            </div>
            <Footer/>
        </div>
    )

}

export default withRouter(TermsAndConditions)
