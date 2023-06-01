import styles from './index.module.css'

export default function Textarea(props: { value: string, readOnly: boolean, onChange?: Function}) {

    const { value, onChange, readOnly } = props

    return (
        onChange ? <textarea value={value} onChange={(e) => onChange(e)} readOnly={readOnly} className={styles['textarea']} /> :
        <textarea value={value} readOnly={readOnly} className={styles['textarea']} />
    )
}
