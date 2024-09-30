import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { useTranslation } from "@contexts/useTranslation";

export function Home() {
	const {
		translationNext: { t },
	} = useTranslation();
	const isMobile = useBreakpointValue({
		base: true,
		lg: false,
	});

	return (
		<Flex flexDir="column" h="100vh">
			<title>{t("titleHome")}</title>
			<Header />
			<Box bg="background.secondary" h="100%" px={isMobile ? "1rem" : 0}>
				<Flex
					p="5rem"
					h="100%"
					bg="background.primary"
					borderRadius="0px 0px 12px 12px"
				>
					<p>a</p>
				</Flex>
			</Box>
		</Flex>
	);
}
