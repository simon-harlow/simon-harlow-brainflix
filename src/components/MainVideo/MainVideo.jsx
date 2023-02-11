import React from 'react'
import './MainVideo.scss'

export default function MainVideo({ currentVideo }) {
    return (
        <>
            <section className="main-video">
                <div className="main-video__video-container">
                    <video className="main-video__video" src="" width="100%" height="240" poster={currentVideo.image} controls/>
                </div>
            </section>
        </>
    )
}
