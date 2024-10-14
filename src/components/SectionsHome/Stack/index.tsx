import {
	Accordion,
	Flex,
	HStack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "@contexts/useTranslation";
import { CardDesktop } from "./CardDesktop";
import { CardProps } from "@interfaces/stack";
import { CardMobile } from "./CardMobile";

export const Stack = () => {
	const {
		translationNext: { t },
	} = useTranslation();
	const isMobile = useBreakpointValue({
		base: true,
		lg: false,
	});
	const cardStackData: CardProps[] = t("stack.cardStack", {
		returnObjects: true,
	}) as Array<CardProps>;

	return (
		<Flex
			as="section"
			w="100%"
			flexDir="column"
			gap={isMobile ? "2rem" : "4.3rem"}
		>
			<Text
				textAlign={isMobile ? "center" : "start"}
				fontWeight={600}
				fontSize={isMobile ? 14 : 20}
			>
				{t("stack.title")}
			</Text>
			<HStack spacing="3rem" flexWrap="wrap" justify="center">
				{isMobile ? (
					<Accordion defaultIndex={[0]} allowMultiple w="100%">
						{cardStackData.map((item) => (
							<CardMobile key={item.id} data={item} />
						))}
					</Accordion>
				) : (
					cardStackData.map((item) => <CardDesktop key={item.id} data={item} />)
				)}
			</HStack>
		</Flex>
	);
};
