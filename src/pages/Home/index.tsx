import { SelectLanguage } from "@components/SelectLanguage";
import { useTheme } from "@contexts/useTheme";
import { FaCircleHalfStroke } from "react-icons/fa6";

export function Home() {
	const { handleToggleTheme } = useTheme();
	return (
		<>
			<SelectLanguage position="absolute" right="1rem" top="1.5rem" />
			<p>oi</p>
			<FaCircleHalfStroke
				onClick={handleToggleTheme}
				style={{ cursor: "pointer" }}
			/>
		</>
	);
}
