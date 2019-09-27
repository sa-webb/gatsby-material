import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./nav/header"

const Layout = ({ children }) => (
    <StaticQuery
      query={graphql`
        query TitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div>
            <main>{children}</main>
          </div>
        </>
      )}
    />
  )
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Layout