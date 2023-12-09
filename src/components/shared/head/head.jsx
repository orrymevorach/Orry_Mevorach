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
      <meta
        name="description"
        content="Orry is a freelance web developer, who specializes with JavaScript and React, located in Toronto, ON."
      />
      <meta
        name="keywords"
        content="Freelance web developer, web developer, toronto, frontend developer, senior frontend developer, react, contentful, next.js, contractor"
      />
      <title>Orry Mevorach | Freelance Web Developer</title>

      {/* Icon */}
      <link
        rel="icon"
        href="https://orry-mevorach.s3.ca-central-1.amazonaws.com/smiley.png"
      />

      {/* Icon library stylesheet */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
    </Helmet>
  );
}
