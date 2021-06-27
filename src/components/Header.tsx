import React from 'react';
import styles from './Header.module.scss';
import { TextWrap } from './TextWrap';
import logo from '../image/logo.png'

export function Header() {
  return (
    <header className={styles.wrap}>
      <div className={styles.title}>
        <h1 className={styles.h1}>
          桐生会
          <TextWrap>たつのこ半永久的継続</TextWrap>
          <TextWrap>契約書</TextWrap>
        </h1>
        <p className={styles.en}>[Kiryu-kai] Tatsunoko Semi-Permanent Contract</p>
      </div>

      <div className={styles.logo}>
        <img src={logo} alt="" className={styles.img} />
      </div>
    </header>
  );
}
