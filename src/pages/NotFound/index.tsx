import { Link as ChakraLink, Flex, Heading } from "@chakra-ui/react";
import { useTranslation } from "@contexts/useTranslation";
import { Link } from "react-router-dom";

export default function NotFound() {
	const {
		translationNext: { t },
	} = useTranslation();

	return (
		<Flex
			direction="column"
			justify="center"
			gap="2.5rem"
			align="center"
			h="100vh"
			px="1.5rem"
		>
			<title>404</title>
			<Heading fontSize={80} fontWeight={600} color="primary.100">
				404
			</Heading>
			<Heading fontSize={20} fontWeight={400}>
				{t("notFound.text")}{" "}
				<ChakraLink color="primary.100" textDecor="underline" fontWeight={600}>
					<Link to="/">{t("notFound.here")}</Link>
				</ChakraLink>
			</Heading>
		</Flex>
	);
}
