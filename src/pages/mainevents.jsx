import { EventsEsummit } from "../utils/EventData";
import Carousel from "./Carousel";
import { useNavigate } from "react-router-dom";

import MainEventCard from "../components/mainEventcard";

export default function Eventsmain() {
	const navigate = useNavigate();
	function Teleport() {
		navigate("/Events");
	}
	return (
		<>
			<div
				style={{ backgroundImage: ` url(${`images/background.jpg`})` }}
				className=" h-cover w-[100%] opacity-900 contrast-125 bg-cover "
			>
				<div className="flex justify-center items-center pt-[100px]">
					<h1 className="text-sky-400 font-bold lg:text-5xl text-5xl font-Orbitron">
						Events
					</h1>
				</div>

				<div className=" flex flex-wrap  items-center justify-center gap-[50px] lg:px-[50px] pt-[80px] pb-[60px]">
					{EventsEsummit.map((event) => (
						<div className="cursor-pointer" onClick={Teleport}>
							<MainEventCard
								title={event.title}
								tagline={event.tagline}
								image={event.image}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
