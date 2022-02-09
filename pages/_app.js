import GlobalStyle from '../styles/global.js';
import styles from '../styles/fonts/fonts.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
