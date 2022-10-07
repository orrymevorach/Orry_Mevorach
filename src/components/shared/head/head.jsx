import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head() {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Orry Mevorach</title>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Kaushan+Script"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono"
        rel="stylesheet"
      />

      <link
        rel="icon"
        href="https://orry-mevorach.s3.ca-central-1.amazonaws.com/smiley.png"
      />

      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
    </Helmet>
  );
}
