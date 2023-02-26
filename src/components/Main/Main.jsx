import React, { useState, useEffect } from "react";
import axios from "axios";

import getApiKey from "../Utils/const";
import MainVideo from "../MainVideo/MainVideo";
import BelowVideoContent from "../BelowVideoContent/BelowVideoContent";

const apiURL = "https://project-2-api.herokuapp.com";

export default function Main() {
	const [videoData, setVideoData] = useState([]);
	const [currentVideo, setCurrentVideo] = useState(null);

	useEffect(() => {
		axios
			.get(`${apiURL}/videos?api_key=${getApiKey}`)
			.then((response) => {
				setVideoData(response.data);
				setCurrentVideo(response.data[0]);
                console.log(response.data[0]);
			})
			.catch((error) => console.log(error));
	}, []);

	function changeVideo(id) {
		const selectedVideo = videoData.find((video) => {
			console.log(`this video ${id} has been selected`);
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
