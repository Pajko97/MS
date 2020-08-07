import React, { Component } from 'react'
import style from '../css/ProductInsert.css'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProduct, fetchProducts, deleteProduct } from '../actions/productsActions'
import { fetchOrders } from '../actions/orderActions'
import ImageUploader from 'react-images-upload';

class ProductInsert extends Component {
    constructor() {
        super();
        this.state = {
            colors: [],
            pictures: [],
            product_images: []
        }
    }

    componentDidMount() {
        this.props.fetchOrders()
        this.props.fetchProducts()
    }

    removeProduct(id) {
        this.props.deleteProduct(id)
    }

    async onUpload(e) {
        let file = e.target.files[0]
        let file_name = file.name
        let split = file_name.split('_')
        let color_string = split[1].split('.')
        let uploaded_color = color_string[0]
        let change_done = false


        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });

        let element = await toBase64(file)


        if (uploaded_color == 'blue' || uploaded_color == 'red' || uploaded_color == 'green' || uploaded_color == 'yellow' || uploaded_color == 'purple' || uploaded_color == 'pink' || uploaded_color == 'black') {
            this.setState({
                product_images: [...this.state.product_images, { [uploaded_color]: element }],
                colors: [...this.state.colors, uploaded_color]
            })
        }

    }

    addColor(e, color) {
        if (!e.target.checked) {
            let index = this.state.colors.indexOf(color)
            let array = this.state.colors
            array.splice(index, 1)
            this.setState({
                colors: array
            })
        } else {
            let colors = [...this.state.colors, color]
            this.setState({
                colors: colors
            })
        }
    }

    collectAndSend(e) {
        e.preventDefault()
        let date_string = new Date().toString()
        console.log(this.state.product_pictures)
        let product = {
            name: e.target.elements.product_name.value,
            description: e.target.elements.product_description.value,
            price: e.target.elements.product_price.value,
            colors: this.state.colors,
            created: date_string,
            images: this.state.product_images
        }
        this.props.createProduct(product)
    }


    render() {
        let orders = []
        let products = []
        if (this.props.state.payments.orders.length !== 0 && this.props.state.payments.products !== 0) {
            orders = this.props.state.payments.orders
            products = this.props.state.payments.products
        }

        return (
            <div class="producti_wrapper">
                <form onSubmit={(e) => this.collectAndSend(e)}>
                    <div class="left-div">
                        <div></div>
                        <h1 id="sd"> 1.Detalji o proizvodu</h1>
                        <div class="left_div">
                            <p>Ime mamca</p>
                            <input type="text" id="input1" name="product_name"></input>
                            <p>Opis mamca</p>
                            <textarea type="text" id="input2" name="product_description"></textarea>
                        </div>

                        <div class="input3_div">
                            <label>Cena (din) po komadu</label>
                            <input type="text" id="last_input" name="product_price"></input>
                        </div>




                    </div>

                    <div class="right-div">
                        <h1 id="sd2">2.Dodaj slike</h1>
                        <input onChange={(e) => this.onUpload(e)} type="file"></input>
                        {this.state.colors.map((color) => {
                            return (
                                <div className={`color color_${color}`}></div>
                            )
                        })}
                        <button type="submit" class="productinsert_button">3. Dodaj proizvod</button>
                    </div >

                    <div className="dashboard">
                        <div className="orders">
                            <h1 className="orders_header">Narudzbine</h1>
                            {orders.map((order) => {
                                let str = order.ordered_on
                                return (
                                    <div className="order">
                                        <p className="order_date">{str}</p>
                                        <p className="order_name">Ime : <strong>{order.first_name} {order.last_name}</strong></p>
                                        <p className="order_products">Naruceni proizvodi:  {order.products_ordered.map((product) => <strong>{product.product_name + "  "}</strong>)}</p>

                                        <p className="order_phone">Kontakt telefon: <strong>{order.contact_phone}</strong> </p>
                                        <p className="order_address">Ulica i broj:{order.address.address} <br></br>
                                            Grad : {order.address.city} <br></br>
                                            Drzava : {order.address.country} <br></br>
                                            Postanski broj : {order.address.zip_code}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className="dashboard_products">
                        <h1 className="products_list_header">Proizvodi</h1>
                        <div className="products_list">
                            {products.map((product) => {
                                return (
                                    <div className="product_container">
                                        <div className="product_name_container">
                                            <label htmlFor="_product_name"><strong>Ime</strong></label>
                                            <p name="_product_name">{product.name}</p>
                                        </div>

                                        <div className="product_color_container">
                                            <label htmlFor="_product_name"><strong>Boje</strong></label>
                                            <div className="_product_colors" name="_product_colors">{product.colors.map((color) => <div className={`color color_${color}`}></div>)}</div>
                                        </div>

                                        <div className="product_price_container">
                                            <label htmlFor="_product_price"><strong>Cena/kom</strong></label>
                                            <p className="_product_price">{product.price}</p>
                                        </div>

                                        <div className="remove_product_container">
                                            <button type="button" name="remove_product" onClick={() => this.removeProduct(product._id)}>Ukloni</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

export default withRouter(connect(mapStateToProps, { createProduct, fetchOrders, fetchProducts, deleteProduct })(ProductInsert));