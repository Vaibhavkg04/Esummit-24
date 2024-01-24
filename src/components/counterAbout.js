import styled from "styled-components";
import Attendees from "../assets/attendees.png";
import Speaker from "../assets/speaker.png";
import Bulb from "../assets/bulb.png";
import Investors from "../assets/investors.png";
import CountUp from "react-countup";

function AboutComponent() {
	return (
		<AboutSection>
			<About>
				<Infographics>
					<GridContainer>
						<GridItem>
							<img height={30} width={30} src={Attendees} alt="logo" />
							<Heading>Attendees</Heading>
							<span>
								<CountUp start={0} end={5000} delay={0} duration={5} />+
							</span>
						</GridItem>
						<GridItem>
							<img height={30} width={30} src={Speaker} alt="logo" />
							<Heading>Speakers</Heading>
							<span>
								<CountUp start={0} end={5} delay={1} duration={5} />+
							</span>
						</GridItem>
						<GridItem>
							<img height={30} width={30} src={Bulb} alt="logo" />
							<Heading>Startups</Heading>
							<span>
								<CountUp start={0} end={15} delay={3} duration={5} />+
							</span>
						</GridItem>
						<GridItem>
							<img height={30} width={30} src={Investors} alt="logo" />
							<Heading>Events</Heading>
							<span>
								<CountUp start={0} end={8} delay={2} duration={5} />+
							</span>
						</GridItem>
					</GridContainer>
				</Infographics>
			</About>
		</AboutSection>
	);
}

const About = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	color: white;
	font-size: 20px;
	gap: 2rem; /* Increased the gap between components */
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: repeat(4, 1fr);
	gap: 5rem;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);
	}
`;

const GridItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Infographics = styled.div`
	font-weight: 600;
`;

const Heading = styled.div`
	font-weight: 600;
`;

const AboutSection = styled.div``;

export default AboutComponent;
