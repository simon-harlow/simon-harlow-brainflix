import React from 'react'
import './MainVideoDetails.scss'
import VideoDetails from "../../data/video-details.json";
import ViewsIcon from "../../assets/images/views.svg"
import LikesIcon from "../../assets/images/likes.svg"

const videoDetails = VideoDetails;

const [getPosterVideo] = videoDetails.filter(
	(video) => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8"
);

const mainVideo = getPosterVideo;

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
        timeAgo = commentTime.toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'});
    }
    return timeAgo;
}

export default function MainVideoDetails() {
    return (
        <>
            <section className="video-details">
                <div className="video-details__title-container">
                    <h1 className="video-details__title">{mainVideo.title}</h1>
                </div>
                <div className="video-details__info">
                    <div className="video-details__info-left">
                        <h4 className="video-details__info-channel">By {mainVideo.channel}</h4>
                        <p className="video-details__info-date">{timeAgoDate(mainVideo.timestamp)}</p>
                    </div>
                    <div className="video-details__info-right">
                        <div className="video-details__info-views">
                            <img className="video-details__info-icon--views" src={ViewsIcon} alt="views icon" />
                            <p className="video-details__info-count--views">{mainVideo.views}</p>
                        </div>
                        <div className="video-details__info-likes">
                        <img className="video-details__info-icon" src={LikesIcon} alt="likes icon" />
                            <p className="video-details__info-count">{mainVideo.likes}</p>
                        </div>
                    </div>
                </div>
                <div className="video-details__description">
                    <p className="video-details__description-text">{mainVideo.description}</p>
                </div>
            </section>
        </>
    )
}
