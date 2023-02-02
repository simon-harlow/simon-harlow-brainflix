import React from 'react'
import './MainVideo.scss'
import VideoDetails from "../../data/video-details.json";

const videoDetails = VideoDetails;

const [getPosterVideo] = videoDetails.filter(
	(video) => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8"
);

const mainVideo = getPosterVideo;

export default function MainVideo() {
  return (
        <>
            <main>
                <section className="main-video__container">
                    <video className="main-video__video" src="" width="100%" height="240" poster={mainVideo.image} controls/>
                    <div className="main-video__details">
                        <div className="main-video__details">
                            <div className="main-video__details-title">
                                <h1 className="main-video__details-title--XYZ">{mainVideo.title}</h1>
                            </div>
                            <div className="main-video__details-data">
                                <div className="main-video__details-data--left">
                                    <h4 className="main-video__details-channel">{mainVideo.channel}</h4>
                                    <p className="main-video__details-date">{mainVideo.timestamp}</p>
                                </div>
                                <div className="main-video__details-data--right">
                                    <p className="main-video__details-stats">{mainVideo.views}</p>
                                    <p className="main-video__details-stats">{mainVideo.likes}</p>
                                </div>
                            </div>
                            <div className="main-video__details-description">
                                <p className="main-video__details-description--XYZ">{mainVideo.description}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
