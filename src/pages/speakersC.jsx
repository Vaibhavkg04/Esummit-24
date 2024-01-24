import { EventsEsummit } from "../utils/EventData";
import Carousel from "./Carousel";
import { useNavigate } from "react-router-dom";
import Scard from "../components/Scard";

import MainEventCard from "../components/mainEventcard";
import ravi from "../assets/ravi.jpg";
import akhay from "../assets/akhay.jpg";
import pawan from "../assets/pawan (2).jpg";
import vatsal from "../assets/vatsal.jpg";
import jyoti from "../assets/jyoti.jpg";
export default function Curr() {
	return (
		<>
			<div
				style={{ backgroundImage: ` url(${`images/background.jpg`})` }}
				className=" h-cover w-[100%] opacity-900 contrast-125 bg-cover "
			>
				<div className="flex justify-center items-center pt-[100px]">
					<h1 className="text-sky-400 font-bold lg:text-5xl text-4xl font-Orbitron">
						Current Speakers
					</h1>
				</div>

				<div className=" flex flex-wrap  items-center justify-center gap-[50px] lg:px-[50px] pt-[80px] pb-[60px]">
					<div className="cursor-pointer">
						<Scard image={ravi} />
					</div>
					<div className="cursor-pointer">
						<Scard image={jyoti} />
					</div>
					<div className="cursor-pointer">
						<Scard image={vatsal} />
					</div>
					<div className="cursor-pointer">
						<Scard image={pawan} />
					</div>
					<div className="cursor-pointer">
						<Scard image={akhay} />
					</div>
				</div>
			</div>
		</>
	);
}
