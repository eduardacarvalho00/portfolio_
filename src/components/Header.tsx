import {
	HStack,
	Show,
	Switch,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";

import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useTranslation } from "@contexts/useTranslation";
import { SelectLanguage } from "./SelectLanguage";
import { useTheme } from "@contexts/useTheme";

export const Header = () => {
	const isMobile = useBreakpointValue({
		base: true,
		lg: false,
	});

	const {
		translationNext: { t },
	} = useTranslation();
	const { handleToggleTheme } = useTheme();
	const { pathname } = useLocation();
	const isChatRoute = pathname === "chat" ? "text.90" : "text.30";

	return (
		<HStack
			as="header"
			justify={isMobile ? "center" : "space-between"}
			h={isMobile ? "1,8rem" : "4.3rem"}
			px="5rem"
		>
			<Text color="primary.100" fontSize={{ base: "16", lg: "20" }}>
				Eduarda C.
			</Text>
			<Show above="lg">
				<HStack spacing="2rem">
					<ChakraLink
						as={ReactRouterLink}
						color={isChatRoute ? "primary.100" : "color.primary"}
					>
						{t("navigation.readMore")}
					</ChakraLink>
					<SelectLanguage />

					<Switch onChange={handleToggleTheme} />
				</HStack>
			</Show>
		</HStack>
	);
};
