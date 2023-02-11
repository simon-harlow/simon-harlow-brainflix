import React from 'react'
import './BelowVideoContent.scss'
import Comments from '../Comments/Comments'
import NextVideos from '../NextVideos/NextVideos'
import MainVideoDetails from '../MainVideoDetails/MainVideoDetails'

export default function BelowVideoContent( {currentVideoId, currentVideoDetails, changeMainVideo} ) {
    return (
        <>
            <section  className='below-video-content'>
                <div className='below-video-content__container'>
                    <div className='below-video-content__left'>
                        <MainVideoDetails currentVideoDetails={currentVideoDetails} />
                        <Comments currentVideoDetails={currentVideoDetails}/>
                    </div>
                    <div className='below-video-content__right'>
                        <NextVideos
                            changeMainVideo={changeMainVideo}
                            currentVideoId={currentVideoId}
                        />
                    </div>
                </div>
                </section>
        </>
    )
}