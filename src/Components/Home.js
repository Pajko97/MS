import React, { Component } from 'react'
import style from '../css/Home.css'
import Logo from '../images/logo.svg'
import arrowDown from '../images/arrowdown.png'
import $ from 'jquery'
class Home extends Component {


    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.location.pathname == '/') {
            console.log($('.heder').toggle('display'))
        }
    }
    goToSite() {
        let props = this.props;
        $('.heder').toggle('display')
        props.history.push('/products')
    }
    render() {
        return (
            <div class="home_wrapper">
                <div class="home_main">
                    <img className="logo" src={Logo}></img>
                    <h1 id="sd">We are producing and shipping best quality baits for all kinds of fishing</h1>
                    <img className="arrow" src={arrowDown}></img>
                    <div className="animation_container">
                        <figure onClick={() => this.goToSite()} class="circle">
                            <div class="mask-a">
                                <div class="bubble"></div>
                                <div class="fish-green"></div>
                                <div class="fish-red"></div>
                                <div class="fish-yellow"></div>
                                <div class="fishing">
                                    <div class="hook"></div>
                                    <div class="rope"></div>
                                </div>
                            </div>
                        </figure>
                    </div>


                </div>
            </div>
        )
    }
}


export default Home
