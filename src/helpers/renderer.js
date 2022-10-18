import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();
  return `<!DOCTYPE html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <link rel="stylesheet" href="https://vetic-css.s3.ap-south-1.amazonaws.com/style.css">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <script>
                window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(
                  /</g,
                  '\\u003c'
                )}
            </script>
           
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            
            <script type="application/ld+json">
            {JSON.stringify({
            "@context": "http://schema.org",
                "@type": "WebSite",
            "url": "https://gomechanic.in",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://gomechanic.in/?s={car_service_gurgaon}",
                "query-input": "required name=car_service_gurgaon"
            }
          })}
          </script>
          
          </head>
            <body>
                <div id="root">${content}</div>
               
                <script src="/bundle.js"></script>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            </body>
    </html>`;
};
