import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 10,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#fafafa",
  },
})

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
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
              fontSize: 18,
              flex: 1,
            }}
          >
            <Typography
              className={classes.title}
              variant="h5"
              color="textPrimary"
            >
              {siteTitle}
            </Typography>
          </Link>

          <Link
            data-testid="about-link"
            to="/blog"
            style={{
              color: `#212121`,
              display: `inline-block`,
              float: `right`,
              lineHeight: `35px`,
              textDecoration: `none`,
              marginRight: 20,
              fontSize: 18,
            }}
          >
            Blog
          </Link>
          <Link
            data-testid="about-link"
            to="/about"
            style={{
              color: `#212121`,
              display: `inline-block`,
              float: `right`,
              lineHeight: `35px`,
              textDecoration: `none`,
              marginRight: 20,
              fontSize: 18,
            }}
          >
            About
          </Link>
          <Link
            data-testid="about-link"
            to="/contact"
            style={{
              color: `#212121`,
              display: `inline-block`,
              float: `right`,
              lineHeight: `35px`,
              textDecoration: `none`,
              marginRight: 15,
              fontSize: 18,
            }}
          >
            Contact
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
