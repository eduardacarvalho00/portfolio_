import { Flex, FlexProps, Select, Text } from "@chakra-ui/react";
import { LANGUAGE } from "@constants/languages";
import { useTranslation } from "@contexts/useTranslation";
import { Option } from "./Option";

interface SelectLanguageProps extends FlexProps {}

export const SelectLanguage = ({ ...rest }: SelectLanguageProps) => {
	const {
		handleChangeLanguage,
		translationNext: { t },
		currentLanguageByLocalStorage,
	} = useTranslation();

	return (
		<Flex gap="2" {...rest}>
			<Text fontWeight={500}>{t("language.title")}:</Text>

			<Select
				cursor="pointer"
				variant="unstyled"
				onChange={(e) => handleChangeLanguage(e.target.value)}
				maxW={
					currentLanguageByLocalStorage === LANGUAGE.portuguese
						? "8rem"
						: "6.5rem"
				}
				defaultValue={
					currentLanguageByLocalStorage
						? currentLanguageByLocalStorage
						: LANGUAGE.portuguese
				}
			>
				<Option value={LANGUAGE.portuguese}>{t("language.portuguese")}</Option>
				<Option value={LANGUAGE.english}>{t("language.english")}</Option>
			</Select>
		</Flex>
	);
};
