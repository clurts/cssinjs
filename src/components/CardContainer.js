import styled from "@emotion/styled";
import { theme } from "../themes/theme";

const CardContainer = styled.article`
	padding: 2rem 0;
	background-color: lightgreen;

	${theme.breakpoints.medium} {
		display: flex;
	}
`;

export default CardContainer;
