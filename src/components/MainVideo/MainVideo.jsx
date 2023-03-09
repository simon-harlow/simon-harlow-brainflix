import React from 'react'
import { useParams } from 'react-router-dom'

import './MainVideo.scss'

export default function MainVideo({ videoData }) {

    const { videoId } = useParams();

    const currentVideo = videoData.find((video) => {
        return video.id === (videoId || videoData[0].id);
    });



    return (
		<section className="main-video">
			<div className="main-video__video-container">
				<div className="main-video__video-controls-container">
					<div className="main-video__video-controls">
						<button className="main-video__video-controls-button">
							<svg
								className="play-icon"
								width="13"
								height="16"
								viewBox="0 0 13 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0)">
									<path
										d="M0.571411 2.07999V13.92C0.571411 14.8229 1.5657 15.3714 2.33141 14.88L11.6343 8.95999C12.3428 8.51428 12.3428 7.48571 11.6343 7.02856L2.33141 1.11999C1.5657 0.628565 0.571411 1.17714 0.571411 2.07999Z"
										fill="white"
									/>
								</g>
								<defs>
									<clipPath id="clip0">
										<rect
											width="12.5714"
											height="16"
											fill="white"
										/>
									</clipPath>
								</defs>
							</svg>
							<svg
								className="pause-icon"
								width="25"
								height="24"
								viewBox="0 0 25 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.71427 20C9.89284 20 10.8571 19.0357 10.8571 17.8571V7.14286C10.8571 5.96429 9.89284 5 8.71427 5C7.5357 5 6.57141 5.96429 6.57141 7.14286V17.8571C6.57141 19.0357 7.5357 20 8.71427 20ZM15.1428 7.14286V17.8571C15.1428 19.0357 16.1071 20 17.2857 20C18.4643 20 19.4286 19.0357 19.4286 17.8571V7.14286C19.4286 5.96429 18.4643 5 17.2857 5C16.1071 5 15.1428 5.96429 15.1428 7.14286Z"
									fill="white"
								/>
							</svg>
						</button>
						<div className="main-video__video-duration-container">
                            <div className="main-video__scrub">
                                <div className="main-video__thumb">
                                </div>
                            </div>
                            <div className="main-video__time main-video__elapsed"> 
                                0:00 
                            </div>
                            <div className="main-video__time main-video__total">
                                4:01
                            </div>
                        </div>
						<button className="main-video__video-controls-button">
							<svg
								className="fullscreen-icon"
								width="25"
								height="24"
								viewBox="0 0 25 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.71427 14.2857C5.0857 14.2857 4.57141 14.8 4.57141 15.4286V18.8571C4.57141 19.4857 5.0857 20 5.71427 20H9.14284C9.77141 20 10.2857 19.4857 10.2857 18.8571C10.2857 18.2286 9.77141 17.7143 9.14284 17.7143H6.85713V15.4286C6.85713 14.8 6.34284 14.2857 5.71427 14.2857ZM5.71427 9.71429C6.34284 9.71429 6.85713 9.2 6.85713 8.57143V6.28571H9.14284C9.77141 6.28571 10.2857 5.77143 10.2857 5.14286C10.2857 4.51429 9.77141 4 9.14284 4H5.71427C5.0857 4 4.57141 4.51429 4.57141 5.14286V8.57143C4.57141 9.2 5.0857 9.71429 5.71427 9.71429ZM18.2857 17.7143H16C15.3714 17.7143 14.8571 18.2286 14.8571 18.8571C14.8571 19.4857 15.3714 20 16 20H19.4286C20.0571 20 20.5714 19.4857 20.5714 18.8571V15.4286C20.5714 14.8 20.0571 14.2857 19.4286 14.2857C18.8 14.2857 18.2857 14.8 18.2857 15.4286V17.7143ZM14.8571 5.14286C14.8571 5.77143 15.3714 6.28571 16 6.28571H18.2857V8.57143C18.2857 9.2 18.8 9.71429 19.4286 9.71429C20.0571 9.71429 20.5714 9.2 20.5714 8.57143V5.14286C20.5714 4.51429 20.0571 4 19.4286 4H16C15.3714 4 14.8571 4.51429 14.8571 5.14286Z"
									fill="white"
								/>
							</svg>
							<svg
								className="close-fullscreen-icon"
								width="25"
								height="24"
								viewBox="0 0 25 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M20.3263 5.42885L16.4966 9.25858L17.8232 10.5852C18.3489 11.1109 17.9734 12.012 17.2308 12.012H13.4094C12.9505 12.012 12.5751 11.6365 12.5751 11.1776V7.33955C12.5751 6.59696 13.4762 6.2215 14.0018 6.74715L15.3285 8.07379L19.1582 4.24405C19.4836 3.91865 20.0092 3.91865 20.3346 4.24405C20.6517 4.5778 20.6517 5.10345 20.3263 5.42885ZM6.00026 19.7549L9.83 15.9252L11.1566 17.2518C11.6823 17.7775 12.5834 17.402 12.5834 16.6594V12.838C12.5834 12.3791 12.2079 12.0036 11.749 12.0036H7.91096C7.16837 12.0036 6.79291 12.9048 7.31856 13.4304L8.6452 14.757L4.81546 18.5868C4.49006 18.9122 4.49006 19.4378 4.81546 19.7632C5.14921 20.0803 5.67486 20.0803 6.00026 19.7549Z"
									fill="white"
								/>
							</svg>
						</button>
						<button className="main-video__video-controls-button">
							<svg
								className="volume-icon"
								width="25"
								height="24"
								viewBox="0 0 25 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.57141 10.6978V14.2254C4.57141 14.7104 4.96826 15.1072 5.45329 15.1072H8.09893L11.0003 18.0086C11.5559 18.5642 12.5083 18.1674 12.5083 17.3825V7.53189C12.5083 6.74702 11.5559 6.35018 11.0003 6.90576L8.09893 9.81596H5.45329C4.96826 9.81596 4.57141 10.2128 4.57141 10.6978ZM16.4768 12.4616C16.4768 10.9007 15.5773 9.56022 14.2721 8.90763V16.0068C15.5773 15.363 16.4768 14.0225 16.4768 12.4616ZM14.2721 5.80341V5.97979C14.2721 6.3149 14.4926 6.60592 14.8012 6.72938C17.0765 7.63772 18.6815 9.86887 18.6815 12.4616C18.6815 15.0543 17.0765 17.2855 14.8012 18.1938C14.4837 18.3173 14.2721 18.6083 14.2721 18.9434V19.1198C14.2721 19.6754 14.8277 20.0634 15.3392 19.8694C18.3287 18.7318 20.4452 15.848 20.4452 12.4616C20.4452 9.07518 18.3287 6.19144 15.3392 5.05381C14.8277 4.85098 14.2721 5.24783 14.2721 5.80341V5.80341Z"
									fill="white"
								/>
							</svg>
							<svg
                                className="mute-icon"
								width="25"
								height="24"
								viewBox="0 0 25 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.13141 4.26C4.78474 4.60667 4.78474 5.16667 5.13141 5.51333L8.38474 8.76667L8.12697 9.03333H5.4603C4.97141 9.03333 4.57141 9.43333 4.57141 9.92222V13.4778C4.57141 13.9667 4.97141 14.3667 5.4603 14.3667H8.12697L11.0514 17.2911C11.6114 17.8511 12.5714 17.4511 12.5714 16.66V12.9533L16.287 16.6689C15.8514 16.9978 15.3803 17.2733 14.8647 17.4778C14.5447 17.6111 14.3492 17.9489 14.3492 18.2956C14.3492 18.9356 14.9981 19.3444 15.5847 19.1044C16.2959 18.8111 16.9625 18.42 17.5581 17.94L18.7492 19.1311C19.0959 19.4778 19.6559 19.4778 20.0025 19.1311C20.3492 18.7844 20.3492 18.2244 20.0025 17.8778L6.39363 4.26C6.04697 3.91333 5.48697 3.91333 5.13141 4.26ZM18.7936 11.7C18.7936 12.4289 18.6603 13.1311 18.4292 13.78L19.7892 15.14C20.287 14.1 20.5714 12.9356 20.5714 11.7C20.5714 8.29556 18.4381 5.38 15.4336 4.23333C14.9092 4.02889 14.3492 4.43778 14.3492 4.99778V5.16667C14.3492 5.50444 14.5714 5.79778 14.8914 5.92222C17.1759 6.84667 18.7936 9.08667 18.7936 11.7ZM11.0514 6.10889L10.9003 6.26L12.5714 7.93111V6.73111C12.5714 5.94 11.6114 5.54889 11.0514 6.10889ZM16.5714 11.7C16.5714 10.1267 15.6647 8.77556 14.3492 8.11778V9.70889L16.5536 11.9133C16.5625 11.8422 16.5714 11.7711 16.5714 11.7Z"
									fill="white"
								/>
							</svg>
						</button>
					</div>
				</div>
				<video
					className="main-video__video"
					src=""
					width="100%"
					height="240"
					poster={currentVideo.image}
				/>
			</div>
		</section>
	);
}
