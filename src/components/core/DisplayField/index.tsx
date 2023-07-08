import CopyButton from '../CopyButton'
import styles from './index.module.css'

type DisplayFieldProps = {
    value: string,
    label?: string,
    includeCopyButton?: boolean,
    // size?: string
}

export default function DisplayField(props: DisplayFieldProps) {

    const { value, label, includeCopyButton = false } = props

    return (
        <div className={styles['display-field']}>
            <div className={styles['value-container']}>
                {label && <span className={styles['label']}>{label}</span>}
                <span className={styles['value']}>{value}</span>
            </div>
            {includeCopyButton &&
            <CopyButton value={value} style={{ marginLeft: 'auto', marginRight: '1rem'}} />}
        </div>
    )
}
