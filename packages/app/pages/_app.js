import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import BaseApp from '../src/App';
import createStore from '../src/services/store';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Head>
          <title>Lerna</title>
        </Head>
        <Provider store={store}>
          <BaseApp>
            <Component {...pageProps} />
          </BaseApp>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(MyApp);
