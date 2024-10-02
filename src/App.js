import GlobalStyles from "./components/GlobalStyles";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import useDarkMode from "./customHooks/useDarkMode";
import { theme } from "./themes/theme";
import { Link } from "react-router-dom";

console.log("lighttheme: ", theme.light);
console.log("darktheme: ", theme.dark);

function App() {
	const [darkmode, handleToggle, resetTheme] = useDarkMode();

	return (
		<ThemeProvider theme={darkmode ? theme.dark : theme.light}>
			<GlobalStyles />
			<header>
				<button onClick={handleToggle}>Toggle dark mode</button>
				<button onClick={resetTheme}>use browser color theme</button>
			</header>
			<nav>
				<Link to="/">Hjem</Link>
				<Link to="/people">People</Link>
			</nav>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</ThemeProvider>
	);
}

export default App;
