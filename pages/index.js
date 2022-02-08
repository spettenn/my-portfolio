import Head from 'next/head';
import Home_page_wrapper from '../components/sections/home-page.js';
import About_me_wrapper from '../components/sections/about-me.js';
import Previous_projects_wrapper from '../components/sections/previous-proojects.js';
import Contact_page_wrapper from '../components/sections/contact.js';

export default function page() {
	return (
		<>
			<Head>
				<title>portfolio</title>
				<meta
					name='description'
					content='Portfolio Website front-end web-development'
				/>
			</Head>
			<body>
				<Home_page_wrapper>
					<h1>Aleksander Spetalen</h1>
					<h2>Front-end developer</h2>
				</Home_page_wrapper>
				<section>
					<About_me_wrapper></About_me_wrapper>
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
