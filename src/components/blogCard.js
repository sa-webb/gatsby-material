import React from "react"
import { Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Hidden from "@material-ui/core/Hidden"


const useStyles = makeStyles(theme => ({
    card: {
        display: "flex",
      },
      cardDetails: {
        flex: 1,
      },
      cardMedia: {
        width: 160,
      },
}))

const navPosts = [
    {
      title: "Nav Post 1",
      date: "Nov 12",
      description: "This card uses material's CardAction href to route.",
      url: "my-first-post",
    },
    {
      title: "Nav Post 2",
      date: "Nov 11",
      description: "This card uses material's CardAction href to route.",
      url: "my-second-post",
    },
  ]

export default function BlogCard() {

    const classes = useStyles()

    return (
      <>
      <CssBaseline />
        <Grid container spacing={4} className={classes.cardGrid}>
              {navPosts.map(post => (
                <Grid item key={post.title} xs={12} md={6}>
                  <CardActionArea component="a">
                    <Link to={`/blog/${post.url}`} style={{textDecoration: `none`}}>
                    <Card className={classes.card}>
                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Typography component="h2" variant="h5">
                            {post.title}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {post.date}
                          </Typography>
                          <Typography variant="subtitle1" paragraph>
                            {post.description}
                          </Typography>
                        </CardContent>
                      </div>
                      <Hidden xsDown>
                        <CardMedia
                          className={classes.cardMedia}
                          image="https://source.unsplash.com/random"
                          title="Image title"
                        />
                      </Hidden>
                    </Card>
                    </Link>
                  </CardActionArea>
                </Grid>
              ))}
            </Grid>
            </>
    )
}