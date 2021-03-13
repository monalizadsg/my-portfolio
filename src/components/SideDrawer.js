import React, { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    marginTop: 30,
    width: 250,
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
  },
  drawer: {
    background: "#424242",
  },
  burgerIconButton: {
    "&.MuiIconButton-root": {
      padding: "2px",
      "@media (min-width: 600px)": {
        display: "none",
      },
    },
  },
  burgerIcon: {
    "&.MuiSvgIcon-root": {
      color: "#f1f1f1",
    },
  },
});

const SideDrawer = ({ navLinks }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sideDrawerList = () => (
    <div
      className={classes.list}
      role='presentation'
      onClick={handleDrawerOpen}
      onKeyDown={handleDrawerOpen}
    >
      <List component='nav'>
        {navLinks.map(({ title, path }) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge='start'
        classes={{ root: classes.burgerIconButton }}
        aria-label='menu'
        onClick={handleDrawerOpen}
      >
        <Menu fontSize='large' classes={{ root: classes.burgerIcon }} />
      </IconButton>
      <Drawer
        classes={{ paper: classes.drawer }}
        anchor='right'
        open={open}
        onOpen={handleDrawerOpen}
        onClose={handleDrawerClose}
      >
        {sideDrawerList()}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
