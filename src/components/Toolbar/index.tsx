import { useSelector } from 'react-redux'
import ToolCategory from '../ToolCategory'
import ToolLink from '../ToolLink'
import styles from './index.module.css'

export default function Toolbar() {

    const categories = useSelector((state: any) => state.categories)

    const toolCategories = categories.categories.map((category: any) => {
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
        <div className={styles['toolbar-container']}>
            {toolCategories}
        </div>
    )
}
