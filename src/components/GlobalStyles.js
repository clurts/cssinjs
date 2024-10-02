/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { fontSizes, sizes } from "../themes/theme";
import { useTheme } from "@emotion/react";

const GlobalStyles = () => {
	const theme = useTheme();

	return (
		<Global
			styles={css`
				body {
					background-color: ${theme.colors.body};
					color: ${theme.colors.text};
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
						"Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
						"Droid Sans", "Helvetica Neue", sans-serif;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
				}
			`}
		/>
	);
};

export default GlobalStyles;
