import React from "react";
import styled, { keyframes } from "styled-components";
import Countdown from "../Countdown";
import { zoomIn } from "react-animations";

const TopSectionContainer = styled.div`
	position: absolute;

	top: 13%;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 13%;
	z-index: 33;

	@media (max-width: 768px) {
		position: absolute;

		margin-bottom: 0;
		top: 20%;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 0;
		z-index: 1;
	}

	@media screen and (min-width: 400px) and (max-device-width: 600px) {
		position: absolute;
		margin-bottom: 0;
		top: 20%;
		left: 5%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 0;
		z-index: 1;
		width: 35vw;
	}

	@media screen and (min-width: 150px) and (max-device-width: 400px) {
		position: absolute;
		margin-bottom: 0;
		top: 20%;
		left: -105%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 0;
		z-index: 1;
		background-size: cover;
	}

	@media screen and (min-width: 150px) and (max-device-width: 400px) {
		position: absolute;
		margin-bottom: 0;
		top: 20%;
		left: -105%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 0;
		z-index: 1;
		background-size: cover;
	}
`;

const Logo = styled.h1`
	margin: 0;
	color: #fff;
	font-weight: 800;
	font-size: 80px;

	text-shadow: 0px 0px 5px #06c3ff, 0px 0px 10px #06c3ff, 0px 0px 10px #06c3ff,
		0px 0px 20px #06c3ff;
	&:hover {
		text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
			0px 0px 20px #b393d3;
	}
	@media (width>=768px) {
		position: relative;
		left: 12%;
	}
	@media (max-width: 768px) {
		font-size: 40px;
		margin: 0;
		font-weight: 800;
	}

	@media screen and (min-width: 400px) and (max-device-width: 600px) {
		font-size: 40px;
		line-height: 40px;
		margin: 0;
		font-weight: 800;
		white-space: nowrap;
		padding-left: 50vw;
	}

	@media screen and (min-width: 150px) and (max-device-width: 300px) {
		font-size: 32px;
		line-height: 40px;
		margin: 0;
		font-weight: 800;
		white-space: nowrap;
		padding-left: 99vw;
	}

	@media screen and (min-width: 301px) and (max-device-width: 399px) {
		font-size: 32px;
		line-height: 40px;
		margin: 0;
		font-weight: 800;
		white-space: nowrap;
		padding-left: 114vw;
	}
`;

const Slogan = styled.h4`
	@media (width>=768px) {
		position: relative;
		left: 12%;
	}
	@media (max-width: 768px) {
		font-weight: 700;
		font-size: 20px;
		margin-top: 10px;
		margin-left: 0;
	}

	margin: 0;
	color: #fff;
	font-weight: 700;
	font-size: 30px;
	margin-top: 10px;
	text-shadow: 0px 0px 5px #06c3ff, 0px 0px 10px #06c3ff, 0px 0px 10px #06c3ff,
		0px 0px 20px #06c3ff;
	transition: transform 0.3s ease-in-out;

	&:hover {
		text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
			0px 0px 20px #b393d3;
		transform: scale(1.1); /* Adjust the scale factor as needed */
	}

	@media screen and (min-width: 150px) and (max-device-width: 300px) {
		font-size: 13px;
		padding-left: 65vw;
	}

	@media screen and (min-width: 301px) and (max-device-width: 399px) {
		font-size: 13px;
		padding-left: 95vw;
	}
	@media screen and (min-width: 400px) and (max-device-width: 600px) {
		font-size: 13px;
		padding-left: 50vw;
		white-space: nowrap;
	}
`;

const Paragraph = styled.p`
	margin: 0;
	margin-top: 3em;
	color: #fff;
	font-size: 14px;
	line-height: 1.5;
	font-weight: 500;
	max-width: 35%;
	text-align: center;

	@media (min-width: 640 px) {
		margin: 0;
		margin-top: 3em;
		color: #fff;
		font-size: 14px;
		line-height: 1.5;
		font-weight: 500;
		max-width: 15%;
		text-align: center;
	}
`;

const DonateButton = styled.button`
	outline: none;
	border: none;
	background-color: #27b927;
	color: #fff;
	font-size: 16px;
	font-weight: 700;
	border-radius: 8px;
	padding: 8px 2em;
	margin-top: 3em;
	cursor: pointer;
	border: 2px solid transparent;
	transition: all 350ms ease-in-out;

	&:hover {
		background-color: transparent;
		border: 2px solid #27b927;
	}
`;

const MadeBy = styled.h3`
	color: #fff;
	position: fixed;
	bottom: 5px;
	left: 50%;
	transform: translateX(-50%);
`;

export function TopSection() {
	return (
		<TopSectionContainer className="cursor-grab text-center mt-0 lg:ml-80 md:ml-76 select-none">
			<div className="ml-10">
				<Logo className=""> E-SUMMIT 2024</Logo>
				<div className="text-center ml-0">
					<Slogan> January 26-28, 2024</Slogan>
				</div>
				<Paragraph></Paragraph>

				<div>
					<Countdown />
				</div>
			</div>
		</TopSectionContainer>
	);
}
