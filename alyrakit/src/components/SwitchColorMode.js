import { IconButton, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import React from "react"

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      ml="2"
      onClick={toggleColorMode}
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      variant="outline"
    />
  )
}

export default SwitchColorMode