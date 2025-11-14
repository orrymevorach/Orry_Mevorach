'use client';
import React from 'react';
import styles from './input.module.scss';

export default function Input({
  type = 'text',
  value,
  handleChange,
  placeholder,
  id,
  name,
  required = false,
  className = '',
  rows,
}) {
  if (type === 'textarea') {
    return (
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={e => handleChange(e)}
        required={required}
        rows={rows}
        className={`${styles.input} ${className}`}
      />
    );
  }

  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={e => handleChange(e)}
      required={required}
      className={`${styles.input} ${className}`}
    />
  );
}
