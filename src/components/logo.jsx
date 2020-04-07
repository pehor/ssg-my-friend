import styles from './logo.module.scss'

function Logo () {
  return (
    <div className={ styles.logoImage }>
      <img src="/logo.png" alt="logo" />
    </div>
  )
}

export default Logo
