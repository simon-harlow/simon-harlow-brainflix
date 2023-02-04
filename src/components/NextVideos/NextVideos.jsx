import React from "react";
import "./NextVideos.scss";
import NextVideosList from "../../data/videos.json";

const nextVideoList = NextVideosList;
console.log(nextVideoList);

export default function NextVideos() {
	return (
		<>
            <section className="next-videos__container">
                <div className="next-videos__title">
                    <h4 className="next-videos__title-text">NEXT VIDEOS</h4>
                </div>
                <div>
                {nextVideoList.map((video) => (
                    <div className="next-videos-list" id={video.id} key={video.id}>
                        <div className="next-videos-list__left-container">
                            <img className="next-videos-list__image" src={video.image} alt={video.title}/>
                            {/* TODO: need to style these images so they are same height */}
                        </div>
                        <div className="next-videos-list__right-container">
                            <h4 className="next-videos-list__title">{video.title}</h4>
                            <p className="next-videos__channel">{video.channel}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
		</>
	);
}
