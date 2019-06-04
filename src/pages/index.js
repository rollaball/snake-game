import React from "react"

import Layout from "../components/layout"

import TheGame from "../components/TheGame"
export default class IndexPage extends React.Component {
  
  render() {
    return (
      <Layout>
        <TheGame />
      </Layout>
    )
  }
}
// export let IndexPage = () => (
// <Layout>
//     <TheGame />
//   </Layout>
// )

// export default IndexPage
