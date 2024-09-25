import { useTheme } from "@contexts/useTheme";
import { dark } from "@styles/dark";
import { ComponentProps } from "react";

interface OptionProps extends ComponentProps<"option"> {}

export const Option = (props: OptionProps) => {
	const { theme } = useTheme();

	return (
		<option
			style={{ background: theme === dark ? "#14181D" : "#FFF" }}
			{...props}
		>
			{props.children}
		</option>
	);
};
