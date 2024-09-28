import { Select } from "@chakra-ui/react";
import { LANGUAGE } from "@constants/languages";
import { useTranslation } from "@contexts/useTranslation";
import { Option } from "./Option";

export const SelectLanguage = () => {
	const {
		handleChangeLanguage,
		translationNext: { t },
		currentLanguageByLocalStorage,
	} = useTranslation();

	return (
		<Select
			cursor="pointer"
			variant="unstyled"
			onChange={(e) => handleChangeLanguage(e.target.value)}
			w={
				currentLanguageByLocalStorage === LANGUAGE.portuguese
					? "4.5rem"
					: "3.5rem"
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
	);
};
