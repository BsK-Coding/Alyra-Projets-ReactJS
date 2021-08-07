import {
  Box,
  Container,
  Link,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react"
import MobileNavigation from "./MobileNavigationDrawer"
import NavigationListItems from "./NavigationListItems"
import SwitchColorMode from "./SwitchColorMode"
const Navigation = () => {
  const [isMobile] = useMediaQuery("(max-width: 720px)")
  console.log(isMobile)
  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.200")
  return (
    <Box position="fixed" py="3" w="100%" bg={bg} zIndex="sticky">
      <Container
        as="nav"
        maxW="container.lg"
        d="flex"
        sx={{
          "a:hover": {
            textDecoration: "none",
          },
        }}
      >
        <Link href="/" fontWeight="bold" fontSize="2xl" mr="auto">
          AlyraKit
        </Link>
        {isMobile ? (
          <MobileNavigation>
            <NavigationListItems />
          </MobileNavigation>
        ) : (
          <NavigationListItems sx={{ display: "flex" }} />
        )}
        <SwitchColorMode />
      </Container>
    </Box>
  )
}

export default Navigation