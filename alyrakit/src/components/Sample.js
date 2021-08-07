import { Container, Text } from "@chakra-ui/layout"
import { Button, Center, useDisclosure } from "@chakra-ui/react"
import Form from "./Form"

const Sample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Container id="sample" py="20">
      {/* Chakkra-UI: <Text>, à le même usage que la balise <p> */}
      <Text fonZise="lg" mb="6" textAlign="center">
        Using AlyraKit to build your site means never worrying about designing
        another page or cross browser compatibility. Our ever-growing library of
        components and pre-designed layouts will make your life easier.
      </Text>
      {/* Chakkra-UI: <Center>, Permet de centrer l'élément boutton */}
      <Center>
        <Button colorScheme="teal" size="lg" onClick={onOpen}>
          Download a Sample
        </Button>
      </Center>

      <Form isOpen={isOpen} onClose={onClose} />
    </Container>
  )
}

export default Sample
