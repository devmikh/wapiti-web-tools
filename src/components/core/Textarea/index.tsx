import styles from './index.module.css'

export default function Textarea(props: { value: string, onChange: Function}) {

    const { value, onChange } = props

    return (
        <textarea value={value} onChange={(e) => onChange(e)} className={styles['textarea']} />
    )
}
