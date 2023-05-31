import styles from './index.module.css'

export default function Button(props: { label: string, clickHandler: Function}) {

    const { label, clickHandler } = props

    return (
        <button onClick={() => clickHandler()} className={styles['button']}>{label}</button>
    )
}

