import React from 'react'
import { useState } from "react";

import VideoDetails from "../../data/video-details.json";
import NextVideosList from "../../data/videos.json";

import MainVideo from '../MainVideo/MainVideo';
import BelowVideoContent from '../BelowVideoContent/BelowVideoContent';

export default function Main() {

const videoDetails = VideoDetails;
const nextVideoList = NextVideosList;

const [videoData, setVideoData] = useState(videoDetails);
const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

function changeVideo(id) {
    const selectedVideo = videoDetails.find((video) => {
        console.log(`this video ${id} has been selected`);
        return video.id === id;
    })

    setCurrentVideo(selectedVideo);
}

    return (
        <>
            <MainVideo currentVideo={currentVideo} />
            <BelowVideoContent currentVideoDetails={currentVideo}/>
        </>
    )
}
