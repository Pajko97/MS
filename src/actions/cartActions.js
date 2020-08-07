export const addToCart = (data) => dispatch => {
    dispatch({
        type: 'ADD_TO_CART_SUCCESS',
        item: data
    })
}

export const deleteFromCart = (index) => dispatch => {
    dispatch({
        type: 'DELETE_FROM_CART_SUCCESS',
        index: index
    })
}