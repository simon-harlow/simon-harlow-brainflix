import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../Utils/const";

import MainVideo from "../MainVideo/MainVideo";
import BelowVideoContent from "../BelowVideoContent/BelowVideoContent";

export default function Main() {
	const [videoData, setVideoData] = useState([]);
	const [currentVideo, setCurrentVideo] = useState(null);

	const { videoId } = useParams(); //used get video ID and watch for change of state in useEffect - needed to refresh page to current ID

	// calls for video data and watches for changes in video ID
	useEffect(() => {
		axios
			.get(`${API_URL}/video`)
			.then((response) => {
				setVideoData(response.data);
				if (videoId) {
					const loadedVideo = response.data.find((video) => {
						return video.id === videoId;
					});
					setCurrentVideo(loadedVideo);
				} else {
					setCurrentVideo(response.data[0]);
				}
			})
			.catch((error) => console.log(error));
	}, [videoId]);

	// handles when video is clicked in side menu
	function changeVideo(id) {
		const selectedVideo = videoData.find((video) => {
			return video.id === id;
		});

		setCurrentVideo(selectedVideo);
	}

	return (
		<>
			{currentVideo && (
				<>
					<MainVideo videoData={videoData} />
					<BelowVideoContent
						currentVideoId={currentVideo.id}
						changeMainVideo={changeVideo}
						videoData={videoData}
					/>
				</>
			)}
		</>
	);
}
