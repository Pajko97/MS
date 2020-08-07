import { Action } from "history"

const dataQ = function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
};

export const fetchProducts = () => dispatch => {
    fetch('https://floating-atoll-46583.herokuapp.com/api/products')
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch({
                type: "FETCH_PRODUCTS_SUCCESS",
                products: res
            })
        })
        .catch(err => {
            dispatch({
                type: "FETCH_PRODUCTS_FAILED",
                error: err
            })
        })
}


export const fetchProduct = (product_id) => dispatch => {
    fetch(`https://floating-atoll-46583.herokuapp.com/api/products/?id=${product_id}`)
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch({
                type: "FETCH_PRODUCT_SUCCESS",
                product: res
            })
        })
        .catch(err => {
            dispatch({
                type: "FETCH_PRODUCT_FAILED",
                error: err
            })
        })
}

export const createProduct = (product) => dispatch => {
    fetch('https://floating-atoll-46583.herokuapp.com/api/products/create', {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch({
                type: "CREATE_PRODUCT_SUCCESS",
                product: res
            })
        })
        .catch(err => {
            dispatch({
                type: "CREATE_PRODUCT_FAILED",
                error: err
            })
        })
}

export const deleteProduct = (product_id) => dispatch => {
    fetch(`https://floating-atoll-46583.herokuapp.com/api/products?product_id=${product_id}`, {
        method: "DELETE"
    })
        .then(res => {
            return res
        })
        .then(res => {
            dispatch({
                type: "DELETE_PRODUCT_SUCCESS",
                index: res
            })
        })
        .catch(err => {
            dispatch({
                type: "DELETE_PRODUCT_FAILED",
                error: err
            })
        })
}