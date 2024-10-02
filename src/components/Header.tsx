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
import { dark } from "@styles/dark";
import { Tooltip } from "./Tooltip";

export const Header = () => {
	const isMobile = useBreakpointValue({
		base: true,
		lg: false,
	});

	const {
		translationNext: { t },
	} = useTranslation();
	const { handleToggleTheme, theme } = useTheme();
	const { pathname } = useLocation();
	const isChatRoute = pathname === "chat";

	return (
		<HStack
			as="header"
			justify={isMobile ? "center" : "space-between"}
			h={isMobile ? "1.9rem" : "4.3rem"}
			px={{ base: "initial", lg: "1rem", "2xl": "5rem" }}
			borderBottom="1px solid"
			borderColor={theme === dark ? "primary.40" : "primary.100"}
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
					<Tooltip
						text={
							theme === dark
								? "Change for a light view!"
								: "Change for a dark view!"
						}
					>
						<span>
							<Switch onChange={handleToggleTheme} colorScheme="green" />
						</span>
					</Tooltip>
				</HStack>
			</Show>
		</HStack>
	);
};
