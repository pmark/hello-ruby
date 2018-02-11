import Link from 'next/link';

const linkStyle = {
  padding: '0 25px',
};

const containerStyle = {
  marginTop: 0,
};

const Footer = () => (
    <div style={containerStyle}>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Footer;
