import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchProduct } from '../actions/productsActions'
import { addToCart } from '../actions/cartActions';
import { addOrder } from '../actions/orderActions'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import style from '../css/Info.css'
class Info extends Component {
    constructor() {
        super();
    }


    addToCart() {
        let object = {
            product_name: this.props.product_data.name
        }
    }

    placeOrder(e) {
        e.preventDefault()
        let products_ordered = this.props.state.payments.cart
        let object = {
            first_name: e.target.first_name.value,
            last_name: e.target.elements.last_name.value,
            contact_phone: e.target.elements.phone.value,
            address: {
                street_name: e.target.elements.street_name.value,
                country: e.target.elements.country.value,
                city: e.target.elements.city.value,
                zip_code: e.target.elements.zip_code.value,
                special_note: e.target.elements.special_note.value
            },
            products_ordered: products_ordered,
            ordered_on: new Date()
        }
        this.props.addOrder(object)
    }

    render() {
        let product = this.props.state.payments.product
        console.log(product)
        return (
            <div className="order_info_wrapper">
                <div className="order_info_form">
                    <form onSubmit={(e) => this.placeOrder(e)}>
                        <h1>Please fill out order information form</h1>

                        <input type="text" name="first_name" placeholder="First Name"></input>
                        <input type="text" name="last_name" placeholder="Last name"></input>
                        <input type="text" name="phone" placeholder="Contact phone" ></input>
                        <input type="text" name="street_name" placeholder="Street name"></input>
                        <input type="text" name="city" placeholder="City"></input>
                        <input type="text" name="zip_code" placeholder="ZIP code"></input>
                        <input type="text" name="country" placeholder="Country"></input>
                        <textarea name="special_note" placeholder="Special note"></textarea>
                        <button type="submit">SEND ORDER</button>
                    </form>
                </div>
            </div>



        )
    }
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

export default withRouter(connect(mapStateToProps, { addOrder })(Info));
