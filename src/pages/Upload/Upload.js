import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../../components/Utils/const";

import "./Upload.scss";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import Publish from "../../assets/images/publish.svg";

export default function Upload() {

	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [formError, setFormError] = useState("");

		const handleChangeTitle = (event) => {
		setTitle(event.target.value);
	};

	const handleChangeDescription = (event) => {
		setDescription(event.target.value);
	};

	const checkInputs = () => {
		if (title === "") {
			alert('Please add a title for your video')
			setFormError({ inputName: "title", message: "Please add a title for your video" });
            return false;
		} else if (description === "") {
			alert('Please add a description for your video');
			setFormError({ inputName: "description", message: "Please add a description for your video" });
            return false;
		} else {
			setFormError({ inputName: "" });
			return true
		}
	};

	const isFormValid = () => {
        if (!checkInputs()) {
            return false;
        }
        return true;
    }

	function handleSubmit(event) {
		event.preventDefault();
		
		if (isFormValid()) {
				axios.post(
					`${API_URL}/videos`,
					{
						title,
						description,
					}
				)
				.then((result) => {
					setTitle("");
					setDescription("");
					const newVideoId = result.data.id;
					navigate(`/videos/${newVideoId}`);
				})
				.catch((error) => {
					console.error(error);
				});
        }
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
							className={`upload-form__input ${formError && formError.inputName === "title" ? "form__error" : ""}`}
							type="text"
							name="title"
							id="title"
							maxLength="40"
							placeholder="Add a title to your video"
							onChange={handleChangeTitle}
							value={title}
						/>
						<label className="upload-form__label" htmlFor="description">ADD A VIDEO DESCRIPTION
						</label>
						<textarea
							className={`upload-form__input upload-form__input--textarea ${formError && formError.inputName === "description" ? "form__error" : ""}`}
							name="description"
							id="description"
							maxLength="400"
							placeholder="Add a description to your video"
							onChange={handleChangeDescription}
							value={description}
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
