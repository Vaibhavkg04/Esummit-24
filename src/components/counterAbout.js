import styled from "styled-components";
import Attendees from "../assets/attendees.png";
import Speaker from "../assets/speaker.png";
import Bulb from "../assets/bulb.png";
import Investors from "../assets/investors.png";
// import { useTimer } from '../hooks/useTimer';
import CountUp from "react-countup";

function AboutComponent() {
	// let participantCount = useTimer(0, 5000);
	// let startupCount = useTimer(0, 15);
	// let speakersCount = useTimer(0, 5);
	// let eventsCount = useTimer(0, 8);
	return (
		<AboutSection>
			<About>
				<Infographics>
					<div className="flex  ">
						<UpperCounter>
							<div className="mr-20">
								<img height={30} width={30} src={Attendees} alt="logo" />
								<Heading>Attendees</Heading>
								<span>
									<CountUp start={0} end={5000} delay={0} duration={5} />+
								</span>
							</div>
							<div className="mr-20">
								<img height={30} width={30} src={Speaker} alt="logo" />
								<Heading>Speakers</Heading>
								<span>
									<CountUp start={0} end={5} delay={1} duration={5} />+
								</span>
							</div>
						</UpperCounter>
						<LowerCounter>
							<div className="mr-20">
								<img height={30} width={30} src={Bulb} alt="logo" />
								<Heading>Startups</Heading>
								<span>
									<CountUp start={0} end={15} delay={3} duration={5} />+
								</span>
							</div>
							<div className="pb-4 mr-20">
								<img height={30} width={30} src={Investors} alt="logo" />
								<Heading>Events</Heading>
								<span>
									<CountUp start={0} end={8} delay={2} duration={5} />+
								</span>
							</div>
						</LowerCounter>
					</div>
				</Infographics>
			</About>
		</AboutSection>
	);
}

const About = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	@media (max-width: 768px) {
		flex-wrap: wrap;
	}
	color: white;
	font-size: 20px;

	gap: 4rem;
`;
// const AboutContent = styled.div`
//   padding-bottom: 1rem;
//   text-align: left;
// `;
const Infographics = styled.div`
	font-weight: 600;
`;

const UpperCounter = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	gap: 4rem;
`;

const LowerCounter = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem;
	gap: 4rem;
`;
const Heading = styled.div`
	font-weight: 600;
`;

// const Header = styled.div`
//   background-image: linear-gradient(
//     to right,
//     #f76c6c,
//     #e8637c,
//     #d45f8a,
//     #bc5e93,
//     #a25e97
//   );
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-size: 56px;
//   font-weight: bold;
// `;
const AboutSection = styled.div``;
export default AboutComponent;
