import Head from 'next/head';
import home_page from '../components/sections/home-page.js';
import styles from '../styles/Home.module.css';

function HomePage() {
	<>
		<head>
			<title>portfolio</title>
			<meta
				name='description'
				content='Portfolio Website front-end web-development'
			/>
		</head>
		<body>
			<home_page />
		</body>
	</>;
}

export default HomePage;
