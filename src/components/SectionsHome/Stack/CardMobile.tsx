import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Text,
	VStack,
} from "@chakra-ui/react";
import { CardProps } from "@interfaces/stack";

import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

interface CardMobileProps {
	data: CardProps;
}

export const CardMobile = ({ data }: CardMobileProps) => {
	return (
		<AccordionItem borderColor="primary.30">
			<AccordionButton>
				<Box as="span" flex="1" textAlign="left" fontSize={14}>
					{data.name}
				</Box>
				<AccordionIcon color="primary.100" />
			</AccordionButton>

			<AccordionPanel
				pb={4}
				bg="background.secondary"
				boxShadow="2px 2px 4px 1px rgba(0,0,0,0.15)"
			>
				<VStack align="start" fontSize={12}>
					<Text>{data.description}</Text>
					<ChakraLink
						as={ReactRouterLink}
						fontWeight={500}
						fontSize={11}
						color="primary.100"
						to={data.url}
					>
						{data.urlName}
					</ChakraLink>
				</VStack>
			</AccordionPanel>
		</AccordionItem>
	);
};
