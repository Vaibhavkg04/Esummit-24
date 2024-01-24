import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation"; // Import navigation styles
import "./styles.css";

// Initialize Swiper core modules
SwiperCore.use([Autoplay, EffectCoverflow, Navigation]);

export default function EsubmitReel() {
	const [value, setValue] = useState(false);
	const swiperRef = useRef(null);

	const setBool = () => {
		if (value === true) {
			setValue(false);
			swiperRef.current.swiper.autoplay.stop();
		} else {
			setValue(true);
			swiperRef.current.swiper.autoplay.start();
		}
	};

	return (
		<>
			<Swiper
				ref={swiperRef}
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				loop={true}
				loopCreate={true}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
					autoplay: {
						delay: 5,
					},
				}}
				navigation
				autoplay={{
					delay: value ? 600000 : 115200,
					disableOnInteraction: true,
				}}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				className="mySwiper"
				allowTouchMove={!value}
			>
				<SwiperSlide>
					{/* Your first video slide */}
					<div className="grid grid-cols-2 h-96">
						<div className="container2 mb-80">
							<iframe
								onClick={setBool}
								width="315"
								height="400"
								className="rounded-2xl border-2"
								src="https://youtube.com/embed/OhzDsHCnrRE?si=5TIG4AWRfqa14-xS"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="grid-cols-2 h-96">
						<div className="container2 mb-80">
							<iframe
								onClick={setBool}
								width="315"
								height="400"
								className="rounded-2xl border-2"
								src="https://www.youtube.com/embed/eD8XXCoaliI"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="grid  cols-2 h-96">
						<div class="container2 mb-80">
							<iframe
								onClick={setBool}
								width="315"
								height="400"
								className=" rounded-2xl border-2 "
								src="https://www.youtube.com/embed/Kxf2oBrh77o"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="grid  cols-2 h-96">
						<div class="container2 mb-80">
							<iframe
								onClick={setBool}
								width="315"
								height="400"
								className=" rounded-2xl border-2 "
								src="https://www.youtube.com/embed/cVZ5SOfJQME"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="grid  cols-2 h-96">
						<div class="container2 mb-80">
							<iframe
								onClick={setBool}
								width="315"
								height="400"
								className=" rounded-2xl border-2 "
								src="https://www.youtube.com/embed/ePjITkKOMjw"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="grid  cols-2  h-96">
						<div class="container2 mb-80">
							<iframe
								onClick={setBool}
								width="315"
								height="400"
								className=" rounded-2xl border-2 "
								src="https://www.youtube.com/embed/OhzDsHCnrRE"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>

			{/* Arrow buttons */}
			{/* <div className="swiper-buttons">
				<div
					className="swiper-button-next"
					onClick={() => swiperRef.current.swiper.slideNext()}
				>
					Next
				</div>
				<div
					className="swiper-button-prev"
					onClick={() => swiperRef.current.swiper.slidePrev()}
				>
					Prev
				</div>
			</div> */}
		</>
	);
}
