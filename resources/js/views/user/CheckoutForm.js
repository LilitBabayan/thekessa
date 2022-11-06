import React from "react";
import {
    ElementsConsumer,
    CardElement,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement
} from "@stripe/react-stripe-js";
import {Link} from "react-router-dom";


const CARD_NUMBER_ELEMENT_OPTIONS = {
    placeholder: 'Card number',
    style: {
        base: {
            color: "#303238",
            fontSize: "16px",
            fontFamily: "sans-serif",
            fontSmoothing: "antialiased",
        },
        invalid: {
            color: "#e5424d",
            ":focus": {
                color: "#303238"
            }
        }
    }
};

const CARD_EXPIRY_ELEMENT_OPTIONS = {
    placeholder: 'Expiration date (MM/YY)',
    style: {
        base: {
            color: "#303238",
            fontSize: "16px",
            fontFamily: "sans-serif",
            fontSmoothing: "antialiased",
        },
        invalid: {
            color: "#e5424d",
            ":focus": {
                color: "#303238"
            }
        }
    }
};

const CARD_CVC_ELEMENT_OPTIONS = {
    placeholder: 'Security code',
    style: {
        base: {
            color: "#303238",
            fontSize: "16px",
            fontFamily: "sans-serif",
            fontSmoothing: "antialiased",
        },
        invalid: {
            color: "#e5424d",
            ":focus": {
                color: "#303238"
            }
        }
    }
};


class CheckoutForm extends React.Component {
    handleSubmit = async event => {
        event.preventDefault();

        const {stripe, elements} = this.props;
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log(result.token);
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div className={`bg-light p-3`}>
                        <div className={`border bg-white p-2 radius-7`}>
                            <CardNumberElement options={CARD_NUMBER_ELEMENT_OPTIONS}/>
                        </div>
                        <input type={"text"} className={`border bg-white p-2 radius-7 my-3 w-100`}
                               placeholder={`Name on card`}/>

                        <div className={`d-flex justify-content-between`}>
                            <div className={`border bg-white p-2 radius-7 w-60`}>
                                <CardExpiryElement options={CARD_EXPIRY_ELEMENT_OPTIONS}/>
                            </div>
                            <div className={`border bg-white p-2 radius-7 w-35`}>
                                <CardCvcElement options={CARD_CVC_ELEMENT_OPTIONS}/>
                            </div>
                        </div>

                    </div>


                    <div className={`d-flex justify-content-between align-items-center mt-5`}>
                        <Link className={`text-decoration-none mainColor fw-bold`}>
                                <span className={`mainColor mr-2`}>
                                    <i className="fas fa-chevron-left"></i>
                                </span>
                            Return to shipping</Link>

                        <button className={`bg-black text-white p-3 radius-7 fw-bold  btn-pay`}
                                disabled={!this.props.stripe}>
                            Pay now
                        </button>

                    </div>
                </form>
            </div>
        );
    }
}

export default function InjectedCheckoutForm() {
    return (
        <ElementsConsumer>
            {({stripe, elements}) => (
                <CheckoutForm stripe={stripe} elements={elements}/>
            )}
        </ElementsConsumer>
    );
}
