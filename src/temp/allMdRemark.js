// import React from "react"
// import { graphql } from "gatsby"

// export default ({ data }) => {
//   return (
//     <div>
//       <h1>Index page</h1>
//       <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
//       {data.allMarkdownRemark.edges.map(({ node }) => (
//         <div key={node.id}>
//           <h3>
//             {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
//           </h3>
//         </div>
//       ))}
//     </div>
//   )
// }

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//         }
//       }
//     }
//   }
// `