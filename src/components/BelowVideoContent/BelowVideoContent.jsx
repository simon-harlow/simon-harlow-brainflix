import React from 'react'
import './BelowVideoContent.scss'
import Comments from '../Comments/Comments'
import NextVideos from '../NextVideos/NextVideos'
import MainVideoDetails from '../MainVideoDetails/MainVideoDetails'

export default function BelowVideoContent() {
    return (
        <>
            <section className='below-video-content'>
                <div className='below-video-content__left'>
                    <MainVideoDetails />
                    <Comments />
                </div>
                <div className='below-video-content__right'>
                    <NextVideos />
                </div>
            </section>
        </>
    )
}
