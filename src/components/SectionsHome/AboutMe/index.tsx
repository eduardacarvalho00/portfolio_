import { Flex, Stack, useBreakpointValue, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "@contexts/useTranslation";
import aboutImage from "@assets/aboutPicture.svg";
import { Trans } from "react-i18next";
import { Heading } from "./Heading";

export const AboutMe = () => {
	const {
		translationNext: { t },
	} = useTranslation();
	const isMobile = useBreakpointValue({
		base: true,
		lg: false,
	});
	return (
		<Flex
			as="section"
			flexDir={{ base: "column", "5xl": "row" }}
			gap={isMobile ? "0.9rem" : "2.5rem"}
			align="center"
			h="fit-content"
		>
			{isMobile && <Heading />}

			<Image
				src={aboutImage}
				borderRadius={8}
				boxShadow={"3px 3px 3px 0px rgba(0,0,0,0.25)"}
				w={isMobile ? "15rem" : "24.5rem"}
				h={isMobile ? "13rem" : "20.8rem"}
			/>
			<Stack align="center">
				{!isMobile && <Heading />}
				<Text fontSize={{ base: 14, "2xl": 16, "7xl": 18 }} textAlign="justify">
					<Trans>{t("aboutMe.text")}</Trans>
				</Text>
			</Stack>
		</Flex>
	);
};
