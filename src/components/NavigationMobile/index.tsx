import { Flex } from "@chakra-ui/react";
import { Link } from "./Link";

export const NavigationMobile = () => {
	return (
		<Flex
			bg="background.secondary"
			mt="0.5rem"
			h="3.5rem"
			justify="center"
			gap="2.56rem"
		>
			<Link href="config" />
			<Link href="/" />
			<Link href="chat" />
		</Flex>
	);
};
