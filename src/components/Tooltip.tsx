import { Tooltip as TooltipChakra } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TooltipProps {
	text: string;
	children: ReactNode;
}

export const Tooltip = ({ children, text }: TooltipProps) => {
	return (
		<TooltipChakra
			label={text}
			bg="primary.40"
			hasArrow
			fontSize={12}
			borderRadius={8}
		>
			{children}
		</TooltipChakra>
	);
};
