import styles from './layout.module.css'
import Link from 'next/link'
import Header from './Header'
import Menu from './Menu'

export default function Layout({ children, home }) {
  return (
    <div>
      <Menu />
      <div className={styles.container}>
        <Header className={styles.header} />
        
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Regresar a home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
