import styles from './index.css'
import CommonHeader from './CommonHeader'

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
        <CommonHeader/>
        {props.children}
    </div>
  )
}

export default BasicLayout
