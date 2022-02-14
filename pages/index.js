import Head from 'next/head';
import Image from 'next/image';
import Home_page_wrapper from '../components/sections/home-page.js';
import styled from 'styled-components';
import GlobalStyle from '../styles/global.js';
import Button_homepage from '../components/sections/homepage/home-page-buttons.js';
import Nav_wrapper from '../components/nav/nav.js';
import Icon_wrapper from '../components/sections/homepage/home-page-icons.js';
import About_me_layout from '../components/sections/about-me.js';
import ContactForm from '../components/sections/contact.js';
import Previous_proojects from '../components/sections/previous-proojects.js';

const Button_wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Arrow_wrapper = styled.div`
	display: flex;
	justify-content: center;
	height: 6rem;
`;

const Arrow_down = (props) => {
	return (
		<Image
			src='/../public/media/down_arrow.png'
			alt='down arrow'
			width={400}
			height={400}
			href='../components/sections/about-me.js'
		/>
	);
};

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
							<Button_homepage href='https://www.linkedin.com/in/aleksander-spetalen-450013209/'>
								<i className='fab fa-linkedin fa-2x icon_homepage'></i>
								<p className='button_homepage_text'>linkedIn</p>
							</Button_homepage>
							<Button_homepage href='https://github.com/spettenn'>
								<i className='fab fa-github fa-2x icon_homepage'></i>
								<p className='button_homepage_text'>gitHub</p>
							</Button_homepage>
						</Button_wrapper>
						<Arrow_wrapper>
							<Arrow_down>
								<a herf=''></a>
							</Arrow_down>
						</Arrow_wrapper>
					</Home_page_wrapper>
				</section>
				<section>
					<About_me_layout></About_me_layout>
				</section>
				<section>
					<Previous_proojects></Previous_proojects>
				</section>
				<section>
					<ContactForm></ContactForm>
				</section>
			</body>
		</>
	);
}
