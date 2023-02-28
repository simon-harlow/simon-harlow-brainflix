import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { API_URL, API_KEY} from "../Utils/const";
import "./BelowVideoContent.scss";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideos/NextVideos";
import MainVideoDetails from "../MainVideoDetails/MainVideoDetails";

export default function BelowVideoContent({ currentVideoId, changeMainVideo, videoData }) {
	const [currentVideoData, setCurrentVideoData] = useState(null);

	useEffect(() => {
		axios
			.get(`${API_URL}/videos/${currentVideoId}?api_key=${API_KEY}`)
			.then((response) => {
				setCurrentVideoData(response.data);
			})
			.catch((error) => console.log(error));
	}, [currentVideoId]);

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
					<Comments currentVideoData={currentVideoData} />
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

