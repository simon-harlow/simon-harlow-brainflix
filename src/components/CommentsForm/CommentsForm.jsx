import React from "react";
import { useState } from "react";
import axios from "axios";

import { API_URL, API_KEY} from "../Utils/const";
import "./CommentsForm.scss"
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from '../../assets/images/add_comment.svg'

export default function CommentsForm( { currentVideoData } ) {
    const videoId = currentVideoData.id;

	const [formData, setFormData] = useState({ name: "", comment: "" });

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const { name, comment } = formData;

		// empty string validation
		if (name.trim() === "") {
			alert("Please add your name");
			return;
		} else if (comment.trim() === "") {
			alert("Please add a comment");
			return;
		}

        API_KEY.then(apiKey => {
            const postCommentsData = axios
                .post(`${API_URL}/videos/${videoId}/comments?api_key=${apiKey}`, {
                    name,
                    comment,
                })
                .then((result) => {
                    setFormData({ name: "", comment: "" });
                })
                .catch((error) => {
                    console.error(error);
                });
    
        }).catch(error => {
            console.error(error);
        });
	};

	return (
        <div className="comments__form-container">
            <img className="comments__profile-pic" id="profile-pic" src={Avatar} alt="user avatar"/>
                <form className="comments__form" id="comments-form" onSubmit={handleSubmit}>
                    <label className="comments__form-subhead" htmlFor="name">NAME</label>
                    <input className="comments__form-input comments__form-input--name" type="text" name="name" id="name" maxLength="30" placeholder="Enter your name" value={formData.name} onChange={handleInputChange}/>
                    <label className="comments__form-subhead" htmlFor="comment">JOIN THE CONVERSATION</label>
                    <textarea className="comments__form-input" name="comment" id="comment" maxLength="200" placeholder="Add a new comment" value={formData.comment} onChange={handleInputChange}></textarea>
                    <button className="comments__form-button" type="submit" id="submit">
                        <img className="comments__form-button-img" src={CommentIcon} alt="comment icon" />
                        <span className="comments__form-button-text">COMMENT</span>
                    </button>
                </form>
        </div>
    );
}
