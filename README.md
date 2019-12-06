# GatsbyJS and Material-UI demo

## Getting Started

Install the gatsby-cli if you haven't already.

Clone the repository

For Desktop - Run `gatsby develop`

For Mobile - Run & expose network `gatsby develop -H 0.0.0.0` **device must be on the same network as host**

## Lighthouse Audits

## Demonstrates

* Conditional Templates
* Cross Platform
* Layout practices
* Css global styles
* Material UI theme
* Gatsby plugins
* GraphQL queries
* Avoid route collision

## Data Engineering

Designing data is more than making data more human readable and providing better developer experience. \\
Data architecture **defines the behavior of an application.** \\

For this application, the data is simply structured as topics and subtopics.
Intuitively this suffices as distinguishable.
But **when we begin to query data** if there are **similarities** between the folders and files will cause **collisions**.

If any sub-topic was named sub-topic1 then it would return when we only wanted to return the contents of the directory topic1.

But what if we wanted to retrieve the first sub-topic of every topic?
With the names specified this way then a simple regex of `topic-1` would return them all.
Therefore we have reproducability both programmatically and intuitively while avoiding collisions.
However, couldn't we write a query to fetch the first sub-topic of every topic by searching for the oldest
article in each folder? Yes. But that query is more complex than a simply regex match.
Admittedly I am certain which is best performance wise, but being aware of both implementations is most important.

├── topic1
│   ├── sub-topic-1
│   │   ├── analytics.jpg
│   │   └── index.md
│   ├── sub-topic-2
│   │   ├── index.md
│   │   └── ops.jpg
│   └── sub-topic-3
│       ├── dashboards.jpg
│       └── index.md
├── topic2
│   ├── sub-topic-1
│   │   ├── index.md
│   │   └── wallpaper1.jpg
│   └── sub-topic-2
│       ├── index.md
│       └── wallpaper2.jpg

Tip: To generate the above, install the tree-cli command and cd into the content directory and run the `tree` command.
