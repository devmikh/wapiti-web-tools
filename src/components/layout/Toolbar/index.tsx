import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { switchActive } from '../../../store/features/toolbarSlice'
import ToolCategory from '../ToolCategory'
import ToolLink from '../ToolLink'
import { State, Category, Tool } from '../../../store/types'
import styles from './index.module.css'

export default function Toolbar() {

    const categories = useSelector((state: State) => state.toolbar.categories)
    const toolbarIsActive = useSelector((state: State) => state.toolbar.active)

    const dispatch = useAppDispatch()

    const switchToolbarActive = () => {
        dispatch(switchActive())
    }

    const onMouseEnter = () => {
        if (!toolbarIsActive) {
            switchToolbarActive()
        }
        
    }

    const onMouseLeave = () => {
        if (toolbarIsActive) {
            switchToolbarActive()
        }
    }

    const toolCategories = categories.map((category: Category) => {
        return (
        <ToolCategory key={category.id} id={category.id} expanded={category.expanded} title={category.title} icon={category.icon} mobile={false}>
            {category.tools.map((tool: Tool) => {
                return (
                    <ToolLink key={tool.id} id={tool.id} categoryId={category.id} name={tool.name} link={tool.link} collapseToolbarOnClick={false} />
                )
            })}
        </ToolCategory>)
    })

    return (
        <div className={`${styles['toolbar-container']} ${toolbarIsActive && styles['active']}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            {toolCategories}
        </div>
    )
}