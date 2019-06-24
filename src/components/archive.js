import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const Archive = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query BlogPostArchives {
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
        <ArchiveList>
          {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`${edge.node.frontmatter.slug}`}>
                <span>{edge.node.frontmatter.title}</span>
              </Link>
            </li>
          ))}
        </ArchiveList>
      </aside>
    </>
  )
}

export default Archive
