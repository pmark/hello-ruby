import Link from 'next/link';

const containerStyle = {
  marginTop: 0,
};

const Footer = () => (
    <div style={containerStyle}>
      {/*
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      */}
        <footer>
          <p>&copy; 2018</p>
          <p>
            Design by <a href='mailto:mark@markoart.net'>Mark Markovich</a>
            <br/>
            Web app by <a href='https://twitter.com/pmark' target='_blank'>P. Mark Anderson</a>
          </p>
        </footer>
        <style jsx>{`
          footer {
            font-size: 12px;
            color: #352E1B;
            text-align: center;
            padding: 10px 10px 188px;
            margin-top: 22px;
            background: rgba(0,0,0,0.05);
          }
          footer p {
            display: inline-block;
            vertical-align: middle;
            text-align: left;
            padding: 0 20px;
          }
          a {
            font-size: 13px;
            cursor: pointer;
          }
          a:hover {
            text-decoration: none;
          }
        `}</style>
    </div>
);

export default Footer;
