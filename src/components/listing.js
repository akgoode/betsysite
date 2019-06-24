import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Listing = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query BlogPostListing {
      allMarkdownRemark(
        limit: 10
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>Recent Blog Posts</h1>
      {allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.frontmatter.slug}>
          <Link to={node.frontmatter.slug}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <h5>{node.frontmatter.date}</h5>
          <p>{node.excerpt}</p>
          <Link to={node.frontmatter.slug}>Read More</Link>
        </article>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default Listing
