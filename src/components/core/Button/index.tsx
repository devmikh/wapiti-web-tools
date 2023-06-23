import styles from './index.module.css'

type ButtonProps = {
    label: string,
    onClick: Function,
    color?: string,
    disabled?: boolean,
    size?: string
}

export default function Button(props: ButtonProps) {

    const { label, onClick, color, disabled, size } = props

    return (
        <button
            disabled={disabled}
            onClick={(() => onClick())}
            className={`
                ${styles['button']}
                ${color && styles[color]}
                ${disabled && styles['disabled']}
                ${size === 'large' && styles['large']}
            `}
            >
                {label}
            </button>
    )
}
