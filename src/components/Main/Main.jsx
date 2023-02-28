import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_URL, API_KEY} from "../Utils/const";
import MainVideo from "../MainVideo/MainVideo";
import BelowVideoContent from "../BelowVideoContent/BelowVideoContent";

export default function Main() {
	const [videoData, setVideoData] = useState([]);
	const [currentVideo, setCurrentVideo] = useState(null);

	useEffect(() => {
		axios
			.get(`${API_URL}/videos?api_key=${API_KEY}`)
			.then((response) => {
				setVideoData(response.data);
				setCurrentVideo(response.data[0]);
			})
			.catch((error) => console.log(error));
	}, []);

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
					<MainVideo currentVideo={currentVideo} />
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
