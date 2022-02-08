import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					<h1>React Dictionary</h1>
				</header>
				<main>
					<Dictionary defaultKeyword="shop" />
				</main>
				<footer className="text-center">
					This project was coded by
					<a href="https://www.linkedin.com/in/aga-got/" target={"_blank"} rel="noreferrer">
						{" "}
						Aga
					</a>{" "}
					and is
					<a
						href="https://github.com/agagotowiec/dictionary-react"
						target={"_blank"}
						rel="noreferrer"
					>
						{" "}
						open-sourced.
					</a>
				</footer>
			</div>
		</div>
	);
}

export default App;
