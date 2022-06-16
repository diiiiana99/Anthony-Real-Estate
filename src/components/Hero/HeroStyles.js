import styled from 'styled-components';

export const HeroSection = styled.section`
	height: 100vh;
	background:url('https://images.unsplash.com/photo-1628745277864-fa6f297bf88a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
	background-position: center;
	background-size: cover;
	display: flex;
	align-items: center;
	box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
	object-fit: contain;
`;
export const Video= styled.video`
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
z-index: -1;
`

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: white;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;
