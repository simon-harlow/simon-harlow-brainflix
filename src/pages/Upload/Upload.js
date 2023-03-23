import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../../components/Utils/const";

import "./Upload.scss";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import Publish from "../../assets/images/publish.svg";
import Cancel from "../../assets/images/cancel.svg";
import Search from "../../assets/images/search.svg"

export default function Upload() {

	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState(null)
	const [formError, setFormError] = useState("");

		const handleChangeTitle = (event) => {
		setTitle(event.target.value);
	};

	const handleChangeDescription = (event) => {
		setDescription(event.target.value);
	};

	const handleImageUpload = (event) => {
		const selectedFile = event.target.files[0];
		setImage(selectedFile);
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

	const handleCancel = () => {
		const confirm = window.confirm("Cancel and return to the homepage?");
        if (confirm) {
            navigate('/');;
        }
	}


	const handleSubmit = (event) => {
		event.preventDefault();
	
		if (isFormValid()) {
			const formData = new FormData();
			formData.append("title", title);
			formData.append("description", description);
			
			// if user image exists in form then append to request body
			if (image) {
				formData.append("image", image, image.name);
			}
	
			axios
				.post(`${API_URL}/videos`, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((result) => {
					setTitle("");
					setDescription("");
					setImage(null);
					const newVideoId = result.data.id;
					navigate(`/videos/${newVideoId}`);
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	return (
<main className="upload-container">
	<section className="upload">
		<div className="upload__title">
			<h1 className="upload__title-text">Upload Video</h1>
		</div>
		<form className="upload-form" id="upload-form" onSubmit={handleSubmit}>
			<div className="upload-form__thumbnail-container">
				<label className="upload-form__label upload-form__label--thumbnail" htmlFor="image" name="image" accept=".jpeg, .png, .jpg">
					VIDEO THUMBNAIL
				</label>
				{image ? <img className="upload-form__thumbnail" src={URL.createObjectURL(image)} alt="uploaded content" name="image" id="image" /> : <img className="upload-form__thumbnail" src={VideoThumbnail} alt="bike handlebars" name="image" id="image" />}
				<div className="upload-form__file-input">
					<input type="file" name="file" id="file" onChange={handleImageUpload}/>
					<label htmlFor="file" className="upload-form__file-button">
						<img className="upload-form__file-button-img" src={Search} alt="file icon"/>
						<span className="upload-form__file-button-text">UPLOAD IMAGE</span>
					</label>
				</div>
			</div>
			<div className="upload-form__input-container">
				<label className="upload-form__label" htmlFor="title">
					TITLE YOUR VIDEO
				</label>
				<input className={`upload-form__input ${formError && formError.inputName === "title" ? "form__error" : ""}`} type="text" name="title" id="title" maxLength="40" placeholder="Add a title to your video" onChange={handleChangeTitle} value={title}/>
				<label className="upload-form__label" htmlFor="description">
					ADD A VIDEO DESCRIPTION
				</label>
				<textarea className={`upload-form__input upload-form__input--textarea ${formError && formError.inputName === "description" ? "form__error" : ""}`} name="description" id="description" maxLength="400" placeholder="Add a description to your video" onChange={handleChangeDescription} value={description}/>
			</div>
			<div className="upload-form__button-container">
				<button className="upload-form__publish-button" type="submit" id="submit">
					<img className="upload-form__publish-button-img" src={Publish} alt="publish icon"/>
					<span className="upload-form__publish-button-text">PUBLISH</span>
				</button>
				<button className="upload-form__cancel-button" type="button" id="cancel" onClick={handleCancel}>
					<img className="upload-form__cancel-button-img" src={Cancel} alt="cancel icon"/>
					<span className="upload-form__cancel-button-text">CANCEL</span>
				</button>
			</div>
		</form>
	</section>
</main>
	);
}
