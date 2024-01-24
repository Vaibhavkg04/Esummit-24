import React from "react";
import styled from "styled-components";
import Countdown from "../Countdown";

const TopSectionContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: #1756dd32;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 13%;
	z-index: 99;
`;

const Logo = styled.h1`
	margin: 0;
	color: #fff;
	font-weight: 800;
	font-size: 80px;
`;

const Slogan = styled.h4`
	margin: 0;
	color: #fff;
	font-weight: 700;
	font-size: 30px;
	margin-top: 10px;
`;

const Paragraph = styled.p`
	margin: 0;
	margin-top: 3em;
	color: #fff;
	font-size: 14px;
	line-height: 1.5;
	font-weight: 500;
	max-width: 30%;
	text-align: center;
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
		<div>
			<div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
				<div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
					<p>All Inclusive</p>
					<h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
						E-SUMMIT 2024
					</h1>
					<p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
						January 26-28, 2024
					</p>

					<button className="bg-white text-black "></button>
					<Countdown />
				</div>
			</div>
		</div>
	);
}
