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

// TODO: below function is a repeat from comments component
function timeAgoDate(date) {
    const commentTime = new Date(date);
    const nowTime = new Date();

    const timeDifference = (nowTime - commentTime);
    let timeAgo = "";

    if (timeDifference < 5000) {
        timeAgo = "just now";
    } else if (timeDifference < 60000){
        timeAgo = `${Math.round(timeDifference / 1000)} seconds ago`;
    } else if (timeDifference < 120000){
        timeAgo = `a minute ago`;
    } else if (timeDifference < 3600000) {
        timeAgo = `${Math.round(timeDifference / 60000)} minutes ago`;
    } else if (timeDifference < 7200000) {
        timeAgo = `an hour ago`;
    } else if (timeDifference < 86400000) {
        timeAgo = `${Math.round(timeDifference / 3600000)} hours ago`;
    } else {
        timeAgo = commentTime.toLocaleDateString();
    }
    return timeAgo;
}

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
                                    <p className="main-video__info-date">{timeAgoDate(mainVideo.timestamp)}</p>
                                </div>
                                <div className="main-video__info-right">
                                    <div className="main-video__info-views">
                                        <img className="main-video__info-icon--views" src={ViewsIcon} alt="views icon" />
                                        <p className="main-video__info-count">{mainVideo.views}</p>
                                    </div>
                                    <div className="main-video__info-likes">
                                    <img className="main-video__info-icon" src={LikesIcon} alt="likes icon" />
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
