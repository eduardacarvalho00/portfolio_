import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { Link as ChakraLink, Icon } from "@chakra-ui/react";
import { MdChat, MdHome, MdOutlineSettings } from "react-icons/md";

interface LinkProps {
	href: string;
}

export const Link = ({ href }: LinkProps) => {
	const { pathname } = useLocation();
	const iconColor = pathname === href ? "black" : "primary.100";
	const backgroundColor =
		pathname === href ? "primary.100" : "background.tertiary";
	const routeIcon =
		href === "/" ? MdHome : href === "config" ? MdOutlineSettings : MdChat;

	return (
		<ChakraLink
			as={ReactRouterLink}
			to={href}
			borderRadius="full"
			bg={backgroundColor}
			w="3rem"
			h="3rem"
			display="flex"
			alignItems="center"
			justifyContent="center"
			boxShadow={"1px 1px 1px 0px rgba(0,0,0,0.15)"}
		>
			<Icon as={routeIcon} color={iconColor} fontSize="1.5rem" />
		</ChakraLink>
	);
};
