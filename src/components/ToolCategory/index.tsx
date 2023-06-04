import { useAppDispatch } from '../../hooks/useAppDispatch'
import { expandCollapseCategory } from '../../store/features/categorySlice'
import upArrow from '../../../public/icons/angle-up.svg'
import downArrow from '../../../public/icons/angle-down.svg'
import styles from './index.module.css'

export default function ToolCategory(props: { id: number, expanded: boolean, title: string, icon: string, children: string | JSX.Element | JSX.Element[] }) {
    const { id, expanded, title, icon, children } = props

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(expandCollapseCategory({ id: id, expanded: expanded }))
    }

    return (
        <div>
            <div className={styles['category-title-container']} onClick={handleClick}>
                <img src={icon} height={28} className={styles['icon']} />
                <h3 className={styles['category-title']}>{title}</h3>
                <img src={expanded ? upArrow : downArrow} height={16} className={styles['collapse-icon']}/>
            </div>
            <div className={`${styles['links-container']} ${expanded ? '' : styles['collapsed']}`}>
                {children}
            </div>
        </div>
        
    )
}
