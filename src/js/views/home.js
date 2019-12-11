import React from "react";
import "../../styles/home.scss";
import Planets from "../component/planets";
import People from "../component/people";
import Vehicles from "../component/vehicles";

export const Home = () => {
	return (
		<div>
			<Planets />
			<People />
			<Vehicles />
		</div>
	);
};
