import React, { useEffect } from "react";

import rain from "../images/rain.svg";
import cloud from "../images/cloud.svg";
import haze from "../images/haze.svg";
import snow from "../images/snow.svg";
import clear from "../images/cloud.svg";
import storm from "../images/storm.svg";

import { MdCompress } from "react-icons/md";
import { BsThermometerSun } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import { RiContrastDropFill } from "react-icons/ri";
import Image from "next/image";

const WeatherFrame = ({ data }) => {
	const {
		name,
		sys: { country, sunrise, sunset },
		main: { temp, feels_like, pressure, humidity },
		weather: [{ description, id }],
		wind: { speed },
	} = data;

	useEffect(() => {}, [data]);

	return (
		<div className="weather-div">
			<div className="temp-div">
				<div className="icon-div">
					<Image effect="blur"
						src={
							id == 800
								? clear
								: id >= 200 && id <= 232
								? storm
								: id >= 600 && id <= 622
								? snow
								: id >= 701 && id <= 781
								? haze
								: id >= 801 && id <= 804
								? cloud
								: (id >= 300 && id <= 321) ||
								  (id >= 500 && id <= 531)
								? rain
								: ""
						}
					/>
				</div>

				<div className="temp-info-div">
					<span className="temp">{(temp - 273.15).toFixed(0)}°C</span>
					<span className="desp">{description}</span>
					<span className="city">
						{name}
						{`${
							country
								? ", " +
								  new Intl.DisplayNames(["en"], {
										type: "region",
								  }).of(country)
								: ""
						}`}
					</span>
				</div>
			</div>

			<div className="weather-subinfo-div">
				<div className="sub-info-div">
					<BsThermometerSun className="sub-info-icon" />
					<div className="info-div">
						<span>{(feels_like - 273.15).toFixed(0)}°C</span>
						<span>Feels Like</span>
					</div>
				</div>

				<div className="sub-info-div">
					<RiContrastDropFill className="sub-info-icon" />
					<div className="info-div">
						<span>{humidity}%</span>
						<span>Humidity</span>
					</div>
				</div>

				<div className="sub-info-div">
					<MdCompress className="sub-info-icon" />
					<div className="info-div">
						<span>{pressure} hPa</span>
						<span>Pressure</span>
					</div>
				</div>

				<div className="sub-info-div">
					<BiWind className="sub-info-icon" />
					<div className="info-div">
						<span>{speed.toFixed(1)} m/s</span>
						<span>Wind Speed</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherFrame;
