import React, { Component } from 'react'
import styles from '../css/Gallery.css'
import magea from '../images/cont_img.jpg'

class Galery extends Component {
    render() {
        return (
            <div className="gallery_wrapper">
                <div className="gallery_div_left">
                    <h2>Latest</h2>
                    <div>
                        <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" placeholder="http://via.placeholder.com/500x500" width={600} height={400} controls={true}></video>
                        <p className="latest video_description">This video is made on 28/5 fishing on river Danube. We had to wait all day to catch some fish. Fish love our baits</p>
                    </div>
                </div>

                <div className="right_wrapper">
                    <div className="gallery_nav">
                        <div className="video_link">Photos</div>
                        <div className="photo_link">Videos</div>
                    </div>
                    <div className="gallery_div_right">

                        <div className="video_container">
                            <h3>Danube adventures with Moonshine</h3>
                            <img src={magea}></img>
                        </div>

                        <div className="video_container">
                            <h3>Danube adventures with Moonshine</h3>
                            <img src={magea}></img>
                        </div>

                        <div className="video_container">
                            <h3>Danube adventures with Moonshine</h3>
                            <img src={magea}></img>
                        </div>

                        <div className="video_container">
                            <h3>Danube adventures with Moonshine</h3>
                            <img src={magea}></img>
                        </div>

                        <div className="video_container">
                            <h3>Danube adventures with Moonshine</h3>
                            <img src={magea}></img>
                        </div>

                        <div className="video_container">
                            <h3>Danube adventures with Moonshine</h3>
                            <img src={magea}></img>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Galery