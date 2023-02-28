import React from "react";

import "./CommentsForm.scss"
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from '../../assets/images/add_comment.svg'

export default function CommentsForm() {
	return (
        <div className="comments__form-container">
            <img className="comments__profile-pic" id="profile-pic" src={Avatar} alt="user avatar"/>
                <form className="comments__form" id="comments-form">
                    <label className="comments__form-subhead" htmlFor="comment">JOIN THE CONVERSATION</label>
                    <textarea className="comments__form-input" name="comment" id="comment" maxLength="200" placeholder="Add a new comment"></textarea>
                    <button className="comments__form-button" type="submit" id="submit">
                        <img className="comments__form-button-img" src={CommentIcon} alt="comment icon" />
                        <span className="comments__form-button-text">COMMENT</span>
                    </button>
                </form>
        </div>
    );
}
