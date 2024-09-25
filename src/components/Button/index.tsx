import {
	Button as ChakraButton,
	ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
	text: string | React.ReactElement;
}

export const Button = ({ text, ...rest }: ButtonProps) => {
	return (
		<ChakraButton
			_hover={{
				filter: "brightness(0.95)",
				bg: "primary.main.1",
				color: "dark.100",
			}}
			colorScheme="blue"
			color="light.10"
			{...rest}
		>
			{text}
		</ChakraButton>
	);
};
