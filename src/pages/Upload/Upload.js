import React from "react";

import "./Upload.scss";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import Publish from "../../assets/images/publish.svg";

export default function Upload() {
	function handleSubmit(event) {
		event.preventDefault();
		alert("Video upload successful!");
		window.location.href = "/";
	}

	return (
		<main className="upload-container">
			<section className="upload">
				<div className="upload__title">
					<h1 className="upload__title-text">Upload Video</h1>
				</div>
				<form
					className="upload-form"
					id="upload-form"
					onSubmit={handleSubmit}
				>
					<div className="upload-form__thumbnail-container">
						<label className="upload-form__label upload-form__label--thumbnail" htmlFor="thumbnail">
							VIDEO THUMBNAIL
						</label>
						<img
							className="upload-form__thumbnail"
							src={VideoThumbnail}
							alt="bike handlebars"
							name="thumbnail"
							id="thumbnail"
						/>
					</div>
					<div className="upload-form__input-container">
						<label className="upload-form__label" htmlFor="title">
							TITLE YOUR VIDEO
						</label>
						<input
							className="upload-form__input"
							type="text"
							name="title"
							id="title"
							maxlength="40"
							placeholder="Add a title to your video"
						/>
						<label className="upload-form__label" htmlFor="description">ADD A VIDEO DESCRIPTION
						</label>
						<textarea
							className="upload-form__input upload-form__input--textarea"
							name="description"
							id="description"
							maxLength="400"
							placeholder="Add a description to your video"
						/>
					</div>
					<div className="upload-form__button-container">
						<button
							className="upload-form__publish-button"
							type="submit"
							id="submit"
						>
							<img
								className="upload-form__publish-button-img"
								src={Publish}
								alt="publish icon"
							/>
							<span className="upload-form__publish-button-text">
								PUBLISH
							</span>
						</button>
						<button
							className="upload-form__cancel-button"
							type="button"
							id="cancel"
						>
							<img
								className="upload-form__cancel-button-img"
								src={Publish}
								alt="publish icon"
							/>
							<span className="upload-form__cancel-button-text">
								CANCEL
							</span>
						</button>
					</div>
				</form>
			</section>
		</main>
	);
}
