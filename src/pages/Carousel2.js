// Import Swiper React components
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";
import "./styleabout.css";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

export default function EsubmitReel() {
	const [value, setValue] = useState(false);

	const setBool = () => {
		if (value === true) {
			setValue(false);
		} else {
			setValue(true);
		}
	};
	return (
		<>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				loop={true} // enable infinite loop
				loopCreate={true} // create new slides as needed to maintain the loop
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				autoplay={{
					delay: value ? 60000 : 5200,
					// autoplay delay in milliseconds
					disableOnInteraction: true, // disable autoplay when user interacts with the slide
				}}
				// autoplayDisableOnInteraction={true} // disable autoplay when user interacts with the slide

				modules={[EffectCoverflow, Pagination, Autoplay]}
				className="mySwiper "
			>
				{" "}
				<div className="Video ">
					<SwiperSlide>
						<div className="grid grid cols-2 h-96">
							<div class="container2 mb-80">
								<iframe
									onClick={setBool}
									width="315"
									height="400"
									className=" rounded-2xl border-2 "
									src="https://youtube.com/embed/OhzDsHCnrRE?si=5TIG4AWRfqa14-xS"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share"
									allowfullscreen
								></iframe>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="grid grid cols-2 h-96">
							<div class="container2 mb-80">
								<iframe
									onClick={setBool}
									width="315"
									height="400"
									className=" rounded-2xl border-2 "
									src="https://www.youtube.com/embed/eD8XXCoaliI"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share"
									allowfullscreen
								></iframe>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="grid grid cols-2 h-96">
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
						<div className="grid grid cols-2 h-96">
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
						<div className="grid grid cols-2 h-96">
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
						<div className="grid grid cols-2  h-96">
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

					<SwiperSlide>
						<div className="grid grid cols-2 h-96 ">
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
				</div>
			</Swiper>
		</>
	);
}
