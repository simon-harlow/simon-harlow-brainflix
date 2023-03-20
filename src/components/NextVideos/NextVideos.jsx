import React from "react";
import { NavLink } from "react-router-dom";

import "./NextVideos.scss";
import Video from "../Video/Video";

export default function NextVideos( {videoData, currentVideoId, changeMainVideo} ) {

    const videoList = videoData;
    const filteredVideoList =  videoList.filter((video) => {
        return video.id !== currentVideoId;
    })

	return (
        <section className="next-videos">
            <div className="next-videos__title">
                <h4 className="next-videos__title-text">NEXT VIDEOS</h4>
            </div>
            <div>
            {filteredVideoList.map((video) => (
                <NavLink to={`/videos/${video.id}`} key={video.id}>
                    <Video
                        changeMainVideo={changeMainVideo}
                        key={video.id}
                        id={video.id}
                        image={video.image}
                        title={video.title}
                        channel={video.channel}
                    />
                </NavLink>
                ))}
            </div>
        </section>
	);
}
