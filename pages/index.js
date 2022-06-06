import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import GlobalStyle from '../styles/global.js';
// import ContactForm from '../src/components/contact/contact.js';
// import Previous_proojects from '../src/components/previousProjects/previous-proojects.js';
import LandingPage from '../src/components/ladingPage/home-page.js';
import AboutMe from '../src/components/aboutMe/about-me.js';
import PreviousProojects from '../src/components/previousProjects/previous-proojects.js';
import ContactForm from '../src/components/contact/contact.js';

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
			</Head>
			<body>
				<section>
					<LandingPage />
				</section>
				<section>
					<AboutMe />
				</section>
				<section>
					<PreviousProojects />
				</section>
				<section>
					<ContactForm />
				</section>
			</body>
		</>
	);
}
