import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { setActiveLink } from '../../../store/features/toolbarSlice'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { searchTools } from '../../../store/features/toolbarSlice'
import { State } from '../../../store/types'
import { switchActive } from '../../../store/features/toolbarSlice'
import xIcon from '../../../assets/icons/x.svg'
import styles from './index.module.css'

export default function Search(props: { collapseToolbarOnClick: boolean }) {
    
    const [searchInput, setSearchInput] = useState('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const searchResults = useSelector((state: State) => state.toolbar.searchResults)

    useEffect(() => {
        dispatch(searchTools({ searchInput: searchInput}))
    }, [searchInput])

    const handleLinkClick = (toolId: number, categoryId: number, link: string) => {
        if (props.collapseToolbarOnClick) {
            dispatch(switchActive())
        }
        dispatch(setActiveLink({ toolId: toolId, categoryId: categoryId }))
        navigate(link)
    }

    let searchResultElement: JSX.Element[] | JSX.Element | string

    if (!searchInput) {
        searchResultElement = ''
    } else if (searchInput && searchResults.length === 0) {
        searchResultElement = <div className={styles['no-results']}><span>No matches found</span></div>
    } else {
        searchResultElement = searchResults.map(tool => {
            return (
                <div
                    key={tool.key}
                    className={styles['result-link-container']}
                    onClick={() => handleLinkClick(tool.id, tool.categoryId, tool.link)}>
                        <img src={tool.icon} />
                        <span>{tool.name}</span>
                </div>)
        })
    }

    return (
        <div className={styles['search-container']}>
            <div className={styles['search-input-container']}>
                <input
                    type='text'
                    placeholder='Find Tool'
                    value={searchInput}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
                    className={styles['search-input']}/>
                {searchInput &&
                    <div className={styles['search-clear-icon-container']} onClick={() => setSearchInput('')}>
                        <img src={xIcon} />
                    </div>
                }
            </div>
            
            {searchResultElement &&
                <div className={styles['results-container']}>
                    {searchResultElement}
                </div>
            }
        </div>
    )
}
