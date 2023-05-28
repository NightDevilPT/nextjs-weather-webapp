import "../styles/globals.scss";
import "../styles/WeatherFrame.scss";

import LayoutFrame from "@/components/Layout";
import ContextAPI from "@/context/ContextAPI";


export default function App({ Component, pageProps }) {
	return (
		<ContextAPI>
			<LayoutFrame>
				<Component {...pageProps} />
			</LayoutFrame>
		</ContextAPI>
	);
}
