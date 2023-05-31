import styles from './index.module.css'

export default function Button(props: { label: string, onClick: Function}) {

    const { label, onClick } = props

    return (
        <button onClick={() => onClick()} className={styles['button']}>{label}</button>
    )
}
