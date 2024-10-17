import {
	Heading,
	HStack,
	Icon,
	StackProps,
	Text,
	VStack,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { DiPostgresql, DiReact, DiScrum } from "react-icons/di";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useTheme } from "@contexts/useTheme";
import { dark } from "@styles/dark";
import { MdArrowForwardIos } from "react-icons/md";
import {
	SiCypress,
	SiExpo,
	SiNextdotjs,
	SiNodedotjs,
	SiPlaywright,
	SiStyledcomponents,
	SiTailwindcss,
	SiTerraform,
	SiVite,
} from "react-icons/si";
import { IconType } from "react-icons";
import { CardProps } from "@interfaces/stack";
import { Tooltip } from "@components/Tooltip";
import { useTranslation } from "@contexts/useTranslation";
import { scrollbarTheme } from "@constants/scrollbarTheme";

interface ContainerProps extends StackProps {
	children: ReactNode;
}

const Container = ({ children, ...rest }: ContainerProps) => {
	return (
		<Tooltip text="You can turn over the card :)">
			<VStack
				spacing="1rem"
				boxShadow="1px 1px 4px 1px rgba(0,0,0,0.15)"
				px="0.8rem"
				py="1.3rem"
				borderRadius={8}
				minH="17.813rem"
				h="17.813rem"
				minW="12.875rem"
				maxW="20rem"
				overflowY="auto"
				overflowX="hidden"
				justify="space-between"
				css={scrollbarTheme}
				cursor="pointer"
				{...rest}
			>
				{children}
			</VStack>
		</Tooltip>
	);
};

interface CardDesktopProps {
	data: CardProps;
}

export const CardDesktop = ({ data }: CardDesktopProps) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const { theme } = useTheme();
	const {
		translationNext: { t },
	} = useTranslation();

	const iconStack: () => IconType = () => {
		switch (data.name) {
			case "React.js":
				return DiReact;
			case "Next.js":
				return SiNextdotjs;
			case "Node.js":
				return SiNodedotjs;
			case "Terraform":
				return SiTerraform;
			case "React Native + Expo":
				return SiExpo;
			case "TailwindCSS":
				return SiTailwindcss;
			case "Styled Components":
				return SiStyledcomponents;
			case "Scrum":
				return DiScrum;
			case "PostgreSql":
				return DiPostgresql;
			case "Vite":
				return SiVite;
			case "Playwright":
				return SiPlaywright;
			default:
				return SiCypress;
		}
	};

	return !isFlipped ? (
		<Container onClick={() => setIsFlipped(true)}>
			<Heading fontSize={18}>{data.name}</Heading>
			<Icon fontSize={155} as={iconStack()} />
			<HStack
				color={theme === dark ? "primary.70" : "primary.30"}
				fontSize={15}
			>
				<Text>{t("stack.learnMore")}</Text>
				<Icon as={MdArrowForwardIos} />
			</HStack>
		</Container>
	) : (
		<Container onClick={() => setIsFlipped(false)}>
			<VStack>
				<Heading fontSize={18}>{data.name}</Heading>

				<Text fontSize={16} textAlign="justify" lineHeight="normal">
					{data.description}
				</Text>
			</VStack>
			<ChakraLink
				as={ReactRouterLink}
				fontWeight={500}
				fontSize={11}
				color="primary.100"
				textAlign="center"
				to={data.url}
				target="_blank"
			>
				{data.urlName}
			</ChakraLink>
		</Container>
	);
};
