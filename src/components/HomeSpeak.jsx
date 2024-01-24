import React from "react";
import Marquee from "react-fast-marquee";
import styled, { keyframes, css } from "styled-components";

import img1 from "../assets/4.jpeg";
import img2 from "../assets/amanDhat.jpeg";
import img3 from "../assets/2.jpeg";
import img4 from "../assets/ayush.jpeg";
import img5 from "../assets/3.jpg";
import img6 from "../assets/5.jpeg";
import img7 from "../assets/abhinav.jpeg";
import img8 from "../assets/anand.jpeg";
import img9 from "../assets/7.jpeg";
import img10 from "../assets/1.jpeg";
import AboutComponent from "./counterAbout";
import { useNavigate } from "react-router-dom";

export default function HomeSpeak() {
	const navigate = useNavigate();
	function Teleport() {
		navigate("/Speakers");
	}
	return (
		<>
			<div
				style={{
					backgroundImage: ` url(${`images/background.jpg`})`,
				}}
				className=" h-auto w-[100%] opacity-900 contrast-125 bg-cover "
			>
				<br />
				<br />

				<h1 className="text-center text-sky-400 max-[600px]: mt- py-0 max-[600px]:text-4xl text-6xl font-Orbitron font-bold">
					Past Speakers
				</h1>
				<Marquee direction="right" pauseOnHover speed={100} delay={5}>
					<div>
						<ImageGroup>
							<Image src={img1} onClick={Teleport} />
						</ImageGroup>
					</div>
					<div className="image_wrapper rounded-full">
						<ImageGroup>
							<Image src={img2} onClick={Teleport} />
						</ImageGroup>
					</div>
					<div className="image_wrapper">
						<ImageGroup>
							<Image src={img3} onClick={Teleport} />
						</ImageGroup>
					</div>

					<div className="image_wrapper">
						<ImageGroup>
							<Image src={img4} onClick={Teleport} />
						</ImageGroup>
					</div>
					<div className="image_wrapper">
						<ImageGroup>
							<Image src={img5} onClick={Teleport} />
						</ImageGroup>
					</div>
					<div className="image_wrapper">
						<ImageGroup>
							<Image src={img6} onClick={Teleport} />
						</ImageGroup>
					</div>
					<div className="image_wrapper">
						<ImageGroup>
							<Image src={img7} onClick={Teleport} />
						</ImageGroup>
					</div>
					<div className="image_wrapper">
						<ImageGroup>
							<Image src={img8} onClick={Teleport} />
						</ImageGroup>
					</div>
					<div className="image_wrapper">
						<ImageGroup>
							<Image src={img9} onClick={Teleport} />
						</ImageGroup>
					</div>
					<div className="image_wrapper">
						<ImageGroup>
							<Image src={img10} onClick={Teleport} />
						</ImageGroup>
					</div>
				</Marquee>
				<AboutComponent />
			</div>
		</>
	);
}

const ImageGroup = styled.div`
	display: grid;
	margin-right: 20px;
	margin-top: 30px;
	margin-bottom: 30px;
	place-items: center;
	border-radius: 50%;
	width: clamp(10rem, 1rem + 40vmin, 30rem);
	padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
	object-fit: contain;
	width: 100%;
	height: 100%;
	background-color: white;
	/* border: 1px solid black; */
	border-radius: 50%;
	aspect-ratio: 1/1;
	scale: 0.9;
	padding: 20px 20px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
