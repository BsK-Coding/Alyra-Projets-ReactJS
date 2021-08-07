import {
  Box,
  Badge,
  Heading,
  Text,
  Button,
  Container,
  LightMode,
} from "@chakra-ui/react"
const GetStarted = () => {
  return (
    <LightMode>
      <Box
        as="section"
        textAlign="center"
        bg="teal.900"
        py="20"
        color="white"
        id="buy-now"
      >
        <Container maxWidth="container.md">
          <Badge colorScheme="whiteAlpha">Get Started</Badge>
          <Heading mb="6" fontFamily="special">
            Get AlyraKit and save your time
          </Heading>
          <Text fontSize="lg" mb="6">
            Stop wasting time trying to do it the "right way" and build a site
            from scratch. AlyraKit is faster, easier, and you still have
            complete control.
          </Text>
          <Button colorScheme="teal" size="lg">
            Buy now
          </Button>
        </Container>
      </Box>
    </LightMode>
  )
}

export default GetStarted



/* Ma VERSION */
/*
import { Heading, Text, Button, Stack, Box, Badge, Center } from "@chakra-ui/react"
import { } from "@chakra-ui/react"

const GetStarted = () => {
  return (
    <Box id="buy-now" bg="#1d4044" color="white" py="20" align="center">
      <Center>
        <Stack >
          <Box>
            <Badge as="span" color="#e2e8f0" bg="teal" borderRadius="full">
              Get Started
            </Badge>{" "}
            <Heading as="h2">Get AlyraKit and save your time</Heading>
            <Text>
              Stop wasting time trying to do it the "right way" and build a site from
              scratch. AlyraKit is faster, easier, and you still have complete
              control.
            </Text>
            <Button bg="teal" color="white" size="lg" align="center">Buy now</Button>
          </Box>
        </Stack>
      </Center>
    </Box >
  )
}

export default GetStarted
*/