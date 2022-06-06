import Nav from '../../components/nav/nav.js';
import Image from 'next/image';

const Badges = (props) => {
	return (
		<Image
			src='/../public/media/badges.png'
			alt='html, css and JS badges'
			className='badges_container_inner'
			width={150}
			height={120}
		/>
	);
};
const Arrow_down = (props) => {
	return (
		<Image
			src='/../public/media/down_arrow.png'
			alt='down arrow'
			width={400}
			height={400}
			href='../components/sections/about-me.js'
			className='arrow_down_landing'
		/>
	);
};

const LandingPage = () => {
	return (
		<>
			<div id='landing_page' className='landing_page_container'>
				<Nav />
				<div className='landing_page_container_inner'>
					<div className='badges_container'>
						<Badges />
					</div>
					<div className='home_page_text_container'>
						<h1 className='home_title'>Aleksander Spetalen</h1>
						<h2 className='home-description'>Front-end developer</h2>
					</div>
					<div className='landing_btn_container'>
						<a
							className='landing_btn'
							href='https://www.linkedin.com/in/aleksander-spetalen-450013209/'>
							<i className='fab fa-linkedin fa-2x icon_homepage'></i>
							<p className='button_homepage_text'>linkedIn</p>
						</a>
						<a className='landing_btn' href='https://github.com/spettenn'>
							<i className='fab fa-github fa-2x icon_homepage'></i>
							<p className='button_homepage_text'>gitHub</p>
						</a>
					</div>
					<div className='landing_Arrow_container'>
						<Arrow_down>
							<a herf=''></a>
						</Arrow_down>
					</div>
				</div>
			</div>
		</>
	);
};

export default LandingPage;
