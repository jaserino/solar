import '../../styles/globals.css';
import Nav from '../../src/components/Nav';
import Footer from '../../src/components/Footer';
import { store } from '../../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
