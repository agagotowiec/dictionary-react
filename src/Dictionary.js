import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
	let [keyWord, setKeyWord] = useState("");
	let [results, setResults] = useState(null);

	function handleResponse(response) {
		console.log(response.data[0]);
		setResults(response.data[0]);
	}

	let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
	axios.get(apiUrl).then(handleResponse);

	function handleKeyword(event) {
		setKeyWord(event.target.value);
	}

	function search(event) {
		event.preventDefault();
	}

	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input
					type="search"
					placeholder="Type your word"
					autoFocus={true}
					onChange={handleKeyword}
				/>
			</form>
			<Results results={results} />
		</div>
	);
}
