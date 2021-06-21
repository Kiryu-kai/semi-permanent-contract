import React, {useState, useEffect} from 'react';
import Twitter from 'twitter';
import styles from './Timeline.module.scss';

const getData = () => fetch('https://kiryukai-semi-permanent-contract.heppokofrontend.dev/api.php?include_entities=false&a').then(r => r.text());

export function Timeline() {
  /** @see https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-favorites-list */
  const [tweets, updateTweets] = useState([] as React.ReactNode[]);

  useEffect(() => {
    const load = async () => {
      const body = await getData();
      const responses: Twitter.ResponseData[] = JSON.parse(body);
      const list: React.ReactNode[] = [];

      for (const tweet of responses) {
        if (
          !tweet.extended_entities.media ||
          !tweet.extended_entities.media[0]
        ) {
          console.log(tweet);

          continue;
        }

        const {media_url_https, sizes} = tweet.extended_entities.media[0];
        const {w, h} = sizes.small;

        // console.log(tweet);

        list.unshift(
          <li key={tweet.id_str} lang={tweet.lang} className={styles.li}>
            <a href={`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`} className={styles.panel}>
              <img src={media_url_https} alt={tweet.user.name} className={styles.img} width={w} height={h} />
              <span className={styles.text}>{tweet.text}</span>
            </a>
          </li>
        );
      }

      while(list.length < 7) {
        list.push(<li key={Math.random()} className={styles.li}>
          <span className={styles.panel}>
            <img src={responses[0].extended_entities.media[0].media_url_https} alt="" className={styles.img} />
            <span className={styles.text}>{responses[0].text}</span>
          </span>
        </li>);
      }

      updateTweets(list);
    };

    load();
  }, []);

  return (
    <div className={styles.wrap}>
      <h2 className={styles.h2}>#桐生会半永久的継続契約書</h2>

      <p className={styles.p}>
        <a href="https://twitter.com/kiryu_kai_contr">
          @kiryu_kai_contr
        </a>
        がいいねしたものがリストアップされます。
      </p>

      <p className={styles.p}>
        ハッシュタグをつけてつぶやいてくださいね！
      </p>

      <ul className={styles.ul}>
        {tweets}
      </ul>
    </div>
  );
};
