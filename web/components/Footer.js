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
          <a>About!</a>
        </Link>
      */}
        <style jsx>{`
          a {
            display: block;
            border: 1px solid red;
            padding: 0 25px;
            cursor: pointer;
          }
          a:hover {
            text-decoration: none;
          }
        `}</style>
    </div>
);

export default Footer;
