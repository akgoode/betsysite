import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: black;
    text-decoration: none;
  }
  p {
    font-size: 0.8rem;
  }
  h2 {
    margin-bottom: 0;
  }
  a.read-more {
    font-size: 0.8rem;
    text-decoration: underline;
    color: rebeccapurple;
  }
`

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
        <Post key={node.frontmatter.slug}>
          <Link to={node.frontmatter.slug}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link to={node.frontmatter.slug}>Read More</Link>
        </Post>
      ))}
      <Link className="read-more" to="/page-2/">
        Go to page 2
      </Link>
    </div>
  )
}

export default Listing
