import CopyButton from '../CopyButton'
import styles from './index.module.css'

type DisplayFieldProps = {
    value: string,
    label?: string,
    includeCopyButton?: boolean,
    size?: string
}

export default function DisplayField(props: DisplayFieldProps) {

    const { value, label, includeCopyButton = false, size } = props

    let style;
    if (size === 'small') {
        style = { fontSize: '0.9rem', width: '12rem', height: '2.5rem'}
    } else if (size === 'large') {
        style = { fontSize: '1rem', width: '100%', height: 'auto'}
    } else {
        style = { fontSize: '1rem', width: '14rem'}
    }

    return (
        <div className={styles['display-field']} style={style}>
            <div className={styles['value-container']}>
                {label && <span className={styles['label']}>{label}</span>}
                <span className={styles['value']}>{value}</span>
            </div>
            {includeCopyButton &&
            <CopyButton value={value} small={size === 'small'} style={{ marginLeft: 'auto', marginRight: '1rem'}} />}
        </div>
    )
}
