// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import fifa from "../assets/fifa1.jpg";
import bellagio from "../assets/BELLAGIO.png";
import valorante from "../assets/valorant.jpg";
import storagewars from "../assets/storagewars.png";
import boardroom23 from "../assets/Boardroom.png";
import ipl2023 from "../assets/IPLAUCTION.png";
import ancient from "../assets/AncientEntrepreneur.jpg";
import bplan23 from "../assets/BPlan.png";
import bquiz23 from "../assets/BQuiz.png";

import boardroom from "../assets/boardroom.svg";
import bplan from "../assets/bplan.svg";
import crypto from "../assets/crypto.svg";
import esport from "../assets/esport.svg";
import football from "../assets/footballAuction.svg";
import house from "../assets/houseofcards.svg";
import ipl from "../assets/iplAuction.svg";
import money from "../assets/moneyball.svg";
import monopoly from "../assets/monopoly.svg";
import pitch from "../assets/pitch.svg";
import poker from "../assets/poker.svg";
import storage from "../assets/storage.svg";
import wolf from "../assets/wolf.svg";
import movie from "../assets/movie.svg";

export default function App() {
	return (
		<>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				autoplay={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				<div
					style={{ backgroundImage: ` url(${`images/bg.jpg`})` }}
					className=" h-full w-[100%] bg-cover"
				>
					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={fifa} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">Fifa'23 </h1>
								<p className="text-sm"> </p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={bellagio} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl"> Bellagio</h1>
								<p className="text-sm"> </p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img
								className="col-span-1 rounded-2xl border-2"
								src={valorante}
							/>
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">
									El Valorante{" "}
								</h1>
								<p className="text-sm"> </p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img
								className="col-span-1 rounded-2xl border-2"
								src={storagewars}
							/>
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">
									{" "}
									Storage Wars
								</h1>
								<p className="text-sm"> </p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img
								className="col-span-1 rounded-2xl border-2"
								src={boardroom23}
							/>
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">
									{" "}
									Boardroom'23
								</h1>
								<p className="text-sm"> </p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={ipl2023} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">
									IPL Auction'23{" "}
								</h1>
								<p className="text-sm"> </p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={ancient} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">
									Ancient Entrepreneur{" "}
								</h1>
								<p className="text-sm"> </p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={bplan23} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">B-PLAN</h1>
								<p className="text-sm"> </p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={bquiz23} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">B-QUIZ</h1>
								<p className="text-sm"> </p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img
								className="col-span-1 rounded-2xl border-2"
								src={boardroom}
							/>
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl"> Pentagon</h1>
								<p className="text-sm"> The startup think tank</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img
								class="past"
								className="col-span-1 rounded-2xl border-2 "
								src={bplan}
							/>
							<div className="col-span-1 text-white ">
								<h1 className="text-sky-400 font-bold text-2xl">
									{" "}
									Unicorn League
								</h1>
								<p className="text-sm">B-Plan, Road to the billion</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid cols-2 p-5 ">
							<img className="col-span-1 rounded-2xl border-2  " src={crypto} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">
									Sahifolio Challenge
								</h1>
								<p className="text-sm">Presented by sahicoin</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={esport} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">Spike Rush</h1>
								<p className="text-sm">Let the game begin</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={football} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">OG Karts</h1>
								<p className="text-sm">Keep calm and race on</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={house} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">Bellagio</h1>
								<p className="text-sm">All or nothing (Online Poker)</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={ipl} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">
									IPL Kickoff's
								</h1>
								<p className="text-sm">Going once, Going Twice, Sold!</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={money} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">Bizalytics</h1>
								<p className="text-sm">Statistics to strategy</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={monopoly} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">Pennywise</h1>
								<p className="text-sm">Risk hai to ishq hai</p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={pitch} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">The Fued</h1>
								<p className="text-sm">The thrill awaits your presence</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={poker} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl">
									Under Pressure
								</h1>
								<p className="text-sm">Can you handle the heat?</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={storage} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl"> Pentagon</h1>
								<p className="text-sm"> The startup think tank</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid cols-2 ">
							<img className="col-span-1 rounded-2xl border-2" src={wolf} />
							<div className="col-span-1 text-white rounded-2xl">
								<h1 className="text-sky-400 font-bold text-2xl"> Pentagon</h1>
								<p className="text-sm"> The startup think tank</p>
							</div>
						</div>
					</SwiperSlide>
				</div>
			</Swiper>
		</>
	);
}
