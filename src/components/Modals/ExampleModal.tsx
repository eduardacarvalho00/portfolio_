import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
} from "@chakra-ui/react";

interface ExampleModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ExampleModal = ({ isOpen, onClose }: ExampleModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			size={{ base: "3xl", "4xl": "4xl" }}
		>
			<ModalOverlay bg="modalOverlay" />
			<ModalContent w="90%" bg="white.100">
				<ModalHeader>Modal</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Stack spacing="16" as="form" pb="2rem"></Stack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
