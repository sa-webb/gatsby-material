import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"
import IconButton from "@material-ui/core/IconButton"
import MemoryIcon from "@material-ui/icons/LanguageOutlined"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import { TwitterIcon, FacebookIcon, RedditIcon, LinkedinIcon, PinterestIcon, TelegramIcon } from "react-share"
import { CardActions } from "@material-ui/core"
import { graphql } from "gatsby"
import Img from "gatsby-image"

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
    //background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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
  textColor: {
    color: "white",
  },
  heroContent: {
    padding: theme.spacing(2, 0, 2),
  }
}))

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
        <AppBar className={classes.appbar} position="static">
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
                fontSize: 18,
                flex: 1,
              }}
            >
              <Typography className={classes.title} variant="h5">
                Company
              </Typography>
            </Link>

            <Link
              data-testid="about-link"
              to="/solutions"
              style={{
                color: `white`,
                display: `inline-block`,
                float: `right`,
                lineHeight: `35px`,
                textDecoration: `none`,
                //marginLeft: 50,
                marginTop: 8,
                marginRight: 20,
                fontSize: 22,
              }}
            >
              Solutions
            </Link>
            <Link
              data-testid="about-link"
              to="/about"
              style={{
                color: `white`,
                display: `inline-block`,
                float: `right`,
                lineHeight: `35px`,
                textDecoration: `none`,
                marginRight: 20,
                marginTop: 8,
                fontSize: 22,
              }}
            >
              Consulting
            </Link>
            <Link
              data-testid="about-link"
              to="/about"
              style={{
                color: `white`,
                display: `inline-block`,
                float: `right`,
                lineHeight: `35px`,
                textDecoration: `none`,
                marginRight: 20,
                marginTop: 8,
                fontSize: 22,
              }}
            >
              Learn
            </Link>
            <Link
              data-testid="about-link"
              to="/contact"
              style={{
                color: `white`,
                display: `inline-block`,
                float: `right`,
                lineHeight: `35px`,
                textDecoration: `none`,
                marginRight: 15,
                marginTop: 8,
                fontSize: 22,
              }}
            >
              Contact
            </Link>
          </Toolbar>
        </AppBar>
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
            Quickly build an effective pricing table for your potential
            customers with this layout. It&apos;s built with default Material-UI
            components with little customization.
          </Typography>
        </Container>

        <Container className={classes.cardGrid} >
          <Grid container spacing={6} alignItems="center" justify="space-evenly">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Grid item key={node.id} xs={12} md={4}>
                <CardActionArea component="a">
                  <Link
                    to={`${node.frontmatter.path}`}
                    style={{ textDecoration: `none` }}
                  >
                    <Card className={classes.card}>
                      <Img
                        sizes={
                          node.frontmatter.featuredImage.childImageSharp.sizes
                        }
                      />
                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Typography component="h2" variant="h5">
                            {node.frontmatter.title}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {node.frontmatter.date}
                          </Typography>
                        </CardContent>
                        <CardActions >
                          <TwitterIcon size={32} round={true} />
                          <FacebookIcon size={32} round={true}/>
                          <RedditIcon size={32} round={true}/>
                          <LinkedinIcon size={32} round={true}/>
                          <PinterestIcon size={32} round={true}/>
                          <TelegramIcon size={32} round={true}/>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 700, maxHeight: 500) {
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
