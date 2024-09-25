import NotFoundPage from "@assets/notFound.svg";
import { Link as ChakraLink, Flex, Heading, Image } from "@chakra-ui/react";
import { useTranslation } from "@contexts/useTranslation";
import { Link } from "react-router-dom";

export default function NotFound() {
	const {
		translationNext: { t },
	} = useTranslation();
	return (
		<Flex direction="column" justify="center" align="center" h="100vh">
			<title>404</title>

			<Image src={NotFoundPage} alt="404" h="45rem" mb="4rem" />
			<Heading fontSize="2rem">
				{t("notFound.text")}
				<ChakraLink color="cyan.200">
					<Link to="/"> aqui</Link>
				</ChakraLink>
			</Heading>
		</Flex>
	);
}
