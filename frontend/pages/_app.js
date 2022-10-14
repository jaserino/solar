import '../styles/globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav></Nav>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
