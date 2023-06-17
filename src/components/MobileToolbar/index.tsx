import { useSelector } from 'react-redux'
import ToolCategory from '../ToolCategory'
import ToolLink from '../ToolLink'
import styles from './index.module.css'

export default function MobileToolbar() {

    const categories = useSelector((state: any) => state.toolbar.categories)
    const toolbarIsActive = useSelector((state: any) => state.toolbar.active)

    const toolCategories = categories.map((category: any) => {
        return (
        <ToolCategory key={category.id} id={category.id} expanded={category.expanded} title={category.title} icon={category.icon} mobile={true}>
            {category.tools.map((tool: any) => {
                return (
                <ToolLink key={tool.id} id={tool.id} categoryId={category.id} name={tool.name} link={tool.link} collapseToolbarOnClick={true} />
                )
            })}
        </ToolCategory>)
    })

    return (
        <div className={`mobile-toolbar ${toolbarIsActive && 'active'} ${styles['mobile-toolbar-container']}`}>
            {toolCategories}
        </div>
    )
}
