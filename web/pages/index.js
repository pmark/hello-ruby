import Link from 'next/link'

import Layout from '../components/DefaultLayout'
import RubyBooth from '../components/RubyBooth'

export default () => (
  <Layout>
    <h1>Ruby You</h1>
    <RubyBooth />

    <style jsx>{`
      h1 {
        font-family: "Ferdinand W00 Regular","Georgia",serif;
        text-align: center;
      }
    `}</style>
  </Layout>
)
