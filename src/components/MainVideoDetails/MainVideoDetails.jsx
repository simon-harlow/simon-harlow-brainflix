import React from 'react'

import './MainVideoDetails.scss'
import ViewsIcon from "../../assets/images/views.svg"
import LikesIcon from "../../assets/images/likes.svg"
import timeAgoDate from '../Utils/timeAgoDate'


export default function MainVideoDetails( {currentVideoData} ) {
    return (
        <section className="video-details">
            <div className="video-details__title-container">
                <h1 className="video-details__title">{currentVideoData.title}</h1>
            </div>
            <div className="video-details__info">
                <div className="video-details__info-left">
                    <h4 className="video-details__info-channel">By {currentVideoData.channel}</h4>
                    <p className="video-details__info-date">{timeAgoDate(currentVideoData.timestamp)}</p>
                </div>
                <div className="video-details__info-right">
                    <div className="video-details__info-views">
                        <img className="video-details__info-icon--views" src={ViewsIcon} alt="views icon" />
                        <p className="video-details__info-count--views">{currentVideoData.views}</p>
                    </div>
                    <div className="video-details__info-likes">
                    <img className="video-details__info-icon" src={LikesIcon} alt="likes icon" />
                        <p className="video-details__info-count">{currentVideoData.likes}</p>
                    </div>
                </div>
            </div>
            <div className="video-details__description">
                <p className="video-details__description-text">{currentVideoData.description}</p>
            </div>
        </section>
    )
}
