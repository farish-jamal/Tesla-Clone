import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

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
        <Link to="/models">
          <ListItem
            button
            key="Model S"
            style={{ margin: "20px 0", borderRadius: "100px" }}
          >
            <ListItemText primary="Model S" style={{ marginLeft: "10px" }} />
          </ListItem>
        </Link>
        <Link to="/model3">
          <ListItem
            button
            key="Model 3"
            style={{ margin: "20px 0", borderRadius: "100px" }}
          >
            <ListItemText primary="Model 3" style={{ marginLeft: "10px" }} />
          </ListItem>
        </Link>
        <Link to="/modelx">
          <ListItem
            button
            key="Model X"
            style={{ margin: "20px 0", borderRadius: "100px" }}
          >
            <ListItemText primary="Model X" style={{ marginLeft: "10px" }} />
          </ListItem>
        </Link>
        <Link to="/modely">
          <ListItem
            button
            key="Model Y"
            style={{ margin: "20px 0", borderRadius: "100px" }}
          >
            <ListItemText primary="Model Y" style={{ marginLeft: "10px" }} />
          </ListItem>
        </Link>
        <Link to="/roofs">
          <ListItem
            button
            key="Solar Roofs"
            style={{ margin: "20px 0", borderRadius: "100px" }}
          >
            <ListItemText
              primary="Solar Roofs"
              style={{ marginLeft: "10px" }}
            />
          </ListItem>
        </Link>
        <Link to="/panels">
          <ListItem
            button
            key="Solar Panel"
            style={{ margin: "20px 0", borderRadius: "100px" }}
          >
            <ListItemText
              primary="Solar Panel"
              style={{ marginLeft: "10px" }}
            />
          </ListItem>
        </Link>
        <Link to="/">
          <ListItem
            button
            key="Trade In"
            style={{ margin: "20px 0", borderRadius: "100px" }}
          >
            <ListItemText primary="Trade In" style={{ marginLeft: "10px" }} />
          </ListItem>
        </Link>
        <Link to="/">
          <ListItem
            button
            key="Test Drive"
            style={{ margin: "20px 0", borderRadius: "100px" }}
          >
            <ListItemText primary="Test Drive" style={{ marginLeft: "10px" }} />
          </ListItem>
        </Link>
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
