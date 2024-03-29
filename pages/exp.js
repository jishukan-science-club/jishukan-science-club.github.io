import Link from 'next/link'
import styles from '../styles/Exp.module.css'

export default function Exp() {
  return (
    <div className={styles.container}>
      <div className={styles.stage}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <div className={styles.jssclogo} />
            </a>
          </Link>
          <a target="_blank" href="https://www.jishukan.ed.jp/" rel="noopener noreferrer">
            <div className={styles.jslogo} />
          </a>
        </div>
        <nav className={styles.nav}>
          <Link href="/exp">
            <div className={styles.inner}>
              <p>Experiments</p>
            </div>
          </Link>
          <Link href="/note">
            <div className={styles.inner}>
              <p>Notes</p>
            </div>
          </Link>
          <Link href="/ext">
            <div className={styles.inner}>
              <p>Ext</p>
            </div>
          </Link>
          <Link href="/about">
            <div className={styles.inner}>
              <p>About</p>
            </div>
          </Link>
        </nav>
        <div className={styles.exp_stage}>
          <div className={styles.content_stage}>
            <h1>実験一覧</h1>
            <div>
              <h2>1年...線香花火</h2>
              画像
              <p>説明</p>
            </div>
            <div>
              <h2>2年...青写真</h2>
              画像
              <p>説明</p>
            </div>
            <div>
              <h2>3年...オランダの涙</h2>
              画像
              <p>説明</p>
            </div>
            <div>
              <h2>3年...変炎色蠟燭</h2>
              画像
              <p>説明</p>
            </div>
            <div>
              <h2>4年...信号反応</h2>
              画像
              <p>説明</p>
            </div>
            <div>
              <h2>5年...再結晶</h2>
              画像
              <p>説明</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
