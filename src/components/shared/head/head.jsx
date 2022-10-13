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
        content="Orry Mevorach's Portfolio Website. Orry is a Web Developer who specializes with JavaScript, specifically React. His preferred frameworks to work with are Gatsby and Next.js, and his preferred CMS platform is Contentful."
      />
      <title>Orry Mevorach</title>

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
