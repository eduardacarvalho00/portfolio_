import { Heading as ChakraHeading, useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "@contexts/useTranslation";

export const Heading = () => {
	const {
		translationNext: { t },
	} = useTranslation();
	const isMobile = useBreakpointValue({
		base: true,
		lg: false,
	});

	return (
		<ChakraHeading
			fontSize={isMobile ? 15 : 20}
			textAlign={isMobile ? "center" : "initial"}
			w={isMobile ? "15rem" : "fit-content"}
			color="primary.100"
		>
			{t("aboutMe.title")}
		</ChakraHeading>
	);
};
