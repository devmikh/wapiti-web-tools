import styles from './index.module.css'

type RadioProps = {
    id: string,
    name: string,
    value: string | number,
    checked: boolean,
    onChange: Function,
    label: string
}

export default function Radio(props: RadioProps) {

    const { id, name, value, checked, onChange, label } = props

    return (
        <div className={styles['container']}>
            <input
                id={id}
                type='radio'
                name={name}
                value={value}
                checked={checked}
                onChange={(e) => onChange(e)}
                className={styles['radio']} />
            <label htmlFor={id} className={styles['label']}>{label}</label>
        </div>
    )
}
