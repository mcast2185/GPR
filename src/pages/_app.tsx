import type { AppProps } from 'next/app';
import Icons from '../components/helpers/icons';
import NavComponent from '@/components/navigation/navbar';

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  Icons();
  return (
    <>
      <NavComponent/>
      <Component {...pageProps} />
    </>
  )
};

export default MyApp;