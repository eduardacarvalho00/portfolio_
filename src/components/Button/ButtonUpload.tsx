import { Button, ButtonProps } from "@chakra-ui/react";
import { MdUploadFile } from "react-icons/md";

export const ButtonUpload = ({ ...rest }: ButtonProps) => {
	return (
		<Button
			bg="primary.main.2"
			color="#FFF"
			leftIcon={<MdUploadFile fontSize={18} />}
			_hover={{ bg: "primary.main.1" }}
			{...rest}
		>
			Upload
		</Button>
	);
};
