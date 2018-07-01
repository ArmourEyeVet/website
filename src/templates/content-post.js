import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

class ContentTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">

              <div className="content">
                <header className="major">
                  <h1>{post.frontmatter.title}</h1>
                </header>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
          </section>

          
        </div>
      </div>

    )
  }
}

export default ContentTemplate

export const pageQuery = graphql`
  query ContentByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
