import React, { useEffect } from "react";
// import Header from "../components/Header";
// import iibg from "../assets/bg/bg.jpg";
// import iiibg from "../assets/bg/bg.jpg";
import Swiper from "swiper";
import "swiper/css";
import SponsorBox from "../pages/Sponsors/Sponsor";
import styled from "styled-components";
import {
	NewSponsors,
	TitleSponsor,
	copreSponsor,
	associationSponsor,
	investSponsor,
	mediaSponsor,
	gameSponsor,
	learnSponosor,
	startSponsor,
	copowSponsor,
} from "./data";
import {
	TitleSponsor1,
	copreSponsor1,
	associationSponsor1,
	fashionpartner,
	travelpartner,
	learnSponosor1,
	copowSponsor1,
	foodpartner,
	healthpartner,
	wafflepartner,
} from "../utils/Sponsors23";
import PastCard from "../components/PastCard";

import YouthIncorporated from "../assets/newSponsors/YouthIncorporated.png";
import InterviewBuddy from "../assets/newSponsors/InterviewBuddy.png";
import DUBeat from "../assets/newSponsors/DU Beat - An Independent Student Newspaper.jpg";
import StartupStartkaro from "../assets/newSponsors/startupstartkaro-logo.png";
import Finstreet from "../assets/newSponsors/FinSTREET.jpg";
import CampusTimePune from "../assets/newSponsors/campus time pune.png";
import MFL_Educlub from "../assets/newSponsors/MFL Educlub.png";
import LearningWhileTravelling from "../assets/newSponsors/Learning While Travelling.png";
import GrowthSchool from "../assets/newSponsors/GrowthSchool3.png";
import PokerStreet from "../assets/newSponsors/Pokerstreet.jpg";
import Dare2Compete from "../assets/newSponsors/dare2Compete.jpg";
import BlueHillPublication from "../assets/newSponsors/BlueHillPublication.png";
import HPCL from "../assets/newSponsors/HPCL.jpg";
import YesStartups from "../assets/newSponsors/YESSTARTUP.png";
import Edufabrica from "../assets/newSponsors/EDUFABRICA.jpeg";
import AngelOne from "../assets/newSponsors/AngelOne.png";
import Codingal from "../assets/newSponsors/Codingal.jpg";
import Rapido from "../assets/newSponsors/Rapido.png";
import NoticeBard from "../assets/newSponsors/NoticeBard.png";
import IndianAcademyofEntrepreneurship from "../assets/newSponsors/Indian Academy of Entrepreneurship.jpeg";
import GrabOn from "../assets/newSponsors/GrabOn.png";
import CodingNinjas from "../assets/newSponsors/CodingNinjas.svg";
import BadeLog from "../assets/newSponsors/BadeLog.jpeg";
import RadioCity from "../assets/newSponsors/RadioCity.jpg";
import Hiralal from "../assets/newSponsors/Hiralal.jpeg";
import gfg from "../assets/newSponsors/gfg.png";
import SahiCoin from "../assets/newSponsors/SahiCoin.svg";
import custkart from "../assets/newSponsors/custkart.png";
import pizzahut from "../assets/newSponsors/pizzahut.png";
import stockedge from "../assets/newSponsors/stockedge.jpg";
import xvc from "../assets/newSponsors/100xvc.png";
import devtown from "../assets/newSponsors/devtown.svg";
import Karostartup from "../assets/newSponsors/KaroStartup.jpg";
import yhills from "../assets/newSponsors/YHills.png";
import swiftskill from "../assets/newSponsors/swiftskills.png";
import startuplab from "../assets/newSponsors/Thestartuplab.png";
import gather from "../assets/newSponsors/Gather.png";
import certificate from "../assets/newSponsors/Givemycertificate.png";
import ekcle from "../assets/newSponsors/Ekcleventures.png";
import urbanBrava from "../assets/newSponsors/urbanBrava.png";
import gdsc from "../assets/newSponsors/gdsc.png";
import devdun from "../assets/newSponsors/devdun.png";
import rubrix from "../assets/newSponsors/rubrix.png";
import puma from "../assets/newSponsors/puma.png";
import lawyered from "../assets/newSponsors/lawyered.png";
import myways from "../assets/sponsors/Myways.png";
import floxus from "../assets/sponsors/floxus.png";
import fincess from "../assets/newSponsors/fincess.png";
import indibni from "../assets/newSponsors/indibni.jpeg";
import startupEd from "../assets/newSponsors/startupEd.png";

// past sponsors k22
import nissan from "../assets/newSponsors/past2022/download.png";
import acer from "../assets/newSponsors/past2022/acer.png";
import beardo from "../assets/newSponsors/past2022/beardo.png";
import factory from "../assets/newSponsors/past2022/bfactory.png";
import bmw from "../assets/newSponsors/past2022/bmw.png";
import campus from "../assets/newSponsors/past2022/campus.png";
import chillar from "../assets/newSponsors/past2022/ChillarInvestments.png";
import danik from "../assets/newSponsors/past2022/DanikBhaskar.jpeg";
import elm from "../assets/newSponsors/past2022/elm.png";
import henry from "../assets/newSponsors/past2022/HH.png";
import kards from "../assets/newSponsors/past2022/kards.jpg";
import legalxpo from "../assets/newSponsors/past2022/legalxpo.jpg";
import rapido from "../assets/newSponsors/past2022/rapido.png";
import time from "../assets/newSponsors/past2022/time.png";
import precap from "../assets/newSponsors/past2022/PRECAP.png";
import sanako from "../assets/newSponsors/past2022/sanako.jpeg";
import startex from "../assets/newSponsors/past2022/startex.jpg";
import startuped from "../assets/newSponsors/past2022/startuped.jpg";
import subway from "../assets/newSponsors/past2022/subway.png";
import mahindra from "../assets/newSponsors/past2022/mahindra.jpeg";
import TOI from "../assets/newSponsors/past2022/TOI.jpg";
import TRENDS from "../assets/newSponsors/past2022/TRENDS.jpeg";
import venture from "../assets/newSponsors/past2022/venturelab.png";
import youth from "../assets/newSponsors/past2022/youth.png";
import zionverse from "../assets/newSponsors/past2022/Zion.png";
import unstop from "../assets/newSponsors/past2022/unstoplogo.png";

const Sponsors = ({ data }) => {
	useEffect(() => {
		var swiper = new Swiper(".swiper-container", {
			effect: "coverflow",
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: "auto",
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			},
			autoplay: {
				delay: 2000,
			},

			scrollbar: {
				el: ".swiper-scrollbar",
				draggable: true,
			},
		});
	}, []);
	useEffect(() => {
		var swiper = new Swiper(".people-carousel", {
			effect: "swipe",
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: "auto",
			autoplay: {
				delay: 1000,
			},
		});
	}, []);

	return (
		<>
			<div className="  overflow-hidden  ">
				<div
					style={{
						backgroundImage: ` url(${`images/bgs.jpg`})`,
						backgroundRepeat: "repeat",
					}}
					className=" h-cover w-[100%] bg-cover"
				>
					<div className="pt-8">
						<SectionContainer id="sponsors">
							<Heading>Our Sponsors</Heading>
							<SponsorHeading>Title Sponsor</SponsorHeading>
							<EventsContainer>
								{TitleSponsor1.map((sponsor) => {
									return <SponsorBox data={sponsor} />;
								})}
							</EventsContainer>

							<div className="flex md:flex-row flex-col justify-evenly items-center">
								{/* <div className="flex flex-col">
                  <SponsorHeading>Co-Presented By</SponsorHeading>
                  <EventsContainer>
                    {copreSponsor1.map((sponsor) => {
                      return <SponsorBox data={sponsor} />;
                    })}
                  </EventsContainer>
                </div> */}

								<div className="flex flex-col">
									<SponsorHeading>Co-Powered By</SponsorHeading>
									<EventsContainer>
										{copowSponsor1.map((sponsor) => {
											return <SponsorBox data={sponsor} />;
										})}
									</EventsContainer>
								</div>
							</div>

							<EventsContainer></EventsContainer>

							<SponsorHeading>Fashion Partner</SponsorHeading>
							<EventsContainer>
								{fashionpartner.map((sponsor) => {
									return <SponsorBox data={sponsor} />;
								})}
							</EventsContainer>

							<SponsorHeading>Travel Partners</SponsorHeading>
							<EventsContainer>
								{travelpartner.map((sponsor) => {
									return <SponsorBox data={sponsor} />;
								})}
							</EventsContainer>
							<SponsorHeading>Learning Partners</SponsorHeading>
							<EventsContainer>
								{learnSponosor1.map((sponsor) => {
									return <SponsorBox data={sponsor} />;
								})}
							</EventsContainer>

							<SponsorHeading>Food Partners</SponsorHeading>
							<EventsContainer>
								{foodpartner.map((sponsor) => {
									return <SponsorBox data={sponsor} />;
								})}
							</EventsContainer>

							<SponsorHeading>Health Partners</SponsorHeading>
							<EventsContainer>
								{healthpartner.map((sponsor) => {
									return <SponsorBox data={sponsor} />;
								})}
							</EventsContainer>
							<SponsorHeading>Waffle Partner</SponsorHeading>
							<EventsContainer>
								{wafflepartner.map((sponsor) => {
									return <SponsorBox data={sponsor} />;
								})}
							</EventsContainer>
						</SectionContainer>
					</div>
					<div class="startup-container">
						<h1
							className="text-[30px] font-Orbitron text-center text-sky-400"
							data-aos="fade-up"
							data-aos-easing="ease"
						>
							Previous Sponsors
						</h1>
						<div class="people-container">
							<div class="people-carousel">
								<div class="swiper-wrapper">
									<PastCard pic={mahindra} />
									<PastCard pic={nissan} />
									<PastCard pic={bmw} />
									<PastCard pic={unstop} />
									<PastCard pic={zionverse} />
									<PastCard pic={Hiralal} />
									<PastCard pic={YouthIncorporated} />
									<PastCard pic={CampusTimePune} />
									<PastCard pic={NoticeBard} />
									<PastCard pic={danik} />
									<PastCard pic={TOI} />
									<PastCard pic={sanako} />
									<PastCard pic={henry} />
									<PastCard pic={gfg} />
									<PastCard pic={InterviewBuddy} />
									<PastCard pic={Codingal} />
									<PastCard pic={floxus} />
									<PastCard pic={elm} />
									<PastCard pic={devtown} />
									<PastCard pic={time} />
									<PastCard pic={factory} />
									<PastCard pic={startuped} />
									<PastCard pic={startex} />
									<PastCard pic={venture} />
									<PastCard pic={startuplab} />
									<PastCard pic={ekcle} />
									<PastCard pic={acer} />
									<PastCard pic={beardo} />
									<PastCard pic={chillar} />
									<PastCard pic={kards} />
									<PastCard pic={legalxpo} />
									<PastCard pic={precap} />
									<PastCard pic={rapido} />
									<PastCard pic={TRENDS} />

									<PastCard pic={AngelOne} />
									<PastCard pic={HPCL} />
									<PastCard pic={gfg} />
									<PastCard pic={Finstreet} />
									<PastCard pic={YouthIncorporated} />
									<PastCard pic={pizzahut} />
									<PastCard pic={RadioCity} />
									<PastCard pic={InterviewBuddy} />
									<PastCard pic={DUBeat} />
									<PastCard pic={StartupStartkaro} />
									<PastCard pic={CampusTimePune} />
									<PastCard pic={BlueHillPublication} />
									<PastCard pic={MFL_Educlub} />
									<PastCard pic={LearningWhileTravelling} />
									<PastCard pic={GrowthSchool} />
									<PastCard pic={PokerStreet} />
									<PastCard pic={Dare2Compete} />
									<PastCard pic={YesStartups} />
									<PastCard pic={Edufabrica} />
									<PastCard pic={Codingal} />
									<PastCard pic={Rapido} />
									<PastCard pic={NoticeBard} />
									<PastCard pic={IndianAcademyofEntrepreneurship} />
									<PastCard pic={GrabOn} />
									<PastCard pic={CodingNinjas} />
									<PastCard pic={BadeLog} />
									<PastCard pic={Hiralal} />
									<PastCard pic={SahiCoin} />
									<PastCard pic={custkart} />
									<PastCard pic={stockedge} />
									<PastCard pic={xvc} />
									<PastCard pic={devtown} />
									<PastCard pic={Karostartup} />
									<PastCard pic={yhills} />
									<PastCard pic={swiftskill} />
									<PastCard pic={startuplab} />
									<PastCard pic={gather} />
									<PastCard pic={certificate} />
									<PastCard pic={ekcle} />
									<PastCard pic={urbanBrava} />
									<PastCard pic={gdsc} />
									<PastCard pic={devdun} />
									<PastCard pic={rubrix} />
									<PastCard pic={puma} />
									<PastCard pic={lawyered} />
									<PastCard pic={myways} />
									<PastCard pic={floxus} />
									<PastCard pic={fincess} />
									<PastCard pic={indibni} />
									<PastCard pic={startupEd} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sponsors;

const SectionContainer = styled.div`
	padding: 50px 0px 100px 0px;
	@media screen and (max-width: 800px) {
		padding: 50px 0px 50px 0px;
		text-align: left;
		border-bottom: 0.2px solid rgba(255, 255, 255, 0.5);
	}
	text-align: center;
	font-weight: 900;
`;

const Heading = styled.h1`
	display: block;
	background-image: linear-gradient(
		to right,
		#06c3ff,
		#59c9eb,
		#34c5f2,
		#36c8f5
	);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 56px;
	padding-bottom: 50px;
	text-align: center;
	font-family: Orbitron;
	font-weight: 900;
`;

const SponsorHeading = styled.h1`
	display: block;
	background-image: linear-gradient(
		to right,
		#06c3ff,
		#59c9eb,
		#34c5f2,
		#36c8f5
	);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: white;
	font-size: 24px;
	text-align: center;
`;
//background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);

const EventsContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	border-radius: 20px;
	padding: ${(props) => {
		if (props.back) {
			return "20px";
		} else {
			return "20px 0px 30px 0px";
		}
	}};
	background-color: ${(props) => {
		if (props.back) {
			return "#151629";
		} else {
			return "rgba(0,0,0,0)";
		}
	}};
`;
