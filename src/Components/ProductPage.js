import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from '../actions/cartActions'
import { fetchProduct, fetchProducts } from '../actions/productsActions'
import ribica from '../images/SVG/ribica.svg'
class ProductPage extends Component {
    constructor() {
        super();
        this.state = {
            colors: [],
            current_image: '',
            current_index: 0
        }
    }
    async componentDidMount() {
        await this.props.fetchProducts()
    }

    changeImageAndBar(color, index) {
        this.setState({
            current_image: color,
            current_index: 0
        })

    }

    addToCart(e, product) {
        e.preventDefault()
        let object = {
            item: product,
            quantity: e.target.elements.quantity.value,
            colors: this.state.colors
        }
        this.props.addToCart(object)
        alert('Proizvod dodat u korpu')
    }
    colorChecked(e, color) {
        let color_checked = e.target.name
        let bool = e.target.checked
        let remove_item = (arr, item) => {
            let index = arr.indexOf(item)
            if (index > -1) {
                arr.splice(index, 1)
            }
            return arr
        }

        if (bool) {
            this.setState({
                colors: [...this.state.colors, color_checked]
            })
        } else {
            let result = remove_item(this.state.colors, color_checked)
            this.setState({
                colors: result
            }, () => console.log(result))
        }

    }
    render() {
        let found = {}
        let search = this.props.state.payments.products.map((prod) => {
            let str = this.props.location.pathname.split('/')
            console.log(str)
            console.log(found)
            if (prod._id === str[2]) {
                found = prod
                console.log(Object.keys('Pakiiii', found, prod))
            } else {
            }
        })
        return (
            <div className="product_info_wrapper">
                <div className="product_info_container">
                    <form onSubmit={(e) => this.addToCart(e, found)}>
                        <div className="item_info">
                            <h1 className="product_header">{found.name}</h1>
                            <p>{found.description}</p>
                            <img className="product_image" src={ribica}></img>
                            {found.images ? <div className={`current_bar current_bar_${Object.keys(found.images[this.state.current_index])}`}></div> : <div></div>}
                            <div className="" ></div>
                        </div>
                        <div className="colors_pallete">
                            {found?.colors && found.colors.map((color) => {
                                return (
                                    <div className="color_check_container">
                                        <label onClick={() => this.changeImageAndBar(color)} htmlFor={`${color}`}><div className={`color_box color_box_${color}`}></div></label>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="quantity_container">
                            <label htmlFor="quantity">Quantity :</label>
                            <input type="text" name="quantity"></input>
                        </div>
                        <button type="submit" className="product_button" style={{ textAlign: 20 }}>ADD TO CART</button>
                    </form>
                </div>
            </div >
        )
    }

}

const mapStateToProps = state => {
    return {
        state: state
    };
};

export default withRouter(connect(mapStateToProps, { fetchProduct, fetchProducts, addToCart })(ProductPage));
