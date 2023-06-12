import { useEffect } from 'react'
import { useMatch, useResolvedPath, useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const resolvedPath = useResolvedPath(link)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    const handleLinkClick = () => {
        dispatch(setActiveLink({ toolId: id, categoryId: categoryId }));
        navigate(link);
    };

    useEffect(() => {
        if (isActive) {
            dispatch(setActiveLink({ toolId: id, categoryId: categoryId }))
        }
    }, [])

    return (
        <div className={`${styles['link-container']} ${isActive && styles['active']}`}
            onClick={handleLinkClick}>
            <div className={styles['link']}>
                {name}
            </div>
        </div>
    )
}
