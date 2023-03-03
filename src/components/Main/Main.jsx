import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { API_URL, API_KEY} from "../Utils/const";
import MainVideo from "../MainVideo/MainVideo";
import BelowVideoContent from "../BelowVideoContent/BelowVideoContent";

export default function Main() {
	const [videoData, setVideoData] = useState([]);
	const [currentVideo, setCurrentVideo] = useState(null);

	const { videoId } = useParams(); //used get video ID and watch for change of state if using in URL

	useEffect(() => {
		axios
			.get(`${API_URL}/videos?api_key=${API_KEY}`)
			.then((response) => {
				setVideoData(response.data);
				if (videoId) {
					const selectedVideo = response.data.find((video) => {
						return video.id === videoId;
					});
					setCurrentVideo(selectedVideo);
				} else {
					setCurrentVideo(response.data[0]);
				}
			})
			.catch((error) => console.log(error));
	}, [videoId]);

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
