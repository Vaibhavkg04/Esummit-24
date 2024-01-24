import { EventsEsummit } from "../utils/EventData";
import Carousel from "./Carousel";

import EventCard from "../components/EventCard";

export default function Events() {
	return (
		<>
			<div
				style={{
					backgroundImage: ` url(${`images/bgs.jpg`})`,
					backgroundRepeat: "repeat",
				}}
				className=" h-cover w-screen bg-cover overflow-x-hidden "
			>
				<div className="flex justify-center items-center pt-[100px]">
					<h1 className="text-sky-400 font-bold lg:text-5xl text-3xl font-Orbitron">
						Events
					</h1>
				</div>

				<div className=" flex flex-wrap  items-center align-middle justify-center gap-[90px] lg:px-[150px] pt-[80px] pb-[100px]">
					{EventsEsummit.map((event) => (
						<EventCard
							title={event.title}
							tagline={event.tagline}
							link={event.link}
							desc={event.desc}
							image={event.image}
						/>
					))}
				</div>

				<div>
					<div
						className="relative z-10  text-2xl font-epilogue pt-10 mt-9 text-center  w-17  
            lg:text-5xl text-sky-400   "
					>
						Past Events
					</div>

					<div className="md:p-20 ">
						<Carousel />
					</div>
				</div>
			</div>
		</>
	);
}
