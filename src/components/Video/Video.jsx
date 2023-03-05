import React from 'react'

import './Video.scss'

export default function Video( {changeMainVideo, id, title, channel, image} ) {

    const clickHandler = () => {
        changeMainVideo(id);
    };

    return (
        <div className="next-videos-list" onClick={clickHandler} id={id} key={id}>
            <div className="next-videos-list__left-container">
                <img className="next-videos-list__image" src={image} alt={title}/>
            </div>
            <div className="next-videos-list__right-container">
                <h4 className="next-videos-list__title">{title}</h4>
                <p className="next-videos-list__channel">{channel}</p>
            </div>
        </div>
    )
}
