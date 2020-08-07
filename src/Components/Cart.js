import React, { Component } from 'react'
import style from '../css/Cart.css'
import { Modal } from 'react-responsive-modal'
import history from '../history'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Cart extends Component {
    constructor() {
        super();

        this.state = {
            open: false
        }
    }

    onOpenModal = () => {
        this.setState({
            open: true
        })
    }

    onCloseModal = () => {
        this.setState({
            open: false
        })
    }

    saveForPayment(e) {
        e.preventDefault()
        let props = this.props;
        props.history.push('/naruci')
    }

    render() {
        let cart_items = this.props.state.payments.cart
        let total = 0
        let add_on
        let content
        let calculate_total = cart_items.map((data) => {
            add_on = data.item.price * data.quantity
            total = total + add_on
        })
        cart_items.length == 0 ? content = (
            <div className="empty_cart">
                <p>Korpa je prazna, dodajte neki proizvod.</p>
            </div>
        ) : content = (
            <form onSubmit={(e) => this.saveForPayment(e)}>
                <div class="cart_body">
                    {cart_items.map((data) => {
                        return (
                            <div class="first_input">
                                <div className="product_name_wrapper">
                                    <label htmlFor="product_name">Ime proizvoda</label>
                                    <h2 name="product_name">{data.item.name}</h2>

                                </div>
                                <div className="product_quantity_wrapper">
                                    <label htmlFor="product_quantity">Kolicina</label>
                                    <h2 name="product_quantity">{data.quantity} kom</h2>
                                </div>

                                <div className="product_colors_wrapper">
                                    <label htmlFor="product_colors">Boje</label>
                                    {data.colors.map((color) => {
                                        return (
                                            <div className={`color color_${color}`}></div>
                                        )
                                    })}
                                </div>

                                <div className="product_price_wrapper">
                                    <label htmlFor="product_price">Cena</label>
                                    <h2 name="product_price">{data.item.price}RSD/kom</h2>
                                </div>

                                <div className="product_total_wrapper">
                                    <label htmlFor="product_total">Ukupno</label>
                                    <h2 name="product_total">{Math.round(data.item.price * data.quantity)}</h2>
                                </div>
                            </div>
                        )
                    })}
                    <div className="total">
                        <h2><span>Za naplatu</span> : {total}RSD</h2>
                        <button type="submit">Naruci</button>

                    </div>
                </div>
            </form>
        )


        return (
            <div class="cart_wrapper">
                {content}
            </div >
        )
    }
}




const mapStateToProps = state => {
    return {
        state: state
    };
};

export default withRouter(connect(mapStateToProps, {})(Cart));