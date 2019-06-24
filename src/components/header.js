import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import gatsbyLogo from '../images/gatsby-icon.png'

const HeaderWrapper = styled.div`
  background: rebeccapurple;
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1
        style={{
          margin: 0,
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            style={{
              width: '100px',
              margin: 0,
            }}
            src={gatsbyLogo}
            alt="Gatsby Logo"
          />
          <span style={{ verticalAlign: 'text-top' }}>{siteTitle}</span>
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
