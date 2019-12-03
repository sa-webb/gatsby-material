import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import { RedditIcon } from "react-share"
import { CardActions } from "@material-ui/core"
import Header from "../layout/nav/header"
import { Link, graphql } from "gatsby"
//import Link from "../components/Link"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flex: 1,
    background: "linear-gradient(135deg, #a503fc 30%, #03ebfc 110% )",
    height: "100vh",
  },
  cardSpace: {
    flexGrow: 1,
    flex: 1,
    //background: 'white',
    height: "50vh",
  },
  appbar: {
    background: "transparent",
    boxShadow: "none",
  },
  title: {
    color: "white",
  },
  brandIcon: {
    color: "white",
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    //backgroundColor: 'black',
  },
  card: {
    //display: "flex",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: 500
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    backgroundColor: "blue",
  },
  cardFooter: {
    
  },
  textColor: {
    color: "white",
  },
  toolbarSecondary: {
    justifyContent: 'space-evenly',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    fontSize: 18
  },
  heroContent: {
    padding: theme.spacing(2, 0, 2),
  }
}))

const sections = [
    'Technology',
    'Design',
    'Business',
    'Science',
  ];

export default ({ data }) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root}>
        {/* <Typography
          component="div"
          style={{ height: "100vh" }}
        /> */}
        <Header siteTitle={data.site.siteMetadata.title}/>

        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="/"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))}
        </Toolbar>

        <main>
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="secondary"
            gutterBottom
          ></Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            This is centered text that is good to place a catchy statement. Notice the elementary linear gradient background.
          </Typography>
        </Container>

        <Container className={classes.cardGrid} >
          <Grid container spacing={6} alignItems="center" justify="space-evenly">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Grid item key={node.id} xs={12} md={4}>
                <CardActionArea component="a">
                  <Link
                    to={`${node.fields.slug}`}
                    style={{ textDecoration: `none` }}
                  >
                    <Card className={classes.card}>
                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Typography component="h2" variant="h5">
                            {node.frontmatter.title}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {node.frontmatter.date}
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing className={classes.cardFooter} action="">
                          <RedditIcon size={32} round={true}/>
                        </CardActions>
                      </div>
                    </Card>
                  </Link>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Container>
        </main>
      </Container>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/solutions/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 700, maxHeight: 450) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`