import React, { useEffect, useRef } from "react";

const VideoJS = (props) => {
	const refVideo = useRef(null);
	const refPlayer = useRef(null);
	const { options, onReady } = props;

	useEffect(() => {
		// Make sure Video.js player is only initialized once
		if (!refPlayer.current) {
			const videoElement = document.createElement("video-js");

			videoElement.classList.add("vjs-big-play-centered");
			refVideo.current.appendChild(videoElement);

			const player = (refPlayer.current = videojs(videoElement, options, () => {
				videojs.log("player is ready");
				onReady && onReady(player);
			}));

			// You could update an existing player in the `else` block here
			// on prop change, for example:
		} else {
			const player = refPlayer.current;

			player.autoplay(options.autoplay);
			player.src(options.sources);
		}
	}, [options, refVideo]);

	useEffect(() => {
		const player = refPlayer.current;

		return () => {
			if (player && !player.isDisposed()) {
				player.dispose();
				refPlayer.current = null;
			}
		};
	}, [refPlayer]);

	return (
		<div>
			<video
				id="my-video"
				class="video-js vjs-default-skin"
				controls
				preload="auto"
				width="640"
				height="360"
				data-setup="{}"
			>
				<source src={options.src} type="video/mp4" />
			</video>
		</div>
	);
};

export default VideoJS;
