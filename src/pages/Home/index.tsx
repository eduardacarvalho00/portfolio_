import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { NavigationMobile } from "@components/NavigationMobile";
import { AboutMe } from "@components/SectionsHome/AboutMe";
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
		<Flex
			flexDir="column"
			h="100vh"
			bg={isMobile ? "background.secondary" : "background.primary"}
		>
			<title>{t("titleHome")}</title>
			<Header />
			<Box
				bg={isMobile ? "background.secondary" : "background.primary"}
				h="100%"
				px={isMobile ? "1rem" : 0}
			>
				<Flex
					p={isMobile ? "1rem" : "5rem"}
					h="100%"
					bg="background.primary"
					boxShadow={isMobile ? "0px 3px 2px 0px rgba(0,0,0,0.25)" : "none"}
				>
					<AboutMe />
				</Flex>
			</Box>
			{isMobile && <NavigationMobile />}
		</Flex>
	);
}
