import "./Zest.css";
import HomeSponsors from "./HomeSponsors";
import About from "../pages/About";
import Contact from "./contact";

import Zest from "./Zest";
import Eventsmain from "../pages/mainevents";
import HomeSpeak from "./HomeSpeak";
import Curr from "../pages/speakersC";

/*const styles = {
  zoomIn: {
    animation: ' x 25s  ',
    animationIterationCount:'infinite',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
}*/

export default function Home() {
	return (
		<>
			<Zest />

			<About />
			<Eventsmain />
			<Curr />
			<HomeSpeak />
			<HomeSponsors />
			<Contact />
		</>
	);
}
