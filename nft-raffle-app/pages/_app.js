import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { AccountContext, ContractsContext } from "../contexts";
import {
  networkName,
  getEthereumObject,
  setupEthereumEventListeners,
  getSignedContract,
  getCurrentAccount,
} from "../utils/common";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);

  const [account, setAccount] = useState(null);
  const [contracts, setContracts] = useState({
    raffleContract: null
  });


  return getLayout(
    <AccountContext.Provider value={account}>
    <ContractsContext.Provider value={contracts}>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
    <ThemeProvider theme={theme}>
    <ToastContainer
          position="bottom-center"
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider>
      </CacheProvider>
    </ContractsContext.Provider>
  </AccountContext.Provider>

  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};