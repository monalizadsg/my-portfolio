import React from "react";
import { Link } from "react-router-dom";
import { AppBar, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    margin: "auto",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
  },
  logoText: {
    textDecoration: "none",
    color: "#b78ec2",
    fontWeight: 500,
  },
  appBar: {
    backgroundColor: "#343434",
  },
});

const navLinks = [
  { title: "home", path: "/home" },
  { title: "projects", path: "/projects" },
  { title: "blog", path: "/blog" },
];

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.appBar}>
      <div className={classes.navbarDisplayFlex}>
        <Link to='/' style={{ fontSize: 23 }} className={classes.logoText}>
          &lt; monaliza.dev /&gt;
        </Link>
        <List
          component='nav'
          aria-labelledby='main navigation'
          className={classes.navDisplayFlex}
        >
          {navLinks.map(({ title, path }) => (
            <Link to={path} className={classes.linkText}>
              <ListItem button>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </AppBar>
  );
};

export default Header;
