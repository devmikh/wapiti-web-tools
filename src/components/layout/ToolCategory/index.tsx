import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { expandCollapseCategory } from '../../../store/features/toolbarSlice'
import { State } from '../../../store/types'
import upArrow from '../../../assets/icons/angle-up.svg'
import downArrow from '../../../assets/icons/angle-down.svg'
import styles from './index.module.css'

type ToolCategoryPropsType = {
    id: number,
    expanded: boolean,
    title: string,
    icon: string,
    children: string | JSX.Element | JSX.Element[],
    mobile: boolean
}

export default function ToolCategory(props: ToolCategoryPropsType) {
    const { id, expanded, title, icon, children, mobile } = props

    const toolbarIsActive = useSelector((state: State) => state.toolbar.active)
    const active = useSelector((state: State) => state.toolbar.categories[id].active)

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(expandCollapseCategory({ id: id, expanded: expanded }))
    }

    return (
        <div className={styles['category-container']}>
            <div className={`${styles['category-title-container']} ${active && styles['active']}`} onClick={handleClick}>
                <div className={styles['icon']}><img src={icon} height={28} /></div>
                <h3 className={`${styles['category-title']} ${(!mobile && !toolbarIsActive) && styles['category-title-collapsed']}`}>{title}</h3>
                <img src={expanded ? upArrow : downArrow} height={10} className={`${styles['collapse-icon']} ${!toolbarIsActive && styles['collapse-icon-collapsed']}`}/>
                {toolbarIsActive}
            </div>
            <div
                className={`${styles['links-container']} ${(toolbarIsActive && expanded) ? '' : styles['collapsed']}`}
                style={{ height: (expanded) ? ((children as []).length * 40) : 0}}
            >
                {children}
            </div>
        </div>
    )
}
