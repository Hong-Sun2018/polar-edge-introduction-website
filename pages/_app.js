import Layout from '../layout/Layout';
import { makeStyles } from '@material-ui/styles';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
  
  
}

export default MyApp
