import React from "react";
import "./Comments.scss";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import VideoDetails from "../../data/video-details.json";

const videoDetails = VideoDetails;
console.log(videoDetails);

const [getCommentsVideo] = videoDetails.filter(
	(video) => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8"
);
const firstVideoComments = getCommentsVideo.comments;
console.log(firstVideoComments);

// function timeAgoDate(date) {
//     const commentTime = new Date(date);
//     const nowTime = new Date();

//     const timeDifference = (nowTime - commentTime);
//     let timeAgo = "";

//     if (timeDifference < 5000) {
//         timeAgo = "just now";
//     } else if (timeDifference < 60000){
//         timeAgo = `${Math.round(timeDifference / 1000)} seconds ago`;
//     } else if (timeDifference < 120000){
//         timeAgo = `a minute ago`;
//     } else if (timeDifference < 3600000) {
//         timeAgo = `${Math.round(timeDifference / 60000)} minutes ago`;
//     } else if (timeDifference < 7200000) {
//         timeAgo = `an hour ago`;
//     } else if (timeDifference < 86400000) {
//         timeAgo = `${Math.round(timeDifference / 3600000)} hours ago`;
//     } else {
//         timeAgo = commentTime.toLocaleDateString();
//     }
//     return timeAgo;
// }

export default function CommentsInput() {
	return (
		<>
			<section className="comments-container">
				<h2 className="comments__title">NUM123 Comments</h2>
				<div className="comments">
					<div className="comments__form-container">
						<img
							className="comments__profile-pic"
							id="profile-pic"
							src={Avatar}
							alt="user avatar"
						/>
						<form className="comments__form" id="comments-form">
							<label
								className="comments__form-subhead"
								htmlFor="comment"
							>
								JOIN THE CONVERSATION
							</label>
							<textarea
								className="comments__form-input comments__form-input"
								name="comment"
								id="comment"
								maxLength="200"
								placeholder="Add a new comment"
							></textarea>
							<button
								className="comments__form-button"
								type="submit"
								id="submit"
							>
								COMMENT
							</button>
						</form>
					</div>
				</div>
				{firstVideoComments.map((video) => (
                <div className="old_comments" id={video.id} key={video.id}>
                    <div className="old-comments__left-container">
                        <img
                            className="old-comments__profile-pic"
                            src=""
                            // alt="user avatar"
                        />
                    </div>
                    <div className="old-comments__right-container">
                        <div className="old-comments__title-container">
                            <h5 className="old-comments__name">
                                {video.name}
                            </h5>
                            <p className="old-comments__date">
                                {video.timestamp}
                            </p>
                        </div>
                        <div className="old-comments__text-container">
                            <p className="old-comments__text">
                                {video.comment}
                            </p>
                        </div>
                    </div>
                </div>
				))}
			</section>
		</>
	);
}
