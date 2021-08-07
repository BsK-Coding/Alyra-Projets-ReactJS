import { List, ListItem, Link } from "@chakra-ui/react"

const NavigationListItems = ({ sx }) => {
  return (
    <List sx={{ textTransform: "uppercase", a: { p: 2, display: "inline-block" }, ...sx }}>
      <ListItem>
        <Link href="/#sample">Sample</Link>
      </ListItem>
      <ListItem>
        <Link href="/#pricing">Pricing</Link>
      </ListItem>
      <ListItem>
        <Link fontWeight="bold" href="/#buy-now">Buy now</Link>
      </ListItem>
    </List>
  );
};

export default NavigationListItems;