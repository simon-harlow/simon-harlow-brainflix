import React from 'react'
import './MainVideo.scss'
import VideoDetails from "../../data/video-details.json";
import ViewsIcon from "../../assets/images/views.svg"
import LikesIcon from "../../assets/images/likes.svg"

const videoDetails = VideoDetails;

const [getPosterVideo] = videoDetails.filter(
	(video) => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8"
);

const mainVideo = getPosterVideo;

export default function MainVideo() {
  return (
        <>
            <main>
                <section className="main-video">
                    <video className="main-video__video" src="" width="100%" height="240" poster={mainVideo.image} controls/>
                        <div className="main-video__details">
                            <div className="main-video__title-container">
                                <h1 className="main-video__title">{mainVideo.title}</h1>
                            </div>
                            <div className="main-video__info">
                                <div className="main-video__info-left">
                                    <h4 className="main-video__info-channel">By {mainVideo.channel}</h4>
                                    <p className="main-video__info-date">{mainVideo.timestamp}</p>
                                </div>
                                <div className="main-video__info-right">
                                    <div className="main-video__info-views">
                                        <img className="main-video__info-icon" src={ViewsIcon} alt="views icon" />
                                        <p className="main-video__info-count">{mainVideo.views}</p>
                                    </div>
                                    <div className="main-video__info-likes">
                                    <img className="main-video__info-icon" src={LikesIcon} alt="Likes icon" />
                                        <p className="main-video__info-count">{mainVideo.likes}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="main-video__description">
                                <p className="main-video__description-text">{mainVideo.description}</p>
                            </div>
                        </div>
                </section>
            </main>
        </>
    )
}
