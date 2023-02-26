import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const initialState = {
    order: {
        email: '',
        first_name: '',
        last_name: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phone: '',
        shipping_method: '',
        stripe_token: ''
    },
    user: {}


};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER": {
            return {
                ...state,
                user: action.payload,
                order: {
                    ...state.order,
                    email: action.payload.email,
                    first_name: action.payload.first_name,
                    last_name: action.payload.last_name
                }
            }
        }

        case "LOGOUT_USER": {
            return {
                ...state,
                user: action.payload,
            }
        }
        case "CHANGE_ORDER": {
            return {
                ...state,
                order: {
                    email: action.payload.email || action.payload.email === '' ? action.payload.email : state.order.email,
                    first_name: action.payload.first_name || action.payload.first_name === '' ? action.payload.first_name : state.order.first_name,
                    last_name: action.payload.last_name || action.payload.last_name === '' ? action.payload.last_name : state.order.last_name,
                    address: action.payload.address || action.payload.address === '' ? action.payload.address : state.order.address,
                    apartment: action.payload.apartment || action.payload.apartment === '' ? action.payload.apartment : state.order.apartment,
                    city: action.payload.city || action.payload.city === '' ? action.payload.city : state.order.city,
                    state: action.payload.state || action.payload.state === '' ? action.payload.state : state.order.state,
                    zip: action.payload.zip || action.payload.zip === '' ? action.payload.zip : state.order.zip,
                    country: action.payload.country || action.payload.country === '' ? action.payload.country : state.order.country,
                    phone: action.payload.phone || action.payload.phone === '' ? action.payload.phone : state.order.phone,
                    shipping_method: action.payload.shipping_method || action.payload.shipping_method === '' ? action.payload.shipping_method : state.order.shipping_method,
                }
            }
        }
        default:
            return state
    }

};

function getUser() {
    return (dispatch) => {
        axios.get(api_routes.user.csrf()).then(() => {
            axios.get(api_routes.user.user()).then((response) => {
                dispatch({type: "GET_USER", payload: response.data});
            }).catch(() => {
                dispatch({type: "GET_USER", payload: {}});
            })
        })
    }
}

export function logout() {
    return (dispatch) => {
        axios.post(api_routes.user.logout()).then(() => {
            dispatch({type: "LOGOUT_USER", payload: {}});
        }).catch(() => {
            dispatch({type: "LOGOUT_USER", payload: {}});
        })
    }
}


let store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(getUser());


export default store


