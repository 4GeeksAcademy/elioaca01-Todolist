import React from "react";

//include images into your bundle
import List from "./List";

//create your first component
const Home = () => {
	return (
		<div className="container d-flex flex-column">
			<List/>
		</div>
	);
};

export default Home;
