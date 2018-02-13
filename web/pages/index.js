import Link from 'next/link'

import Layout from '../components/DefaultLayout'
import RubyBooth from '../components/RubyBooth'

export default () => (
  <Layout>
    <RubyBooth />

    <style jsx>{`
      h1 {
        font-family: "Ferdinand W00 Regular","Georgia",serif;
        text-align: center;
        position: absolute;
        margin: 0 auto;
        z-index: 10;
        left: 0;
        right: 0;
        top: 20px;
      }
    `}</style>
  </Layout>
)
