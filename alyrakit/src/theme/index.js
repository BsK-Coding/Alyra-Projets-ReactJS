import { extendTheme } from "@chakra-ui/react"
// Global style overrides
import { styles } from "./styles"
// Foundational style overrides
import { fonts } from "./foundations/fonts"
// Component style overrides
import { Badge } from "./components/Badge"
const overrides = {
  styles,
  fonts,
  // Other foundational style overrides go here
  components: {
    Badge,
  },
}
export default extendTheme(overrides)