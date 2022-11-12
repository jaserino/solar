import Link from 'next/link';
import navStyles from '../../styles/Nav.module.css';
import Image from 'next/image';
import logo from '../../public/logo2.png';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div>
        <Link href="/">
          <div>
            <Image
              className={navStyles.logo}
              src={logo}
              alt="solar logo"
              width="120px"
              height="110px"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
