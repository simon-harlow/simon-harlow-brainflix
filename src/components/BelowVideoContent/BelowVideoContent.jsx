import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getVideoData } from "../Utils/getVideoData";
import { deleteVideoData } from "../Utils/deleteVideoData";
import { likeVideoComment } from "../Utils/likeVideoComment";
import { API_URL} from "../Utils/const";

import "./BelowVideoContent.scss";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideos/NextVideos";
import MainVideoDetails from "../MainVideoDetails/MainVideoDetails";

export default function BelowVideoContent({ currentVideoId, changeMainVideo, videoData }) {
	const [currentVideoData, setCurrentVideoData] = useState(null);
	const [commentsData, setCommentsData] = useState(null);
	const { videoId } = useParams();

	useEffect(() => {
		const id = videoId || currentVideoId;
		getVideoData(API_URL, id)
			.then((result) => {
				setCurrentVideoData(result);
				setCommentsData(result.comments)
			})
			.catch((error) => console.log(error));
	}, [currentVideoId, videoId]);

	// handles when a comment is added from CommentsForm
	const addComment = (comment) => {
		const id = videoId || currentVideoId;
		getVideoData(API_URL, id)
			.then((result) => {
				setCommentsData([...commentsData, comment])
			})
			.catch((error) => console.log(error));
	};

	const deleteComment = (commentId) => {
		const id = videoId || currentVideoId;
		deleteVideoData(API_URL, id, commentId)
			.then((result) => {
				const filteredComments = commentsData.filter((comment) => {
					return comment.id !== result.id 
				})
				setCommentsData([...filteredComments])
			})
			.catch((error) => console.log(error));
	};

	const likeComment = (commentId) => {
		const id = videoId || currentVideoId;
		likeVideoComment(API_URL, id, commentId)
			.then((result) => {
				const updatedCommentsData = commentsData.map((comment) => {
					if (comment.id === result.id) {
						return result;
					} else {
						return comment;
					}
				});
				setCommentsData(updatedCommentsData);
			})
			.catch((error) => console.log(error));
	};

	if (!currentVideoData) {
		return;
	}

	return (
		<section className="below-video-content">
			<div className="below-video-content__container">
				<div className="below-video-content__left">
					<MainVideoDetails
						currentVideoData={currentVideoData}
					/>
					<Comments
					currentVideoData={currentVideoData}
					commentsData={commentsData}
					addComment={addComment}
					deleteComment={deleteComment}
					likeComment={likeComment}
					/>
				</div>
				<div className="below-video-content__right">
					<NextVideos
                        videoData={videoData}
						changeMainVideo={changeMainVideo}
						currentVideoId={currentVideoId}
					/>
				</div>
			</div>
		</section>
	);
}

