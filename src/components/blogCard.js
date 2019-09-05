import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"

import Layout from "../layout/layout"

import { TwitterIcon } from "react-share"
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    //display: "flex",
    backgroundColor: "blue"
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
    <React.Fragment>
      <CssBaseline/>
      <Layout>
        <div>
          <Grid container spacing={4} className={classes.cardGrid}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Grid item key={node.id} xs={12} md={3}>
                <CardActionArea component="a">
                  <Link
                    to={`${node.frontmatter.path}`}
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
                          <Typography variant="subtitle1" paragraph>
                            {node.frontmatter.path}
                          </Typography>
                          <TwitterIcon size={32} round={true} />
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </div>
      </Layout>
    </React.Fragment>
  )
}

// export const StaticQuery = graphql`
//   query {
//     allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//         }
//       }
//     }
//   }
// `