import React from "react";
import "./NextVideos.scss";
import NextVideosList from "../../data/videos.json";

const nextVideoList = NextVideosList;
console.log(nextVideoList);

export default function NextVideos() {
	return (
		<>
			<div>
				<h4>Next Videos</h4>
			</div>
			<div>
            {nextVideoList.map((video) => (
                <div className="next-videos" id={video.id} key={video.id}>
                    <div className="next-videos__left-container">
                        <img
                            className="next-videos__image"
                            src={video.image}
                            alt={video.title}
                        />
                    </div>
                    <div className="next-videos__right-container">
                        <h4 className="next-videos__title">
                            {video.title}
                        </h4>
                        <p className="next-videos__channel">
                            {video.channel}
                        </p>
                    </div>
                </div>
				))}
            </div>
		</>
	);
}
