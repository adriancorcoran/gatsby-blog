import React from "react"
import "@shopify/polaris/styles.css"
import { Page, Card, TextStyle, TextContainer } from "@shopify/polaris"

export default ({ data }) => {
  return (
    <Page
      title="Markdown blog with Gatsby and Shopify Polaris"
      singleColumn={true}
    >
      <TextContainer spacing="tight">
        <p>{data.allMarkdownRemark.totalCount} Posts</p>
        <p>&nbsp;</p>
      </TextContainer>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Card
          title={node.frontmatter.title}
          sectioned
          key={node.id}
          secondaryFooterAction={{
            content: "Read Blog",
            url: node.fields.slug,
          }}
        >
          <TextContainer spacing="tight">
            <TextStyle variation="subdued">{node.frontmatter.date}</TextStyle>
            <p>{node.htmlAst.children[0].children[0].value}</p>
          </TextContainer>
        </Card>
      ))}
    </Page>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          htmlAst
        }
      }
    }
  }
`
