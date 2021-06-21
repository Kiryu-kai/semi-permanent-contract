import React from 'react';
import { TextWrap } from './TextWrap';
import { AgreeBtn } from './AgreeBtn';
import styles from './ContractTexts.module.scss';

const text = {
  ja: (
    <div className={styles.wrap}>
      <p>
        この契約書に署名すると
        <TextWrap>
          ホロライブ四期生 桐生ココ様が運営する
        </TextWrap>
        <TextWrap>
          「桐生会」及び「たつのこ」に
        </TextWrap>
        <TextWrap>
          半永久的に（勝手に）任命します。
        </TextWrap>
      </p>

      <p>この契約書に署名者は以下のことを認めます。</p>

      <ul>
        <li>「桐生会」及び「たつのこ」に半永久的になります。</li>
        <li>桐生会4代目会長 桐生ココ様へのガチ恋を認めます。</li>
        <li>いつまでも桐生会4代目会長 桐生ココ様を布教し続けます。</li>
        <li>いつでも自分が桐生会であるという自覚をもって桐生会として恥ずかしくない行動を心がけます。</li>
      </ul>

      <p>正装は「<a href="https://booth.pm/ja/items/1796466">クソザコＴ</a>」or「<a href="https://booth.pm/ja/items/2213532">ガチコイＴ</a>」に桐生会代紋です。</p>
      <p>外出の際には必ず桐生会代紋を身に着けるようにしてください。</p>

      <p>
        ※８月１６日以後に桐生会代紋スマホケースが届いたときには外出の際スマートフォンを持っていく場合は桐生会代紋スマホケースを必ず装着した状態でスマートフォンを使用してください。
      </p>

      <p className={styles.last}>
        ※この契約書の有効期限は西暦<strong>2021年7月1日から2521年7月1日</strong>までです。
      </p>

      <p>
        2521年7月1日にまた桐生会4代目会長 桐生ココ様のもとへ自分から訪れて“必ず”更新をしてください。
      </p>
    </div>
  ),
  en: (
    <div className={styles.wrap}>
      <p>
        Those who sign this contract are appointed (appoint themselves) as semi-permanent members titled “tatsunoko” of the organization Kiryu-kai as headed by Kiryu Coco-sama, Hololive 4th Gen.
      </p>

      <p>By signing this contract, you acknowledge the following:</p>

      <ul>
        <li>You become semi-permanent members of Kiryu-kai as tatsunoko.</li>

        <li>You acknowledge you are gachikoi towards Kiryu Coco-sama, the Fourth Generation Chairman of Kiryu-kai.</li>

        <li>You will continue evangelizing about Kiryu Coco-sama, the Fourth Generation Chairman of Kiryu-kai.</li>

        <li>You promise to always be aware of your identity as a member of Kiryu-kai and to carry yourself in a way that does not bring shame to the organization.</li>
      </ul>

      <p>
        The official uniform is a Kiryu-kai Daimon Pin together with either <a href="https://booth.pm/ja/items/1796466">a Kusozako T-Shirt</a> or <a href="https://booth.pm/ja/items/2213532">a Gachikoi T-Shirt</a>.
      </p>

      <p>Always remember to bear the Kiryu-kai Daimon Pin whenever out in public.</p>

      <p>
        ※ After you receive your shipment of the Kiryu-kai Daimon Smartphone Case after August 16, 2021, always remember to store your smartphone within your Kiryu-kai Daimon Smartphone Case whenever out in public.
      </p>

      <p className={styles.last}>
        ※ This contract is effective from <strong>July 1, 2021 until July 1, 2521</strong>. Make sure to visit Kiryu Coco-sama, the Fourth Generation Chairman of Kiryu-kai, on July 1, 2521 to renew this contract in person.
      </p>
    </div>
  ),
};
const label = {
  ja: (
    <>
      署名する<sup>※</sup>
    </>
  ),
  en: (
    <>
      Sign<sup>*</sup>
    </>
  ),
};
const href = {
  ja: 'https://twitter.com/same_kiryukaIll/status/1403628837867442184',
  en: 'https://twitter.com/same_kiryukaIll/status/1403746332540502017',
};
const note = {
  ja: (
    <>
      <span className={styles.note__mark}>※</span>
      <span className={styles.note__txt}>
        この一覧に掲載してほしくない！という方は<a href="https://twitter.com/kiryu_kai_contr">@kiryu_kai_contr</a>にリプライかDMで教えてください。
        <span className={styles.note__br}>
          逆に掲載してほしい！という方もご連絡いただけるとうれしいです！
        </span>
      </span>
    </>
  ),
  en: (
    <>
      <span className={styles.note__mark}>*</span>
      <span className={styles.note__txt}>
        If you don&apos;t want your post to be included in this list, please let me know via reply or DM to <a href="https://twitter.com/kiryu_kai_contr">@kiryu_kai_contr</a>.
        <span className={styles.note__br}>
          On the other hand, if you want us to publish it, please let us know! I&apos;d be happy to hear from you!
        </span>
      </span>
    </>
  ),
};

export function ContractTexts() {
  const lang = (() => {
    switch (window.navigator.language) {
    case 'ja':
    case 'ja-jp':
      return 'ja'

    default:
      return 'en'
    }
  })();

  return (
    <>
      {text[lang]}
      <AgreeBtn label={label[lang]} href={href[lang]} />
      <p className={styles.note}>
        <small className={styles.note__inner}>
          {note[lang]}
        </small>
      </p>
    </>
  );
}
