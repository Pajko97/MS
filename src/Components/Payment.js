import React, { Component } from 'react'
import style from '../css/Payment.css'
import box from '../images/box.png'
import card from '../images/card.png'
import paypal from '../images/paypal.png'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
class Payment extends Component {
    render() {
        return (
            <div class="payment_wrapper">
                <div class="payment_body">
                    <div className="payment_option">
                        <Link to='/info'>
                            <img src={box}></img>
                            <p>Placanje pouzecu</p>
                        </Link>
                    </div>
                    <div className="payment_option">
                        <Link to='/info'>
                            <img src={paypal}></img>
                            <p>Plati sa PayPal nalogom</p>
                        </Link>
                    </div>
                    <div className="payment_option">
                        <img src={card}></img>
                        <p>Plati sa kreditnom karticom</p>
                    </div>

                </div >
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

export default withRouter(connect(mapStateToProps, {})(Payment));