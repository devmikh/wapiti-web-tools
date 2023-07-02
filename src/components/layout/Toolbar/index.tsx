import { useSelector } from 'react-redux'
import Searchbar from '../Searchbar'
import ToolCategory from '../ToolCategory'
import ToolLink from '../ToolLink'
import { State, Category, Tool } from '../../../store/types'
import styles from './index.module.css'

export default function Toolbar() {

    const categories = useSelector((state: State) => state.toolbar.categories)

    const toolCategories = categories.map((category: Category) => {
        return (
        <ToolCategory key={category.id} id={category.id} expanded={category.expanded} title={category.title} icon={category.icon}>
            {category.tools.map((tool: Tool) => {
                return (
                    <ToolLink key={tool.id} id={tool.id} categoryId={category.id} name={tool.name} link={tool.link} collapseToolbarOnClick={false} />
                )
            })}
        </ToolCategory>)
    })

    return (
        <div className={styles['toolbar-container']}>
            <Searchbar />
            {toolCategories}
        </div>
    )
}
