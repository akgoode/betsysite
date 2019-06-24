import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="About" />
    <h1>About Us</h1>
    <div>
      Lorem ipsum dolor amet williamsburg tousled man braid twee. Hoodie
      actually small batch, tousled neutra craft beer PBR&B butcher sriracha
      sustainable street art. Post-ironic pop-up everyday carry, PBR&B tacos
      selvage listicle. Messenger bag viral chambray, vape locavore marfa pop-up
      shoreditch subway tile next level affogato offal vegan. Gluten-free
      franzen fam dreamcatcher cred ugh, cardigan before they sold out hammock.
      Poutine hoodie godard vexillologist.
    </div>
    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage
