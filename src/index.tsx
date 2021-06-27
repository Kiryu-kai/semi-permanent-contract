import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/normalize.css/normalize.css';
import './common.scss';
import styles from './components/ScrollLink.module.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Timeline } from './components/Timeline';
import { ContractTexts } from './components/ContractTexts';
import reportWebVitals from './reportWebVitals';
import cursor from './image/cursor.png'
import bg from './image/bg.png'

function ScrollLink() {
  const onclick = (e: React.MouseEvent) => {
    const {hash} = e.target as HTMLAnchorElement;
    const target = document.querySelector(hash);

    if (!target) {
      return;
    }

    e.preventDefault();
    window.history.pushState(null, document.title, hash);
    window.scroll({
      top: target.getBoundingClientRect().top + window.pageYOffset,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // TODO: CSS Modules でkeyframesを動作させる方法を調査する
    const style = document.createElement('style');

    document.head.append(style);
    style.textContent = `
      body {
        cursor: url(${cursor}), auto;
      }

      body::before {
        background-image: url(${bg});
      }

      a {
        cursor: url(${cursor}), pointer;
      }

      @keyframes scroll-move {
        0% {
          transform: translateY(0);
        }

        100% {
          transform: translateY(-4px);
        }
      }

      @keyframes blurIn {
        0% {
          filter: blur(50px);
        }

        100% {
          filter: none;
        }
      }

      @media (prefers-reduced-motion: no-preference) {
        body::before {
          animation: 2s blurIn linear;
        }
      }

      .${styles.a}::after {
        animation: 1s scroll-move infinite alternate-reverse linear;
      }
    `;
  });

  return (
    <p className={styles.wrap}>
      <a href="#timeline" className={styles.a} onClick={onclick}>
        同意書一覧
      </a>
    </p>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <main>
      <ScrollLink />

      <ContractTexts />

      <div id="timeline">
        <Timeline />
      </div>
    </main>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
