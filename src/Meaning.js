import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h4>{props.meaning.partOfSpeech}</h4>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<p className="Definition">{definition.definition}</p>

						<em>
							<p>
								<Example example={definition.example} />
							</p>
						</em>
						<br />
						<p>
							<Synonyms synonyms={definition.synonyms} />
						</p>
					</div>
				);
			})}
		</div>
	);
}
