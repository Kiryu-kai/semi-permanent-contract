import React from 'react';
import styles from './AgreeBtn.module.scss';

export function AgreeBtn(props: {
  label: string | React.ReactNode,
  href: string,
}) {
  return (
    <p className={styles.wrap}>
      <a href={props.href} className={styles.a}>
        {props.label}
      </a>
    </p>
  );
}
