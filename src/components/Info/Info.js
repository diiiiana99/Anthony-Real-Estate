import React from 'react';
import { infoData } from '../../data/InfoData';
import Fade from 'react-reveal'
import {
	InfoSection,
	BottomLine,
	Image,
	InfoWrapper,
	InfoNumber,
	InfoText,
	InfoDesc,
	InfoRow,
	InfoColumn,
	InfoHeading,
} from './InfoStyles';
import Tilt from 'react-tilt'

const Info = ({ id }) => {
	const { headline, description, bottomLine } = infoData;

	return (
		<InfoSection id={id}>
			<InfoRow>
			<Tilt options={{ max: 15 }}>
			<Fade left>
				<InfoColumn>
					<Image src="./assets/heromain1.jpg" alt="" />
				</InfoColumn>
				</Fade>
				</Tilt>
				<InfoColumn>
					<InfoWrapper>
						<Fade right>
						<InfoHeading>{headline}</InfoHeading>
						<InfoDesc>{description}</InfoDesc>
						</Fade>
						<Fade right>
						<BottomLine>
							{bottomLine.map((el, index) => (
								<InfoColumn key={index}>
									<InfoNumber>{el.number}</InfoNumber>
									<InfoText>{el.numberText}</InfoText>
								</InfoColumn>
							))}
						</BottomLine>
						</Fade>
					</InfoWrapper>
				</InfoColumn>
			</InfoRow>
		</InfoSection>
	);
};

export default Info;
