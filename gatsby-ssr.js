/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import { AppProvider } from "@shopify/polaris"

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}
