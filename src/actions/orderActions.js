const dataQ = function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
};


export const addOrder = (data) => dispatch => {
    fetch('https://floating-atoll-46583.herokuapp.com/api/orders/create', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    })
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch({
                type: 'CREATE_ORDER_SUCCESS',
                order: res
            })
            alert('Narudzbina uspesno poslata!')
        })
        .catch(err => {
            dispatch({
                type: 'CREATE_ORDER_FAILED',
                error: err
            })
            alert('Problem sa slanjem narudzbine, molimo vas pokusajte ponovo kasnije.')
        })
}

export const deleteOrder = (data) => dispatch => {
    fetch(`https://floating-atoll-46583.herokuapp.com/api/orders/${data}`, {
        method: 'DELETE'
    })
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch({
                type: 'DELETE_ORDER_SUCCESS',
                order: res
            })
        })
        .catch(err => {
            dispatch({
                type: 'DELETE_ORDER_FAILED',
                error: err
            })
        })
}

export const fetchOrders = () => dispatch => {
    fetch('https://floating-atoll-46583.herokuapp.com/api/orders')
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch({
                type: 'FETCH_ORDERS_SUCCESS',
                orders: res
            })
        })
        .catch(err => {
            dispatch({
                type: 'FETCH_ORDERS_FAILED',
                error: err
            })
        })
}

export const sendForm = (data) => dispatch => {
    fetch('https://floating-atoll-46583.herokuapp.com/api/contact', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch({
                type: "SEND_CONTACT_SUCCESS"
            })
        })
        .catch(err => {
            dispatch({
                type: "SEND_CONTACT_FAILED"
            })
        })
} 