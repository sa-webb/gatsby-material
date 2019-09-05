import React from "react"
// eslint-disable-next-line
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Container from "@material-ui/core/Container"
import Markdown from "../components/helpers/Markdown"

import Layout from "../layout/layout"

import post1 from "../markdown/post-1.md"
import post2 from "../markdown/post-2.md"
import post3 from "../markdown/post-3.md"

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/user/erondu)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}))

// Clever way to statically map imports
const posts = [post1, post2, post3]

export default function Blog() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Layout>
        <Container maxWidth="lg">
          <main>
            {/* Main featured post */}
            <Paper className={classes.mainFeaturedPost}>
              {/* Increase the priority of the hero background image */}
              {
                <img
                  style={{ display: "none" }}
                  src="https://source.unsplash.com/user/erondu"
                  alt="background"
                />
              }
              <div className={classes.overlay} />
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography
                      component="h1"
                      variant="h3"
                      color="inherit"
                      gutterBottom
                    >
                      Our company is great because we are the best
                    </Typography>
                    <Typography variant="h6" color="inherit" paragraph>
                      There are many ways for us to describe how cool that
                      we are. Our reputation is well known for our products 
                      and services. 
                    </Typography>
                    <Typography variant="h4" color="inherit" paragraph>
                      Contact us now!
                    </Typography>

                    
                  </div>
                </Grid>
              </Grid>
            </Paper>
            {/* End main featured post */}

            {/* Sub featured posts */}

            {/* <BlogCard/> */}
            
            {/* End sub featured posts */}

            <Grid container spacing={5} className={classes.mainGrid}>
              {/* Main content */}
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                  Blogs are Below!
                </Typography>
                <Divider />
                
                {posts.map(post => (
                  <Markdown
                    className={classes.markdown}
                    key={post.substring(0, 40)}
                  >
                    {post}
                  </Markdown>
                ))}
              </Grid>
              {/* End main content */}
              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <Typography variant="h6" gutterBottom>
                    About
                  </Typography>
                  <Typography>
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia
                    bibendum nulla sed consectetur.
                  </Typography>
                </Paper>
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.sidebarSection}
                >
                  Archives
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.sidebarSection}
                >
                  Social
                </Typography>
              </Grid>
              {/* End sidebar */}
            </Grid>
          </main>
        </Container>
      </Layout>
    </React.Fragment>
  )
}
