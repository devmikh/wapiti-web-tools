import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import styles from './index.module.css'

export default function ToolLink(props: { link: string, name: string }) {
    const { link, name } = props

    const resolvedPath = useResolvedPath(link)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <div>
            <Link to={link} className={`${styles['link']} ${isActive ? styles['active'] : ''}`}>
                {name}
            </Link>
        </div>
    )
}
