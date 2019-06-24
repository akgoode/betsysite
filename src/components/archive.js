import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Archive = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query BlogPostArchive {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ul>
          {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`${edge.node.frontmatter.slug}`}>
                <span>{edge.node.frontmatter.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Archive
