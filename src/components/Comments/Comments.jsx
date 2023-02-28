import React from "react";

import "./Comments.scss";
import CommentsForm from "../CommentsForm/CommentsForm";
import timeAgoDate from "../Utils/timeAgoDate";

export default function CommentsInput( {currentVideoData} ) {

    const numberOfComments = currentVideoData.comments.length;

	return (
        <section className="comments">
            <h2 className="comments__count">{numberOfComments} Comments</h2>
            <CommentsForm />
            {currentVideoData.comments.map((video) => (
            <div className="old-comments" id={video.id} key={video.id}>
                <div className="old-comments__left-container">
                    <img className="old-comments__profile-pic" alt="" />
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
	);
}
