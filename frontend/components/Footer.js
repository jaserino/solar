import footerStyles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo2.png';

const Footer = () => {
  return (
    <>
      <div className={footerStyles.footerbox}>
        <Link href="/">
          <Image
            className={footerStyles.logo}
            src={logo}
            alt="solar logo"
            width="150px"
            height="100px"
          />
        </Link>
        <ul className={footerStyles.footer}>
          <p>jayser @ 2022</p>
          <li>
            <a href="https://jared-serino.netlify.app/">website</a>
          </li>
          <li>
            <a href="https://github.com/jaserino">github</a>
          </li>
          <li>
            <a href="https://twitter.com/jare_ser">twitter</a>
          </li>
          <li>
            <a href="#">Buy me a coffee</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
