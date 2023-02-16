import React from 'react'

import './Upload.scss'
import VideoThumbnail from '../../assets/images/Upload-video-preview.jpg'
import Publish from '../../assets/images/publish.svg'

export default function Upload() {
    return (
    <>
        <section className="upload">
            <div className="upload__title">
                <h1 className="upload__title-text">Upload Video</h1>
            </div>
            <form className="upload__form" id="upload-form">
                <label className="upload__label" htmlFor="thumbnail">VIDEO THUMBNAIL</label>
                <img className="upload__thumbnail" src={VideoThumbnail} alt="bike handlebars" name="thumbnail" id="thumbnail"/>
                <label className="upload__label" htmlFor="title">TITLE YOUR VIDEO</label>
                <input className="upload__input" type="text" name="title" id="title" maxlength="40" placeholder="Add a title to your video" />
                <label className="upload__label" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                <textarea className="upload__input upload__input--textarea" name="description" id="description" maxlength="200" placeholder="Add a description to your video" />
                <button className="upload__publish-button" type="submit" id="submit">
                    <img className="upload__publish-button-img" src={Publish} alt="publish icon" />
                    <span className="upload__publish-button-text">PUBLISH</span>
                </button>
                <button className="upload__cancel-button" type="button" id="cancel">
                    <img className="upload__cancel-button-img" src={Publish} alt="publish icon" />
                    <span className="upload__cancel-button-text">CANCEL</span>
                </button>
            </form>
        </section>
    </>
    )
}
