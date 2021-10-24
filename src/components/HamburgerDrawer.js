import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Exisiting Inventory", "Used Inventory", "Trade-In", "Test Drive", "Cybertruck", "Semi", "Roadstar", "Charging", "Powerwall", "Commerical Energy", "Utilities", "Find Us", "Support"].map(
          (text, index) => (
            <ListItem
              button
              key={text}
              style={{
                margin: "20px 0",
                borderRadius: "100px",
              }}
            >
              <ListItemText primary={text} style={{ marginLeft: '10px' }} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer("right", true)}>
          <p
            style={{
              textTransform: "capitalize",
              color: "#000",
              padding: "5px",
            }}
          >
            Menu
          </p>
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
