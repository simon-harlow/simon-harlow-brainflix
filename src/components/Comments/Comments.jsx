import React from "react";

import "./Comments.scss";
import DeleteIcon from "../../assets/images/delete.svg"
import CommentLike from "../../assets/images/comment-like.svg"
import CommentsForm from "../CommentsForm/CommentsForm";
import timeAgoDate from "../Utils/timeAgoDate";

export default function Comments( {currentVideoData, commentsData, addComment, deleteComment, likeComment} ) {

    const numberOfComments = commentsData.length;
    const sortedComments = commentsData.sort((a, b) => b.timestamp - a.timestamp);

    console.log(sortedComments);

    const handleDelete = (commentId) => {
        deleteComment(commentId);
    }

    const handleLike = (commentId) => {
        likeComment(commentId);
    }

    // renders if no comments to load from API
    if (numberOfComments === 0) {
        return (
            <section className="comments">
                <h2 className="comments__count">0 Comments</h2>
                <CommentsForm
                    currentVideoData={currentVideoData}
                    addComment={addComment}
                />
                <div className="comments__empty">
                    Be the first to comment on this video!
                </div>
            </section>
        );
    }

    // previously had "comments" hard-coded in the h2 but needed to handle 1 comment
	return (
        <section className="comments">
            <h2 className="comments__count">{numberOfComments} {numberOfComments === 1 ? 'Comment' : 'Comments'}</h2>
            <CommentsForm
            currentVideoData={currentVideoData}
            addComment={addComment}
            />
            {sortedComments.map((video) => (
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
                    <div className="old-comments__button-container">
                        <button className="old-comments__button" onClick={() => handleLike(video.id)}>
                            <img src={CommentLike} alt="like icon"/>
                        </button>
                        <span className="old-comments__button-count">{video.likes}</span>
                        <button className="old-comments__button" onClick={() => handleDelete(video.id)}>
                            <img src={DeleteIcon} alt="delete icon"/>
                        </button>
                    </div>
                </div>
            </div>
            ))}
        </section>
	);
}
