import React from "react";
import "./NextVideos.scss";
import NextVideosList from "../../data/videos.json";
import Video from "../Video/Video";

export default function NextVideos( {currentVideoId, changeMainVideo} ) {

    const nextVideoList = NextVideosList;
    console.log(nextVideoList);
    const nextVideoListFiltered =  nextVideoList.filter((video) => {
        return video.id !== currentVideoId;
    })

	return (
		<>
            <section className="next-videos">
                <div className="next-videos__title">
                    <h4 className="next-videos__title-text">NEXT VIDEOS</h4>
                </div>
                <div>
                {nextVideoListFiltered.map((video) => (
                    <Video
                        changeMainVideo={changeMainVideo}
                        key={video.id}
                        id={video.id}
                        image={video.image}
                        title={video.title}
                        channel={video.channel}
                    />
                    ))}
                </div>
            </section>
		</>
	);
}
