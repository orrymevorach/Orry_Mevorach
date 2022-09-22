import React from 'react';
import './bouncing-arrow.scss';

export default function BouncingArrow({ href }) {
  return (
    <a href={href} className="chevron-link">
      <i className="fas fa-chevron-down"></i>
    </a>
  );
}
