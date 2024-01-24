import React from "react";

import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "../components/earth/index";
import { TopSection } from "../components/topSection/index1";

const CanvasContainer = styled.div`
	width: 100%;
	height: 100%;
`;

export default function Zest() {
	return (
		<>
			<CanvasContainer>
				<Canvas>
					<Suspense fallback={null}>
						<Earth />
					</Suspense>
				</Canvas>
				<TopSection />
			</CanvasContainer>
		</>
	);
}
