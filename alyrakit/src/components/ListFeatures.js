import {
  Box,
  Container,
  Stack,
  Heading,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  // SimpleGrid
} from "@chakra-ui/react"
import working from "../assets/working.svg"
import { CheckCircleIcon } from "@chakra-ui/icons"
const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ]
  const bg = useColorModeValue("gray.50", "teal.700")
  /*
  const {colorMode} = useColorMode()
  const bg = colorMode === "light" ? "gray.50" : "teal.700"
  */
  return (
    <Box as="section" bg={bg} py="24">
      <Container maxW="container.lg">
        <Stack
          direction={["column", null, "row"]}
          sx={{
            gap: "2rem",
          }}
          alignItems="center"
        >
          <Box flex="1">
            <img
              src={working}
              alt="Illustration with a computer on the desk"
              width="400"
              height="295"
            />
          </Box>
          <Box flex="1">
            <Heading mb="6" fontFamily="special">
              The most useful resource ever created for designers
            </Heading>
            <List
              sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}
            >
              {list.map((el, index) => {
                return (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="teal.300" />
                    {el}
                  </ListItem>
                )
              })}
            </List>
            {/*
            <SimpleGrid as={List}
              columns="2" spacing="2"
            >
              {list.map((el, index) => {
                return (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="teal.300" />
                    {el}
                  </ListItem>
                )
              })}
            </SimpleGrid>
            
            */}
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default ListFeatures


/* MA VERSION */
/*
import {
  Container, Heading, Stack, Box, List, ListItem, ListIcon, Center, SimpleGrid,
} from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"
import working from "../assets/working.svg"

const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ]
  return (

    <Box bg="gray.50" py="20" alignItems="center">
      <Container as="header" maxW="container.lg">
        < Stack direction={["column", null, "row"]}
          sx={{
            gap: "2rem",
          }
          }
        >
          <Center>
            // Ajout d'une Box englobant mon image
            <Box>
              <img
                src={working}
                alt="Illustration with a computer on the desk"
                width="400"
                height="295"
              />
            </Box>
          </Center>

          <Center>
            <Box>
              <Heading as="h2" mb="6">The most useful resource ever created for designers</Heading>
              <List>
                //Affichage des éléments sur 1 colonne en SM et 2 colonnes en MD/LG
                <SimpleGrid columns={[1, 2, 2]} spacing={2}>
                  {list.map((el, index) => {
                    return (
                      <ListItem key={index}>
                        <ListIcon as={CheckCircleIcon} color="teal.300" />
                        {el}
                      </ListItem>
                    )
                  })}
                </SimpleGrid>
              </List>
            </Box>
          </Center>

        </Stack >

      </Container >
    </Box>


  )
}

export default ListFeatures
*/