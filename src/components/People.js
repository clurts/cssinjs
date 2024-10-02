import { useEffect, useState } from "react";
import axios from "axios";

const People = () => {
	const [people, setPeople] = useState(null);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios("https://swapi.dev/api/people")
			.then((response) => setPeople(response.data.results))
			.catch(() => setError("Something went wrong!"))
			.finally(() => setLoading(false));
	}, []);

	return (
		<article>
			<h1>Star wars characters</h1>

			{error && <p>{error}</p>}
			{loading && <p>Spinner...</p>}

			{people?.map((person) => (
				<p>{person.name}</p>
			))}
		</article>
	);
};

export default People;
