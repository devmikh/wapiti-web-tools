import styles from './index.module.css'

export default function Button(props: { label: string, color?: string, onClick: Function }) {

    const { label, color, onClick } = props

    return (
        <button onClick={() => onClick()} className={`${styles['button']} ${color && styles[color]}`}>{label}</button>
    )
}
