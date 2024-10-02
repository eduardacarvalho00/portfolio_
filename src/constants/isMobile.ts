import { useBreakpointValue } from "@chakra-ui/react";

export const isMobile = useBreakpointValue({
  base: true,
  lg: false,
});
