import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyWord, setKeyWord] = useState("");

	function handleKeyword(event) {
		setKeyWord(event.target.value);
	}

	function search(event) {
		event.preventDefault();
		alert(`Searching for ${keyWord}`);
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
		</div>
	);
}
