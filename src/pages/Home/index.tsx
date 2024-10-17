import { Box, Flex, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { NavigationMobile } from "@components/NavigationMobile";
import { AboutMe } from "@componentsHome/AboutMe";
import { Stack } from "@componentsHome/Stack";
import { Timeline } from "@componentsHome/Timeline";
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
				px={isMobile ? "1rem" : 0}
			>
				<VStack
					p={isMobile ? "1rem" : "5rem"}
					bg="background.primary"
					boxShadow={isMobile ? "0px 3px 2px 0px rgba(0,0,0,0.25)" : "none"}
					spacing={isMobile ? "3rem" : "5.3rem"}
					mb="4rem"
				>
					<AboutMe />
					<Stack />
					<Timeline />
				</VStack>
			</Box>
			{isMobile && <NavigationMobile />}
		</Flex>
	);
}
