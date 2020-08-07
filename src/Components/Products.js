import React, { Component } from 'react'
import style from '../css/Products.css'
import { Link } from 'react-router-dom'
import vector from '../images/zeleni_zid.svg'
import { fetchProducts } from '../actions/productsActions'
import Product from './Product'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {

        let test_data_real = this.props.state.payments.products

        return (
            <div class="products_wrapper">
                <div class="products_first">
                    {test_data_real.map((obj, i) => <Link className="product_bg" to={`/products/${obj._id}`}>
                        <Product product_data={obj} i={i} />
                    </Link>)}
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

export default withRouter(connect(mapStateToProps, { fetchProducts })(Products));