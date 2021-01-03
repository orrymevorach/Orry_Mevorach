import React from 'react';
import './portfolio-piece.scss';

export default function PortfolioPiece({ src, alt, href, title }) {
  return (
    <div className="portfolio-piece">
      <img src={src} alt={alt} />
      <a href={href} target="_blank">
        <p className="mask-text-title">{title}</p>
        <div className="portfolio-mask"></div>
      </a>
    </div>
  );
}
