import swipers from "./speaker/Swipers";
import React from "react";
import Carousel from "./Carousel";

import Swipers from "./speaker/Swipers";

import styled from "styled-components";

import ravi from "../assets/ravi.jpg";
import akhay from "../assets/akhay.jpg";
import pawan from "../assets/pawan (2).jpg";
import vatsal from "../assets/vatsal.jpg";
import jyoti from "../assets/jyoti.jpg";

import "./styles.css";
import Carousel1 from "./Carousel1";

export default function Speakers() {
	return (
		<>
			<div className="  overflow-hidden  ">
				<div
					style={{
						backgroundImage: ` url(${`images/bgs.jpg`})`,
						backgroundRepeat: "repeat",
					}}
					className=" h-cover w-cover bg-cover"
				>
					<div className="py-6">
						<h1 className=" text-center pt-20  mb-8 font-bold lg:text-5xl text-3xl font-Orbitron text-sky-400">
							Current Speakers
						</h1>
					</div>

					<section className="">
						<div className="container mx-auto">
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
								<div className="bg-inherit shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
									<img
										class="imgg"
										className="mb-8 brightness-100 imgg object-contain"
										src={ravi}
										alt=""
									/>
									<div className="border-b-4 border-t-4 border-b-sky-400 border-t-sky-400  p-4">
										<div className="mb-4 flex gap-x-2 text-2xl justify-center ">
											<div className=" text-sky-400 font-Orbitron font-black px-5 inline-block  object-contain">
												RAVI RANJAN
											</div>
										</div>
										<div className="text-lg text-center text-white font-semibold ">
											<h1 className="text-sky-400 text-xl">
												Trailblazing Talks: Executive Odyssey Unleashed
											</h1>

											<div className="p-5 text-md">
												{" "}
												28th january 5:00-8:00 PM
											</div>
											<div className="text-md">CAT HALL</div>
										</div>
									</div>
								</div>

								<div className="bg-inherit shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
									<img
										class="imgg"
										className="mb-8 brightness-150 imgg  object-contain"
										src={akhay}
										alt=""
									/>
									<div className="border-b-4 border-t-4 border-b-sky-400 border-t-sky-400  p-4">
										<div className="mb-4 flex gap-x-2 text-xl justify-center ">
											<div className=" text-sky-400 font-Orbitron font-black px-5 inline-block">
												AKSHAY MAKAR
											</div>
										</div>
										<div className="text-lg text-center text-white font-semibold ">
											<h1 className="text-sky-400 text-xl">
												Director's Cut: Unveiling the Entrepreneurial Journey
											</h1>

											<div className="p-5 text-md">
												27th January 11:00AM - 1:00PM
											</div>
											<div className="text-md">CAT HALL</div>
										</div>
									</div>
								</div>

								<div className="bg-inherit shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
									<img
										class="imgg"
										className="mb-8 brightness-150 imgg  object-contain"
										src={pawan}
										alt=""
									/>
									<div className="border-b-4 border-t-4 border-b-sky-400 border-t-sky-400  p-4">
										<div className="mb-4 flex gap-x-2 text-[21px] justify-center ">
											<div className=" text-sky-400 font-Orbitron font-black px-5 inline-block">
												PAWAN KUMAR RAI
											</div>
										</div>
										<div className="text-lg text-center text-white font-semibold ">
											<h1 className="text-sky-400 text-xl">
												Entrepreneurial Elevation: Dialogues with Industry
												Pioneers
											</h1>

											<div className="p-5 text-md">
												27th January 6:00-8:00PM
											</div>
											<div className="text-md">SEMINAR HALL I</div>
										</div>
									</div>
								</div>

								<div className="bg-inherit shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
									<img
										class="imgg"
										className="mb-8 brightness-100 imgg  object-contain"
										src={vatsal}
										alt=""
									/>
									<div className="border-b-4 border-t-4 border-b-sky-400 border-t-sky-400  p-4">
										<div className="mb-4 flex gap-x-2 text-[20px] justify-center ">
											<div className=" text-sky-400 font-Orbitron font-black px-5 inline-block">
												VATSAL KANAKIYA
											</div>
										</div>
										<div className="text-lg text-center text-white font-semibold ">
											<h1 className="text-sky-400 text-xl">
												Innovator Insights: Fireside Chats
											</h1>

											<div className="p-5 text-md">
												28th January 11:00-1:00PM
											</div>
											<div className="text-md">CAT HALL</div>
										</div>
									</div>
								</div>

								<div className="bg-inherit shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
									<img
										class="imgg"
										className="mb-8 brightness-150 imgg  object-contain"
										src={jyoti}
										alt=""
									/>
									<div className="border-b-4 border-t-4 border-b-sky-400 border-t-sky-400  p-4">
										<div className="mb-4 flex gap-x-2 text-2xl justify-center ">
											<div className=" text-sky-400 font-Orbitron font-black px-5 inline-block">
												JYOTI AGARWAL
											</div>
										</div>
										<div className="text-lg text-center text-white font-semibold ">
											<h1 className="text-sky-400 text-xl">
												Executive Exchange: Wisdom from the Top
											</h1>

											<div className="p-5 text-md">
												26th January 4:00-6:00 PM.
											</div>
											<div className="text-md">CAT HALL</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div className="py-6">
						<h1 className="text-sky-400 text-center pt-20  mb-8 font-bold lg:text-5xl text-3xl font-Orbitron text-sky-400">
							Past Speakers
						</h1>
					</div>
					<Carousel1 />
				</div>
			</div>
		</>
	);
}

const Oval = styled.div`
	border-bottom-left-radius: 50% 40%;
	border-bottom-right-radius: 50% 40%;
	border-top-left-radius: 50% 60%;
	border-top-right-radius: 50% 60%;
`;
