import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';

// const globalStyle = {
//   color: '#352E1B',
//   font-family: '"Trade Gothic W01 Light","Helvetica","Arial",sans-serif',
//   font-size: '18px',
//   font-weight: 400,
// }

const colors = {
  orange: '#F0744F',
  yellow: '#F8A543',
  magenta: '#C53569',
};

const layoutStyle = {
  margin: 0,
  padding: 0,
  height: '100%',
};

const Layout = (props) => (
  <div id='layout'>
    <Head>
      <title>Ruby You</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" key="viewport" />
    </Head>
    <Header />
    {props.children}
    {/*
      <Footer />
    */}
    <style global jsx>{`
      html, body, #__next {
        height: 100%;
      }
      body {
        background: #F7F7F0 url('https://www.callruby.com/wp-content/themes/callruby-theme/images/bg-texture-lines-blue-toponly.png') repeat-x top left;
        font-family: "Trade Gothic W01 Light","Helvetica","Arial",sans-serif;
        font-size: 14px;
        line-height: 1.4;
        color: #333;
        font-weight: 400;
        text-align: center;
        margin: 0;
        padding: 0;
      }

      #layout {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
      }

      a,
      a:active,
      a:visited {
        color: #352E1B;
        text-decoration: underline;
        font-size: 12px;
        font-weigth: 300;
      }
      a:hover {
        text-decoration: none;
      }
    `}</style>
    <script type="text/javascript" src="//fast.fonts.net/jsapi/432a0aab-68ae-4db9-b6c0-6967c8197479.js"></script>
  </div>
);

export default Layout;
