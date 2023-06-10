import { useEffect } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { setActiveLink } from '../../store/features/toolbarSlice'
import styles from './index.module.css'

type ToolLinkPropsType = {
    id: number,
    categoryId: number,
    name: string,
    link: string
}

export default function ToolLink(props: ToolLinkPropsType) {
    const { id, categoryId, name, link } = props

    const dispatch = useAppDispatch()

    const resolvedPath = useResolvedPath(link)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    useEffect(() => {
        if (isActive) {
            dispatch(setActiveLink({ toolId: id, categoryId: categoryId }))
        }
    }, [])

    return (
        <div className={`${styles['link-container']} ${isActive && styles['active']}`}
            onClick={() => dispatch(setActiveLink({ toolId: id, categoryId: categoryId }))}>
            <Link to={link} className={styles['link']}>
                {name}
            </Link>
        </div>
    )
}
