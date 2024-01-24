import React from "react";
import Marquee from "react-fast-marquee";
import styled, { keyframes, css } from "styled-components";
import img1 from "../assets/sponsorsk23/codingal.png";
import img3 from "../assets/sponsorsk23/easymytrip.png";
import img4 from "../assets/sponsorsk23/gfg.png";
import img5 from "../assets/sponsorsk23/hiralal.png";
import img6 from "../assets/sponsorsk23/kareems.jpg";
import img7 from "../assets/sponsorsk23/subway.png";
import img8 from "../assets/sponsorsk23/logo-heritage.png";
import img9 from "../assets/sponsorsk23/trends.png";
import img10 from "../assets/sponsorsk23/unstop-icon-800x800.png";
import img11 from "../assets/sponsorsk23/waffcha.png";
import img12 from "../assets/sponsorsk23/wowdetailingstudio.png";
import { useNavigate } from "react-router-dom";

export default function HomeSponsors() {
	const navigate = useNavigate();
	function Teleport() {
		navigate("/Sponsors");
	}
	return (
		<>
			<div
				style={{
					backgroundImage: ` url(${`images/background.jpg`})`,
				}}
				className=" h-auto w-[100%] opacity-900 contrast-125 bg-cover py-16"
			>
				<br />
				<br />

				<h1 className="text-center text-sky-400 max-[600px]: mt- py-0 max-[600px]:text-4xl text-6xl font-Orbitron font-bold">
					Sponsors
				</h1>
				<Marquee direction="left" pauseOnHover speed={100} delay={5}>
					<div>
						<ImageGroup>
							<Image src={img1} onClick={Teleport} />
						</ImageGroup>
					</div>

					<div className="image_wrapper">
						<ImageGroup>
							<Image src={img7} onClick={Teleport} />
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
					<div className="image_wrapper">
						<ImageGroup>
							<Image src={img11} onClick={Teleport} />
						</ImageGroup>
					</div>
					<div className="image_wrapper">
						<ImageGroup>
							<Image src={img12} onClick={Teleport} />
						</ImageGroup>
					</div>
				</Marquee>
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
	scale: 0.9;
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
	padding: 4px 4px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
