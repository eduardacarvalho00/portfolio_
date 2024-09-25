import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogOverlay,
	Stack,
	Text,
} from "@chakra-ui/react";
import { Button } from "@components/Button";
import { ButtonContainer } from "@components/Button/ButtonContainer";
import { useRef } from "react";

interface ModalDeleteConfirmationProps {
	title: string;
	description: string;
	onDeleteRequest: () => Promise<void>;
	onClose: () => void;
	isOpen: boolean;
}

const ModalDeleteConfirmation = ({
	title,
	description,
	onDeleteRequest,
	onClose,
	isOpen,
}: ModalDeleteConfirmationProps) => {
	const cancelRef = useRef(null);

	const onDelete = async () => {
		await onDeleteRequest();
		onClose();
	};

	return (
		<AlertDialog
			isOpen={isOpen}
			onClose={onClose}
			leastDestructiveRef={cancelRef}
			motionPreset="slideInBottom"
			isCentered
		>
			<AlertDialogOverlay bg="modalOverlay">
				<AlertDialogContent w="80%" bg="light.10" borderRadius="8px">
					<AlertDialogHeader
						color="dark.90"
						fontSize={{ base: "20", "2xl": "28" }}
						borderBottom="1px solid #B3BECE"
						px="3rem"
					>
						{title}
					</AlertDialogHeader>

					<AlertDialogBody>
						<Stack
							align="center"
							spacing={{ base: "3.5rem", "2xl": "20" }}
							px={{ base: 0, "2xl": "1.4rem" }}
						>
							<Text mt="0.75rem" fontSize="18">
								{description}
							</Text>

							<ButtonContainer pb="1rem">
								<Button
									onClick={onClose}
									_focus={{
										filter: "brightness(0.8)",
									}}
									text="Cancelar"
								/>

								<Button
									bg="error.50"
									onClick={onDelete}
									color="light.10"
									text="Remover"
								/>
							</ButtonContainer>
						</Stack>
					</AlertDialogBody>

					<AlertDialogCloseButton />
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
};
