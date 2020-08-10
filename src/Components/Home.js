import React, { Component } from 'react'
import style from '../css/Home.css'
import Logo from '../images/logo.svg'
class Home extends Component {
    render() {
        return (
            <div class="home_wrapper">
                <div class="home_main">
                    <img src={Logo}></img>
                    <h1 id="sd">We are producing and shipping best quality baits for all kinds of fishing</h1>
                </div>
                <div className="animation_container">
                    <figure class="circle">
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
        )
    }
}


export default Home
