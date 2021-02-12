import React from "react";
import { Link, NavLink } from "react-router-dom";
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
  activeLinkText: {
    color: "#b78ec2",
    borderBottom: "2px solid #b78ec2",
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
            <NavLink
              key={title}
              to={path}
              className={classes.linkText}
              activeClassName={classes.activeLinkText}
            >
              <ListItem button>
                <ListItemText primary={title} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    </AppBar>
  );
};

export default Header;
