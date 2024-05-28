import React from 'react';
import styles from './bouncing-arrow.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function BouncingArrow({ href, classNames = '' }) {
  return (
    <a href={href} className={clsx(styles['chevron-link'], classNames)}>
      <FontAwesomeIcon icon={faChevronDown} />
    </a>
  );
}
