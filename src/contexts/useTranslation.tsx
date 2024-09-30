import { createContext, ReactNode, useContext, useEffect } from "react";
import {
	useTranslation as useTranslationNext,
	UseTranslationResponse,
} from "react-i18next";

type TranslationContextProps = {
	children: ReactNode;
};

type TranslationContextData = {
	translationNext: UseTranslationResponse<"translation", undefined>;
	handleChangeLanguage: (lang: string) => void;
	currentLanguageByLocalStorage: string | null;
};

const TranslationContext = createContext({} as TranslationContextData);

export const TRANSLATION_STORAGE_KEY = "@portfolio_translation";

export const TranslationProvider = ({ children }: TranslationContextProps) => {
	const currentLanguageByLocalStorage = localStorage.getItem(
		TRANSLATION_STORAGE_KEY,
	);

	const translationNext = useTranslationNext();

	const handleChangeLanguage = (lang: string) => {
		translationNext.i18n.changeLanguage(lang);
		localStorage.setItem(TRANSLATION_STORAGE_KEY, lang);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (currentLanguageByLocalStorage) {
			translationNext.i18n.changeLanguage(currentLanguageByLocalStorage);
		}
	}, []);

	return (
		<TranslationContext.Provider
			value={{
				translationNext,
				handleChangeLanguage,
				currentLanguageByLocalStorage,
			}}
		>
			{children}
		</TranslationContext.Provider>
	);
};

export const useTranslation = () => {
	const context = useContext(TranslationContext);

	if (!context) {
		throw new Error("useTranslation must be used within an AuthProvider");
	}

	return context;
};
