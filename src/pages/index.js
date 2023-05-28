import { GlobalData } from "@/context/ContextAPI";
import React, { useContext, useEffect, useState } from "react";

// ---------- Importing Icons
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

// ---------- Importing Frame
import WeatherFrame from "@/components/WeatherFrame";

// ---------- Importing Custome Function
import { FetchDataFromAPI } from "../axiosClient";

const index = () => {
	const { theme, setTheme } = useContext(GlobalData);
	const [query, setQuery] = useState("delhi");
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	const GetWeatherData = async () => {
		setLoading(true);
		const weatherData = await FetchDataFromAPI(query);
		if (weatherData.error) {
			alert(weatherData.msg);
			return;
		}
		setData({ ...weatherData.data });
		setLoading(false);
	};

	useEffect(() => {
		GetWeatherData();
	}, []);

	return (
		<div className="frame">
			<div className="header">
				<h3>Weather App</h3>

				<div
					className="theme-div"
					onClick={(e) =>
						setTheme(theme === "dark" ? "light" : "dark")
					}
				>
					<BsMoonStarsFill className={`theme-icon dark-theme`} />
					<BsFillSunFill className={`theme-icon light-theme`} />
					<div
						className={`indicator ${
							theme === "dark" ? "right" : "left"
						}-indicator`}
					></div>
				</div>
			</div>

			<div className="input-div">
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="search-input"
					placeholder="Enter City Name"
				/>
				<BiSearch
					className="search-icon"
					onClick={(e) => GetWeatherData()}
				/>
			</div>

			{!loading && data ? (
				<WeatherFrame data={data} />
			) : (
				<div className="loading-div">
					<span></span>
				</div>
			)}
		</div>
	);
};

export default index;
