import styled from "@emotion/styled";
import { theme } from "../themes/theme";

const Button = styled.button`
	background-color: ${({ primary, secondary, theme }) =>
		primary
			? theme.colors.primary
			: secondary
			? theme.colors.secondary
			: theme.colors.standard};
	padding: ${({ small, large }) =>
		small
			? theme.btnSizes.small
			: large
			? theme.btnSizes.large
			: theme.btnSizes.standard};
	border: 0.125rem solid green;
`;

export default Button;
