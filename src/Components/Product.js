import React, { Component } from 'react'
import style from '../css/Product.css'
import { Link } from 'react-router-dom'
import { fetchProduct } from '../actions/productsActions'
import { addToCart } from '../actions/cartActions';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Product extends Component {
    constructor() {
        super();
    }


    addToCart() {
        let object = {
            product_name: this.props.product_data.name
        }
    }

    render() {

        let product = this.props.product_data
        let first_image = ''
        if (product.images.length > 0) {
            first_image = product.images[0][Object.keys(product.images[0])]
        }


        return (
            <div className="product">
                <img className="product_image_big" src={product.images.length > 0 ? first_image : "http://via.placeholder.com/500x350"}></img>
                <h1 onClick={() => this.props.addToCart(product)} className="product_name" style={{ textAlign: 20 }}>{product.name}</h1>
            </div >


        )
    }
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

export default withRouter(connect(mapStateToProps, { fetchProduct, addToCart })(Product));
