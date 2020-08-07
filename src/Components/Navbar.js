import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import style from '../css/Navbar.css'
import glista from '../images/logo.svg'
import korpa from '../images/korpa.png'
import { Link } from 'react-router-dom'
import Cart from './Cart'
class Navbar extends Component {

    render() {
        return (
            <body>
                <div className="navbar-wrapper">

                    <nav className="heder">
                        <Link to="/"><img className="logo" src={glista} ></img></Link>
                        <ul class="nav-links">
                            <Link to="/"><li><a href="#">HOME</a></li></Link>
                            <Link to="/products"><li><a href="#">PRODUCTS</a></li></Link>
                            <Link to="/contact"><li><a href="#">CONTACT</a></li></Link>
                            <Link to="/galerija"><li><a href="#">GALLERY</a></li></Link>
                        </ul>

                        {this.props.state.payments.cart.length == 0 ? '' : <Link to="/cart">
                            <div className="korpa">
                                <img src={korpa} class="korpa1"></img>
                            </div>
                        </Link>}

                    </nav>
                </div >
            </body>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

export default withRouter(connect(mapStateToProps, {})(Navbar));