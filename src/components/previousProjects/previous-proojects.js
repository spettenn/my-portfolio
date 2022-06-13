import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';

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
const Arrow_down = (props) => {
	return (
		<Image
			src='/../public/media/down_arro_white.png'
			alt='arrow for page nav'
			width={400}
			height={400}
			href='#aboutMe'
		/>
	);
};

function PreviousProojects() {
	return (
		<div className='previous_projects_container'>
			<h1 className='about_title'>Previous Projects</h1>
			<div className='card_container'>
				<div
					className='project_card'
					href='https://musing-banach-c2b4b8.netlify.app/#forSpillere'>
					<div className='card_text_container'>
						<h3 className='card_title'>Fun to Play</h3>
						<p className='card_text'>
							of letters, as opposed to using Content here, content here, making
							it look like readable English. Many desktop publishing packages
							and web page editors now use Lorem Ipsum as their default model
							text, and a search for lorem ipsum will uncover many web sites
							still in their infancy. Various versions have evolved over the
							years, sometimes by accident, sometimes on purpose (injected
							humour and the like
						</p>
					</div>
					<FunToPlay />
				</div>
				<div
					className='project_card'
					href='https://unruffled-wescoff-562d65.netlify.app/'>
					<Blogg />
					<div className='card_text_container'>
						<h3 className='card_title'>Blogg</h3>
						<p className='card_text'>
							of letters, as opposed to using Content here, content here, making
							it look like readable English. Many desktop publishing packages
							and web page editors now use Lorem Ipsum as their default model
							text, and a search for lorem ipsum will uncover many web sites
							still in their infancy. Various versions have evolved over the
							years, sometimes by accident, sometimes on purpose (injected
							humour and the like
						</p>
					</div>
				</div>
			</div>
			<div className='arrow_container'>
				<Arrow_down />
			</div>
		</div>
	);
}

export default PreviousProojects;
