import Layout from '../components/DefaultLayout.js'

export default (props) => (
  <Layout>
   <h1>{props.url.query.title}</h1>
  </Layout>
)
