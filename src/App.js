import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");
	const [distance, setDistance] = useState();

	function calcDistance(str1, str2) {
		const grid = [];
		for (let i = 0; i < str1.length + 1; i++) {
			const row = [];
			for (let j = 0; j < str2.length + 1; j++) {
				row.push(j);
			}
			row[0] = i;
			grid.push(row);
		}
		for (let i = 1; i < str1.length + 1; i++) {
			for (let j = 1; j < str2.length + 1; j++) {
				if (str1[i - 1] === str2[j - 1]) {
					grid[i][j] = grid[i - 1][j - 1];
				} else {
					grid[i][j] =
						1 + Math.min(grid[i][j - 1], grid[i - 1][j - 1], grid[i - 1][j]);
				}
			}
		}
		return grid[str1.length][str2.length];
	}

	useEffect(() => {
		setDistance(calcDistance(input1, input2));
	}, [input1, input2]);

	return (
		<div className="App">
			<h1>Levenshtein Distance</h1>
			First Input:
			<input value={input1} onChange={(e) => setInput1(e.target.value)}></input>
			<br></br>
			Second Input:
			<input value={input2} onChange={(e) => setInput2(e.target.value)}></input>
			<br></br>
			<h1>Distance: {distance}</h1>
		</div>
	);
}

export default App;
