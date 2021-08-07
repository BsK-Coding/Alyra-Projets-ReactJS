export const styles = {
  global: (props) => ({
    "html, body": {
      color: props.colorMode === "light" ? "gray.700" : "white",
      bg: props.colorMode === "light" ? "white" : "teal.800",
    },
  }),
}