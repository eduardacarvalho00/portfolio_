import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { dark, light } from "@styles/index";

type ThemeContextProps = {
	children: ReactNode;
};

type ThemeContextData = {
	theme: typeof dark;
	handleToggleTheme: () => void;
	setThemeToDark: () => void;
	selectedTheme: string;
};

const ThemeContext = createContext({} as ThemeContextData);

export const THEME_KEY = "@portfolio_theme";

export const ThemeProvider = ({ children }: ThemeContextProps) => {
	const themeFromStorage = localStorage.getItem(THEME_KEY);
	const currentTheme =
		themeFromStorage && themeFromStorage === "dark" ? dark : light;

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setSelectedTheme(themeFromStorage === "dark" ? "dark" : "light");
		if (!themeFromStorage) {
			localStorage.setItem(THEME_KEY, "dark");
			setTheme(dark);
		}
	}, []);

	const [theme, setTheme] = useState(currentTheme);
	const [selectedTheme, setSelectedTheme] = useState("light");

	const handleToggleTheme = () => {
		setTheme(theme === light ? dark : light);
		localStorage.setItem(THEME_KEY, theme === light ? "dark" : "light");
		setSelectedTheme(theme === light ? "dark" : "light");
	};

	const setThemeToDark = () => {
		setTheme(dark);
		setSelectedTheme("dark");
		localStorage.setItem(THEME_KEY, "dark");
	};

	return (
		<ThemeContext.Provider
			value={{ theme, handleToggleTheme, setThemeToDark, selectedTheme }}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used within an AuthProvider");
	}

	return context;
};
