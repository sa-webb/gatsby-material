import React from "react"
import { TwitterIcon, FacebookIcon } from "react-share"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CssBaseline from "@material-ui/core/CssBaseline"
import Layout from "../layout/layout"
import CardActions from "@material-ui/core/CardActions"

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    //display: "flex",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    backgroundColor: "blue",
  },
}))

export default ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <Layout>
        <div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Grid item key={node.id} xs={12} md={4}>
                  <CardActionArea component="a">
                    <Link
                      to={`${node.frontmatter.category}${node.fields.slug}`}
                      style={{ textDecoration: `none` }}
                    >
                      <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                          <CardContent>
                            <Typography component="h2" variant="h5">
                              {node.frontmatter.title}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="textSecondary"
                            >
                              {node.frontmatter.date}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <TwitterIcon size={32} round={true} />
                            <FacebookIcon size={32} />
                          </CardActions>
                        </div>
                      </Card>
                    </Link>
                  </CardActionArea>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </Layout>
    </>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/topic1/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            title
            date(formatString: "DD MMMM, YYYY")
            description
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
