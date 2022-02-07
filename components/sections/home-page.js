import React from 'react';
import styled from 'styled-components';

const home_page_wrapper = styled.div`
	display: flex;
	flex-direction: coluumn;
	justify-content: center;
	background-color: #ff6161;
	height: 100vh;
`;

const home_page_name = styled.div``;

const home_page_title = styled.div``;

const home_page_soMe = styled.div``;

const home_page_arrow = styled.div``;

export function Home_page() {
	return <section className='home_page_wrapper'></section>;
}

export default Home_page;
