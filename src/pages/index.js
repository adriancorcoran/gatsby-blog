import React from "react"
// import Link from "gatsby-link"

import ReactDOM from "react-dom"
import "@shopify/polaris/styles.css"
import {
  AppProvider,
  Layout,
  Page,
  FooterHelp,
  Card,
  DisplayText,
  Link,
  Button,
  FormLayout,
  TextField,
  AccountConnection,
  ChoiceList,
  SettingToggle,
  Subheading,
  TextStyle,
  TextContainer,
} from "@shopify/polaris"

export default ({ data }) => {
  const breadcrumbs = [
    { content: "Sample apps" },
    { content: "Create React App" },
  ]
  const primaryAction = { content: "New product" }
  const secondaryActions = [{ content: "Import", icon: "import" }]

  return (
    <AppProvider>
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
    </AppProvider>
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
