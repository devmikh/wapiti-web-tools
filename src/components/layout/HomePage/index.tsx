import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import usePageTitle from '../../../hooks/usePageTitle'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { setActiveLink } from '../../../store/features/toolbarSlice'
import { State, Category, Tool } from '../../../store/types'
import styles from './index.module.css'
import logo from '../../../assets/icons/logo.svg'

export default function HomePage() {
    
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleLinkClick = (toolId: number, categoryId: number, link: string) => {
        dispatch(setActiveLink({ toolId: toolId, categoryId: categoryId }))
        navigate(link)
    }

    const categories = useSelector((state: State) => state.toolbar.categories)

    const toolCategories = categories.map((category: Category) => {
        return (
            <div key={category.id} className={styles['category-container']}>
                <div className={styles['category-title']}>
                    <img src={category.icon} height={32}/>
                    <span>{category.title}</span>
                </div>
                <div className={styles['tools-container']}>
                    {category.tools.map((tool: Tool) => {
                        return (
                            <div
                                key={tool.id}
                                className={styles['tool-container']}
                                onClick={() => handleLinkClick(tool.id, category.id, tool.link)}>
                                <span>{tool.name}</span>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )
    })

    usePageTitle('Homepage | Wapiti Web Tools')

    return (
        <div className={styles['container']}>
            <div className={styles['title-container']}>
                <img src={logo} alt='logo' height={100} className={styles['logo']} />
                <h1>Wapiti</h1>
                <p className={styles['description']}>Ultimate collection of essential web tools at your fingertips.</p>
            </div>
            <div className={styles['categories-container']}>
                {toolCategories}
            </div>
        </div>
    )
}
