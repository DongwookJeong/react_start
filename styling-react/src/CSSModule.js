import styles from './CSSModule.module.css'

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕, 난 <span className='something'>CSS Module~</span>
        </div>
    )
}

export default CSSModule