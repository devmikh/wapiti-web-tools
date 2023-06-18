import CopyButton from '../CopyButton'
import styles from './index.module.css'

type DisplayFieldProps = {
    value: string,
    label?: string,
    includeCopyButton?: boolean,
    small?: boolean
}

export default function DisplayField(props: DisplayFieldProps) {

    const { value, label, includeCopyButton = false, small = false } = props

    let style;
    if (small) {
        style = { fontSize: '0.9rem', width: '12rem'}
    } else {
        style = { fontSize: '1rem', width: '16rem'}
    }

    return (
        <div className={styles['display-field']} style={style}>
            <div className={styles['value-container']}>
                {label && <span className={styles['label']}>{label}</span>}
                <span className={styles['value']}>{value}</span>
            </div>
            {includeCopyButton &&
            <CopyButton value={value} small={small} style={{ marginLeft: 'auto', marginRight: '1rem'}} />}
        </div>
    )
}
