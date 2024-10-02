import { useParams, useSearchParams } from "react-router-dom";
import useAxios from "../customHooks/useAxios";

const Detail = () => {
	const { id } = useParams();

	const {
		data: character,
		loading: loadingCharacter,
		error: errorCharacter,
	} = useAxios(`https://swapi.dev/api/people/${id}`);

	return (
		<article>
			{errorCharacter && <p>{errorCharacter}</p>}
			{loadingCharacter && <p>Spinner</p>}

			{character && (
				<>
					<h1>Name: {character.name} </h1>;
				</>
			)}
		</article>
	);
};

export default Detail;
