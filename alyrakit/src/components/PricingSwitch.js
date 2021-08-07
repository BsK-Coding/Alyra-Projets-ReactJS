
import { Switch, Text, FormControl, FormLabel } from "@chakra-ui/react"

const PricingSwitch = ({ onChange }) => {
  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="center"
      mb="6"
    >
      <FormLabel htmlFor="pricing-option" mb="0">
        Enable{" "}
        <Text as="span" textTransform="uppercase">
          monthly
        </Text>{" "}
        pricing
      </FormLabel>
      <Switch id="pricing-option" onChange={onChange} colorScheme="teal" />
    </FormControl>
  )
}

export default PricingSwitch