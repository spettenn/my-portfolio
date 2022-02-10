import styled from 'styled-components';
import React from 'react';

const About_me_wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 2rem;
	padding-right: 2rem;
	background-color: #fec401;
	height: 100vh;
	width: 100%;
	margin: 0%;
	text-align: center;
`;

function About_me_layout() {
	return (
		<About_me_wrapper>
			<h1 className='about_title'>About me</h1>
			<p className='about_text'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged
			</p>
		</About_me_wrapper>
	);
}

export default About_me_layout;
