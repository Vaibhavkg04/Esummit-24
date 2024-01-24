import React from "react";
import Countdown from "./Countdown";
import { zoomIn } from "react-animations";
import styled, { keyframes } from "styled-components";
const zoomInAnimation = keyframes`${zoomIn}`;
const BouncyDiv = styled.div`
	animation: 25s ${zoomInAnimation};
`;

function Title() {
	return (
		<div className="relative z-10  text-4xl justify-center text-white font-Orbitron italic font-black cursor-crosshair lg:text-9xl">
			<BouncyDiv>
				{" "}
				E-SUMMIT 2024 Dare To Begin
				<hr class=" mx-auto w-58 h-1 bg-gray-100 rounded border-0  dark:bg-gray-700"></hr>
				<div className="pt-16">
					{" "}
					<Countdown />
				</div>
			</BouncyDiv>
		</div>
	);
}
export default Title;
