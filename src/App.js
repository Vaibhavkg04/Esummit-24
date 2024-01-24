import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Speakers from "./pages/Speakers";
import Sponsors from "./pages/Sponsors";
import AA from "./pages/ANCIENT_ENTREPRENEUR";
import RP from "./pages/REVERSE_PITCHING";
import SS from "./pages/STOCK_STOICISM";
import IA from "./pages/IPL_AUCTION";
import BT from "./pages/BIT_THON";
import SM from "./pages/Startup_Mela";
import B from "./pages/BGMI";
import QT from "./pages/QUIZ-TRIVIA";

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/Abouts" element={<About />} />
				<Route path="/Events" element={<Events />} />
				<Route path="/Speakers" element={<Speakers />} />
				<Route path="/Sponsors" element={<Sponsors />} />
				<Route path="/ANCIENT_ENTREPRENEUR" element={<AA />} />
				<Route path="/REVERSE_PITCHING" element={<RP />} />
				<Route path="/QUIZ-TRIVIA" element={<QT />} />
				<Route path="/IPL_AUCTION" element={<IA />} />
				<Route path="/BGMI" element={<B />} />
				<Route path="/BIT_THON" element={<BT />} />
				<Route path="/STOCK_STOICISM" element={<SS />} />
				<Route path="/Starup_Mela" element={<SM />} />
			</Routes>
		</>
	);
}

export default App;
