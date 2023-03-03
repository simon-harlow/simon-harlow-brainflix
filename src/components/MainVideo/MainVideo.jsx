import React from 'react'
import { useParams } from 'react-router-dom'

import './MainVideo.scss'

export default function MainVideo({ videoData }) {

    const { videoId } = useParams();

    const currentVideo = videoData.find((video) => {
        return video.id === (videoId || videoData[0].id);
    });

    return (
        <section className="main-video">
            <div className="main-video__video-container">
                <video className="main-video__video" src="" width="100%" height="240" poster={currentVideo.image} controls/>
            </div>
        </section>
    )
}
