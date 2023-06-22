import styles from './index.module.css'

type ButtonProps = {
    label: string,
    onClick: Function,
    color?: string,
    disabled?: boolean
}

export default function Button(props: ButtonProps) {

    const { label, onClick, color, disabled } = props

    return (
        <button
            disabled={disabled}
            onClick={(() => onClick())}
            className={`${styles['button']} ${color && styles[color]} ${disabled && styles['disabled']}`}
            >
                {label}
            </button>
    )
}
