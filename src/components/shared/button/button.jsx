import React from 'react';
import './button.scss';

export default function Button({ children, href }) {
  return (
    <>
      {href ? (
        <a href={href} className="shrink-border">
          {children}
        </a>
      ) : (
        <button className="shrink-border">{children}</button>
      )}
    </>
  );
}
