import React from 'react';
import { Provider } from 'react-redux';
import { buildStore } from '../util/redux';

import Head from 'next/head';
import { CssBaseline } from '@material-ui/core';
import { FoodTruckThemeProvider } from '../util/theme';
import '../styles/login.css';
// import '../styles/createAcnt.css';

let initialState = {};
let store = buildStore(initialState);

const FoodTruckApp = ({ Component, pageProps }) => {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <Provider store={ store }>
            <Head>
                <title>Food Truck Finder</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <FoodTruckThemeProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}


                <Component {...pageProps} />
            </FoodTruckThemeProvider>
        </Provider>
    )


};

export default FoodTruckApp;