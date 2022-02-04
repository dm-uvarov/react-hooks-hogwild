import React from "react";
import Nav from "./Nav";
import RenderTiles from "./RenderTiles";
import Tile from'./Tile'

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<RenderTiles hogs={hogs}/>
		</div>
	);
}

export default App;

// {
//     name: "Babe",
//     specialty: "Being incredibly cute",
//     greased: false,
//     weight: 2.0,
//     "highest medal achieved": "bronze",
//     image:
//       "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
//   },