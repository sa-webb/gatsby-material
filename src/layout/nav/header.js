import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AppBarCollapse from "./AppBarCollapse";
import { Link } from "gatsby"
import IconButton from "@material-ui/core/IconButton"
import MemoryIcon from "@material-ui/icons/LanguageOutlined"

const useStyles = makeStyles(theme => ( {
  root: {
    flexGrow: 1,
    marginBottom: 10
  },
  title: {
    flexGrow: 1
  },
  appbar: {
    background: 'transparent',
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {},
  toggleDrawer: {},
  appTitle: {}
}));

const Header = ({siteTitle}) => {
  const classes = useStyles();
  
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
      <IconButton edge="start" className={classes.brandIcon}>
        <MemoryIcon fontSize="large" />
      </IconButton>
        <Link
            data-testid="about-link"
            to="/"
            style={{
              color: `#212121`,
              display: `inline-block`,
              float: `right`,
              lineHeight: `35px`,
              textDecoration: `none`,
              marginRight: 20,
              fontSize: 28,
              flex: 1,
            }}
          >
            {siteTitle}
          </Link>
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Header;
