import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';

const Previous_projects_wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	background-color: #6184ff;
	height: 100vh;
	width: 100%;
	margin: 0%;
	padding-bottom: 2rem;
`;
const Card_wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;
const Card = styled.a`
	max-width: 70rem;
	height: 30vh;
	background-color: white;
	cursor: pointer;
	margin: auto;
	margin-top: 1rem;
	display: flex;
	flex-direction: row;
	border-radius: 2px;
`;
const Card_text_wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;
const Card_title = styled.h3`
	color: #2d1d1d;
	font-size: 2.25rem;
	text-decoration: none;
`;
const Card_text = styled.p`
	color: #2d1d1d;
	font-size: 1.2rem;
	text-decoration: none;
`;
const FunToPlay = (props) => {
	return (
		<Image
			src='/../public/media/funToPlay.png'
			alt='fun to play website'
			width={2400}
			height={2400}
		/>
	);
};
const Blogg = (props) => {
	return (
		<Image
			src='/../public/media/blogg.png'
			alt='blogg website'
			width={2400}
			height={2400}
		/>
	);
};
const Arrow_wrapper = styled.div`
	display: flex;
	justify-content: center;
	height: 6rem;
`;
const Arrow_down = (props) => {
	return (
		<Image
			src='/../public/media/down_arro_white.png'
			alt='arrow for page nav'
			width={400}
			height={400}
		/>
	);
};

function Previous_proojects() {
	return (
		<Previous_projects_wrapper>
			<h1 className='about_title'>Previous Projects</h1>
			<Card_wrapper>
				<Card href='https://musing-banach-c2b4b8.netlify.app/#forSpillere'>
					<Card_text_wrapper>
						<Card_title>Fun to Play</Card_title>
						<Card_text>
							of letters, as opposed to using Content here, content here, making
							it look like readable English. Many desktop publishing packages
							and web page editors now use Lorem Ipsum as their default model
							text, and a search for lorem ipsum will uncover many web sites
							still in their infancy. Various versions have evolved over the
							years, sometimes by accident, sometimes on purpose (injected
							humour and the like
						</Card_text>
					</Card_text_wrapper>
					<FunToPlay />
				</Card>
				<Card href='https://unruffled-wescoff-562d65.netlify.app/'>
					<Blogg />
					<Card_text_wrapper>
						<Card_title>Blogg</Card_title>
						<Card_text>
							of letters, as opposed to using Content here, content here, making
							it look like readable English. Many desktop publishing packages
							and web page editors now use Lorem Ipsum as their default model
							text, and a search for lorem ipsum will uncover many web sites
							still in their infancy. Various versions have evolved over the
							years, sometimes by accident, sometimes on purpose (injected
							humour and the like
						</Card_text>
					</Card_text_wrapper>
				</Card>
			</Card_wrapper>
			<Arrow_wrapper>
				<Arrow_down />
			</Arrow_wrapper>
		</Previous_projects_wrapper>
	);
}

export default Previous_proojects;
