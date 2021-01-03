import React from 'react';
import './portfolio-piece.scss';

export default function PortfolioPiece({ src, alt, href, title }) {
  return (
    <a href={href} target="_blank" className="portfolio-piece">
      <img src={src} alt={alt} />
      <p className="mask-text-title">{title}</p>
      <div className="portfolio-mask"></div>
    </a>
  );
}
