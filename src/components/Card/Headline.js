import styled from "@emotion/styled";

const Headline = styled.h1`
	color: ${({ alternate }) => (alternate ? "teal" : "orangered")};
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1.5rem;
	letter-spacing: 2px;
	text-transform: uppercase;

	&:hover {
		color: orange;
	}
`;
export default Headline;
