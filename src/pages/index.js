import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || "David Leiva's Portfolio - made with Gatsby Simplefolio"}</title>
        <html lang={lang || 'en'} />
        <meta
          name="description"
          content={description || "David Leiva's Portfolio - made with Gatsby Simplefolio"}
        />
      </Helmet>
      <App />
    </>
  );
};
