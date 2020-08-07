import React, { Component } from 'react'
import style from '../css/Contact.css'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { sendForm } from '../actions/orderActions'

class Contact extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    collectAndSend(e) {
        e.preventDefault()


        let obj = {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            text: e.target.elements.text.value
        }
        this.props.sendForm(obj)
    }

    render() {
        return (
            <div class="contact_wrapper">
                <form onSubmit={(e) => this.collectAndSend(e)}>
                    <div class="contact_div">
                        <h1>Contact us by filling the form below</h1>
                        <input type="text" placeholder="Name" id="inputcon" name="name"></input>
                        <input type="text" placeholder="Email" id="inputcon" name="email"></input>
                        <textarea placeholder="Message" id="con_textarea" name="text"></textarea>
                        <button type="submit" class="contact_button">Send</button>
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

export default withRouter(connect(mapStateToProps, { sendForm })(Contact));