import history from '../history'
import { freemem } from 'os';
import { stat } from 'fs';
const initialState = {
    payments: [],
    cart: [],
    current_order: [],
    orders: [],
    products: [],
    product: []
}

const planReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART_SUCCESS':
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case 'ADD_TO_CART_FAILED':
            return {
                ...state,
                error: action.error
            }
        case 'DELETE_FROM_CART_SUCCESS':
            const filter_state = state.cart.filter((item) => item !== state[action.index])

            return {
                ...state,
                cart: [...filter_state]
            }

        case 'DELETE_FROM_CART_FAILED':
            return {
                ...state,
                error: action.error
            }
        case 'CREATE_ORDER_SUCCESS':
            return {
                ...state,
                order: action.current_order
            }
        case 'CREATE_ORDER_FAILED':
            return {
                ...state,
                error: action.error
            }
        case 'CREATE_PRODUCT_SUCCESS':
            return {
                ...state,
                products: [...state.products, action.product]
            }

        case 'CREATE_PRODUCT_FAILED':
            return {
                ...state,
                error: action.error
            }
        case 'DELETE_PRODUCT_SUCCESS':
            const filter_products = state.products.filter((item) => item !== state[action.index])

            return {
                ...state,
                products: [...filter_products]
            }
        case 'DELETE_PRODUCT_FAILED':
            return {
                ...state,
                error: action.error
            }

        case 'FETCH_ORDERS_SUCCESS':
            return {
                ...state,
                orders: action.orders
            }
        case 'FETCH_ORDERS_FAILED':
            return {
                ...state,
                error: action.error
            }

        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.products
            }
        case 'FETCH_PRODUCTS_FAILED':
            return {
                ...state,
                error: action.error
            }

        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                product: [action.product]
            }
        case 'FETCH_PRODUCT_FAILED':
            return {
                ...state,
                error: action.error
            }
        default:
            return state

    }
}

export default planReducer