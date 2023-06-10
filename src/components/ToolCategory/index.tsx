import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { expandCollapseCategory } from '../../store/features/toolbarSlice'
import upArrow from '../../assets/icons/angle-up.svg'
import downArrow from '../../assets/icons/angle-down.svg'
import styles from './index.module.css'

type ToolCategoryPropsType = {
    id: number,
    expanded: boolean,
    title: string,
    icon: string,
    children: string | JSX.Element | JSX.Element[]
}

export default function ToolCategory(props: ToolCategoryPropsType) {
    const { id, expanded, title, icon, children } = props

    const toolbarIsActive = useSelector((state: any) => state.toolbar.active)
    const active = useSelector((state: any) => state.toolbar.categories[id].active)

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(expandCollapseCategory({ id: id, expanded: expanded }))
    }

    return (
        <div>
            <div className={`${styles['category-title-container']} ${active && styles['active']}`} onClick={handleClick}>
                <img src={icon} height={24} className={styles['icon']} />
                <h3 className={`${styles['category-title']} ${!toolbarIsActive && styles['category-title-collapsed']}`}>{title}</h3>
                <img src={expanded ? upArrow : downArrow} height={10} className={`${styles['collapse-icon']} ${!toolbarIsActive && styles['collapse-icon-collapsed']}`}/>
                {toolbarIsActive}
            </div>
            <div className={`${styles['links-container']} ${(toolbarIsActive && expanded) ? '' : styles['collapsed']}`}>
                {children}
            </div>
        </div>
    )
}
