import styled from "@emotion/styled";

const Icon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	background-color: ${({ alternate }) => (alternate ? "teal" : "orangered")};
`;
export default Icon;
