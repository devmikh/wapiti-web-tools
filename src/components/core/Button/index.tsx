import styles from './index.module.css'

type ButtonProps = {
    label: string,
    onClick: Function,
    color?: string, 
}

export default function Button(props: ButtonProps) {

    const { label, onClick, color } = props

    return (
        <button onClick={() => onClick()} className={`${styles['button']} ${color && styles[color]}`}>{label}</button>
    )
}
