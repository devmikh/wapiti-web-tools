import styles from './index.module.css'

export default function ToolCategory(props: { title: string, children: string | JSX.Element | JSX.Element[] }) {
    const { title, children } = props
    return (
        <div>
            <h3 className={styles['category-title']}>{title}</h3>
            <div className={styles['links-container']}>
                {children}
            </div>
        </div>
        
    )
}
