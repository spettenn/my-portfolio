import styled from 'styled-components';
import React from 'react';

const About_me_flex = styled.div`
	display: flex;
	flex-direction: row;
	height: fit-content;
`;

function AboutMe() {
	return (
		<div className='about_me_container'>
			<h1 className='about_title'>About me</h1>
			<About_me_flex>
				<p className='about_text'>
					Hello, I am 26 year old, born in Bærum, Norway. I have for the past
					two years been developing my skills in front-end development at Noroff
					school of technology. I started web-development after corona hit the
					coasts of Norway and I was forced to change my profession. I then was
					looking for another opportunity as i was currently working in
					tourism... For me, changing profession was an eye opener as i have
					always been an technology enthusiast, and getting to know and
					experience how the applications and solutions I have been using my
					whole life.
				</p>
			</About_me_flex>
		</div>
	);
}

export default AboutMe;
