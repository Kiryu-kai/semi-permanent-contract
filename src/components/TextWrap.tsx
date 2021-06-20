import React from 'react';
import styles from './TextWrap.module.scss';

/** 改行位置調整のためのspan要素エイリアス */
export function TextWrap({ children }: { children: React.ReactNode }) {
  return (
    <span className={styles.wrap}>{children}</span>
  );
}
