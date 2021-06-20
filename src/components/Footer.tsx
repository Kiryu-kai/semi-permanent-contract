import React, {useState, useEffect} from 'react';
import styles from './Footer.module.scss';

export function Footer() {
  const [isExpanded, setExpanded] = useState(false);
  const onclick: React.MouseEventHandler = function (e) {
    e.stopPropagation()
    setExpanded(!isExpanded);
  };
  const stopPropagetion = (e: React.MouseEvent) => e.stopPropagation();

  useEffect(() => {
    window.addEventListener('click', e => {
      if (isExpanded) {
        setExpanded(!isExpanded);
      }
    });
  });

  return (
    <footer className={styles.wrap}>
      <p className={styles.copyright}>
        <small>©︎ 2020 Coco Kiryu - <button type="button" className={styles.btn} onClick={onclick}　aria-expanded={isExpanded}>Material</button> - <a href="https://github.com/Kiryu-kai/semi-permanent-contract">Repository</a> - <a href="/">Home</a></small>
      </p>

      <div className={styles.material} hidden={!isExpanded}>
        <div className={styles.material__inner} onClick={stopPropagetion}>
          <h2 className={styles.material__hdg}>Material</h2>

          <p className={styles.material__p}>
            The collaborators are different for each directory.
          </p>

          <p className={styles.material__p}>
            This top page is supported by the following works.
          </p>

          <ul className={styles.material__ul}>
            <li className={styles.material__li}>
              <a href="https://twitter.com/buff47213168/status/1360166763317526532">buff🐉 (@buff47213168) - Twitter</a>
            </li>
            <li className={styles.material__li}>
              <a href="https://twitter.com/same_kiryukaIll/status/1403628837867442184">桐生会星詠み組 組長 灑明/さめ(@same_kiryukaIll) - Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
