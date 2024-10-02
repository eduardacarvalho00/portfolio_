import { Flex } from "@chakra-ui/react";
import { Link } from "./Link";

export const NavigationMobile = () => {
	return (
		<Flex
			bg="background.secondary"
			w="100%"
			h="3.5rem"
			align="center"
			justify="center"
			gap="2.56rem"
			bottom={0}
			position="fixed"
		>
			<Link href="config" />
			<Link href="/" />
			<Link href="chat" />
		</Flex>
	);
};
