import React from "react";
import "./Comments.scss";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import VideoDetails from "../../data/video-details.json";
import CommentIcon from '../../assets/images/add_comment.svg'
import timeAgoDate from "../Utils/timeAgoDate";

const videoDetails = VideoDetails;
// console.log(videoDetails);

const [getCommentsVideo] = videoDetails.filter(
	(video) => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8"
);

const firstVideoComments = getCommentsVideo.comments;
// console.log(firstVideoComments);

const numOfComments = firstVideoComments.length


export default function CommentsInput( {currentVideoDetails} ) {

    console.log(`comments array ,${currentVideoDetails}`)

	return (
		<>
			<section className="comments">
				<h2 className="comments__title">{numOfComments} Comments</h2>
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
				{firstVideoComments.map((video) => (
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
