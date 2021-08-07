import { HamburgerIcon } from '@chakra-ui/icons';
import { Button, Fade, Box, useDisclosure, IconButton } from '@chakra-ui/react';


const MobileNavigation = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={onToggle}
      />
      <Box position="absolute"
        left="0"
        right="0"
        top="100%" shadow="xl" bg="white">
        <Fade in={isOpen} unmountOnExit={true}>
          <Box
            p="4">
            {children}
          </Box>
        </Fade>
      </Box>
    </>
  )
};

export default MobileNavigation;