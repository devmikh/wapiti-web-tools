import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { switchActive } from '../../store/features/toolbarSlice'
import ToolCategory from '../ToolCategory'
import ToolLink from '../ToolLink'
import styles from './index.module.css'

export default function Toolbar() {

    const categories = useSelector((state: any) => state.toolbar.categories)
    const toolbarIsActive = useSelector((state: any) => state.toolbar.active)

    const dispatch = useAppDispatch()

    const toolCategories = categories.map((category: any) => {
        return (
        <ToolCategory id={category.id} expanded={category.expanded} title={category.title} icon={category.icon}>
            {category.tools.map((tool: any) => {
                return (
                <ToolLink id={tool.id} categoryId={category.id} name={tool.name} link={tool.link} />
                )
            })}
        </ToolCategory>)
    })

    return (
        <div className={`${styles['toolbar-container']} ${toolbarIsActive && styles['active']}`} onMouseEnter={() => dispatch(switchActive())} onMouseLeave={() => dispatch(switchActive())} >
            {toolCategories}
        </div>
    )
}
