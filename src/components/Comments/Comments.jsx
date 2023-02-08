import React from "react";
import "./Comments.scss";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from '../../assets/images/add_comment.svg'
import timeAgoDate from "../Utils/timeAgoDate";

export default function CommentsInput( {currentVideoDetails} ) {

    console.log(currentVideoDetails)
    const numberOfComments = currentVideoDetails.comments.length;

	return (
		<>
			<section className="comments">
				<h2 className="comments__title">{numberOfComments} Comments</h2>
					<div className="comments__form-container">
						<img className="comments__profile-pic" id="profile-pic" src={Avatar} alt="user avatar"/>
                            <form className="comments__form" id="comments-form">
                                <label className="comments__form-subhead" htmlFor="comment">JOIN THE CONVERSATION</label>
                                <textarea className="comments__form-input" name="comment" id="comment" maxLength="200" placeholder="Add a new comment"></textarea>
                                <button className="comments__form-button" type="submit" id="submit">
                                    <img className="comments__form-button-img" src={CommentIcon} alt="comment icon" />
                                    <span className="comments__form-button-text">Comment</span>
                                </button>
                            </form>
					</div>
				{currentVideoDetails.comments.map((video) => (
                <div className="old-comments" id={video.id} key={video.id}>
                    <div className="old-comments__left-container">
                        <img className="old-comments__profile-pic" src="" alt="" />
                    </div>
                    <div className="old-comments__right-container">
                        <div className="old-comments__title-container">
                            <h5 className="old-comments__name">{video.name}</h5>
                            <p className="old-comments__date">{timeAgoDate(video.timestamp)}</p>
                        </div>
                        <div className="old-comments__text-container">
                            <p className="old-comments__text">{video.comment}</p>
                        </div>
                    </div>
                </div>
				))}
			</section>
		</>
	);
}
