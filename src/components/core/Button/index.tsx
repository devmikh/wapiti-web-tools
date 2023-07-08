import styles from './index.module.css'

type ButtonProps = {
    label: string,
    onClick: Function,
    color?: string,
    disabled?: boolean,
    widthAuto?: boolean
}

export default function Button(props: ButtonProps) {

    const { label, onClick, color, disabled, widthAuto } = props

    return (
        <button
            disabled={disabled}
            onClick={(() => onClick())}
            className={`
                ${styles['button']}
                ${color && styles[color]}
                ${disabled && styles['disabled']}
                ${widthAuto && styles['width-auto']}
            `}
            >
                {label}
            </button>
    )
}
