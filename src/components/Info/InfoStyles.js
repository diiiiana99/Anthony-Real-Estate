import styled from 'styled-components';
import { Section } from '../../globalStyles';

export const InfoSection = styled(Section)`
	padding: 50px 0 0;
	background: white;
	height: 100%;
	color: black;
	@media screen and (max-width: 940px) {
		padding: 90px 20px;
	}
`;
export const InfoRow = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 5rem;
	grid-auto-columns: 2rem;
	color: black;


	@media screen and (max-width: 940px) {
		grid-template-columns: repeat(1, 1fr);

		> div:first-child {
			display: none;
		}
	}
`;

export const InfoColumn = styled.div`
	display: flex;
	flex-direction: column;
	color: black;



	@media screen and (max-width: 940px) {
		align-items: center;
	}
`;

export const Image = styled.div`
	height: 600px;
	width: 60%;
	margin-left: 150px;
	background: url('https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60');
	background-size: cover;
	display: flex;
	align-items: center;
	object-fit: contain;
	margin-bottom: 50px;
`;

export const InfoHeading = styled.h2`
	margin: 1rem 0 2rem;
	font-size: clamp(2.1rem, 7vw, 3rem);
	line-height: 1.1;
	font-weight: 600;
	color: black;

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const InfoDesc = styled.div`
	margin-bottom: 3rem;
	color: black;
	font-size: 1.1rem;
	font-size: clamp(1rem, 2vw, 1.1rem);

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const InfoWrapper = styled.div`
	padding-left: 4rem;
	padding-right: 2rem;
	padding-top: 2rem;
	max-width: 540px;
	color: black;

	@media screen and (max-width: 768px) {
		padding: 0;
	}
`;

export const BottomLine = styled.div`
	display: flex;
	gap: 4rem;
	@media screen and (max-width: 768px) {
		justify-content: center;
		flex-wrap: wrap;
	}
`;

export const InfoNumber = styled.div`
	font-weight: 700;
	font-size: 1.3rem;
	letter-spacing: 0.04rem;
	color: black;
`;

export const InfoText = styled.div`
	font-weight: 500;
	margin-top: 0.4rem;
	color: black;
`;
