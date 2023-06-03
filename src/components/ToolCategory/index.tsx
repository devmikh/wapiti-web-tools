import styles from './index.module.css'

export default function ToolCategory(props: { title: string, icon: string, children: string | JSX.Element | JSX.Element[] }) {
    const { title, icon, children } = props
    return (
        <div>
            <div className={styles['category-title-container']}>
                <img src={icon} height={28} className={styles['icon']} /><h3 className={styles['category-title']}>{title}</h3>
            </div>
            <div className={styles['links-container']}>
                {children}
            </div>
        </div>
        
    )
}
