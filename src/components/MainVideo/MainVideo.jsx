import React from 'react'
import './MainVideo.scss'
import VideoDetails from "../../data/video-details.json";
// import ViewsIcon from "../../assets/images/views.svg"
// import LikesIcon from "../../assets/images/likes.svg"

const videoDetails = VideoDetails;

const [getPosterVideo] = videoDetails.filter(
	(video) => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8"
);

const mainVideo = getPosterVideo;

export default function MainVideo() {
  return (
        <>
            <section className="main-video">
                <div className="main-video__video-container">
                    <video className="main-video__video" src="" width="100%" height="240" poster={mainVideo.image} controls/>
                </div>
            </section>
        </>
    )
}
