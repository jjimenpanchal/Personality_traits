import React from "react";
import web from "../src/images/home.jpg";
// import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
	return (
		<>
			<Commom
				name="Knowing yourself is the beginning of all wisdom"
				imgsrc={web}
				visit="/test"
				btname="Get Started"
			/>
		</>
	);
};

export default Home;
