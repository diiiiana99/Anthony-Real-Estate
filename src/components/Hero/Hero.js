import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import Navbar from '../Navbar/Navbar';
import { HeroSection, HeroText, ButtonWrapper} from './HeroStyles';
import { useInView } from 'react-intersection-observer';
import Fade from 'react-reveal'
 

const Hero = () => {
	const { ref, inView } = useInView({
		rootMargin: '-80px',
	});

	return (
		<>
			<HeroSection ref={ref} id="hero">
				<Container>
					<Fade bottom>
					<MainHeading>Best in class & real estate investments.</MainHeading>
					</Fade>
					<Fade top>
					<HeroText>We will help you to find your dream home</HeroText>
					</Fade>
					<Fade bottom>
					<ButtonWrapper>
						<Link to="sign-up">
							<Button big>Contact Us</Button>
						</Link>
					</ButtonWrapper>
					</Fade>
				</Container>
			</HeroSection>
			<Navbar hide={inView} />
		</>
	);
};

export default Hero;
