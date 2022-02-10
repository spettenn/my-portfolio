import Head from 'next/head';
import Image from 'next/image';
import Home_page_wrapper from '../components/sections/home-page.js';
import About_me_wrapper from '../components/sections/about-me.js';
import Previous_projects_wrapper from '../components/sections/previous-proojects.js';
import Contact_page_wrapper from '../components/sections/contact.js';
import styled from 'styled-components';
import GlobalStyle from '../styles/global.js';
import Button_homepage from '../components/sections/homepage/home-page-buttons.js';
import Nav_wrapper from '../components/nav/nav.js';
import Icon_wrapper from '../components/sections/homepage/home-page-icons.js';
import About_me_layout from '../components/sections/about-me.js';

const Button_wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Badges = (props) => {
	return (
		<Image
			src='/../public/media/badges.png'
			alt='html, css and JS badges'
			width={400}
			height={400}
		/>
	);
};

export default function page() {
	return (
		<>
			<GlobalStyle />
			<Head>
				<title>portfolio</title>
				<meta
					name='description'
					content='Portfolio Website front-end web-development'
				/>
				<link
					rel='stylesheet'
					href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
					integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
					crossOrigin='anonymous'
				/>
				<link href='../styles/globals.css' />
			</Head>
			<body>
				<section>
					<Home_page_wrapper className='wrapperHome'>
						<Nav_wrapper>
							<a className='nav_text'>Contact</a>
							<a className='nav_text'>Previous Projects</a>
							<a className='nav_text'>About me</a>
						</Nav_wrapper>
						<Icon_wrapper>
							<Badges />
						</Icon_wrapper>
						<h1 className='home_title'>Aleksander Spetalen</h1>
						<h2 className='home-description'>Front-end developer</h2>
						<Button_wrapper>
							<Button_homepage href='#'>
								<i className='fab fa-linkedin fa-2x icon_homepage'></i>
								<p className='button_homepage_text'>linkedIn</p>
							</Button_homepage>
							<Button_homepage href='#'>
								<i className='fab fa-github fa-2x icon_homepage'></i>
								<p className='button_homepage_text'>gitHub</p>
							</Button_homepage>
						</Button_wrapper>
					</Home_page_wrapper>
				</section>
				<section>
					<About_me_layout></About_me_layout>
				</section>
				<section>
					<Previous_projects_wrapper></Previous_projects_wrapper>
				</section>
				<section>
					<Contact_page_wrapper></Contact_page_wrapper>
				</section>
			</body>
		</>
	);
}
