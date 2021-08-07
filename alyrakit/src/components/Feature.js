import { Heading, Text, Image, useColorModeValue } from "@chakra-ui/react"

const Feature = ({ icon, title, text }) => {
  const color = useColorModeValue("gray.600", "teal.50")
  return (
    <div>
      <Image boxSize="64px" src={icon} alt="" mb="4" />
      <Heading fontSize="xl" mb="4">
        {title}
      </Heading>
      <Text color={color}>{text}</Text>
    </div>
  )
}

export default Feature