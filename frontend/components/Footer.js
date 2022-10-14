import footerStyles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo2.png';

import { AiFillGithub } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiCoffeeTogo } from 'react-icons/bi';
import { FaInternetExplorer } from 'react-icons/fa';
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
          <li>
            <a href="https://jared-serino.netlify.app/">
              <FaInternetExplorer className={footerStyles.icon} />
              website
            </a>
          </li>
          <li>
            <a href="https://github.com/jaserino">
              <AiFillGithub className={footerStyles.icon} />
              github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jare_ser">
              <AiFillTwitterCircle className={footerStyles.icon} />
              twitter
            </a>
          </li>
          <li>
            <a href="#">
              <BiCoffeeTogo className={footerStyles.icon} />
              Buy me a coffee
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
