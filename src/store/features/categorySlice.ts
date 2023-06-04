import { createSlice } from '@reduxjs/toolkit'
import textIcon from '../../../public/icons/text.svg'
import colorIcon from '../../../public/icons/color.svg'

const initialState = {
    categories: [
        {
            id: 0,
            title: 'Text',
            expanded: false,
            icon: textIcon,
            tools: [
                {
                    id: 0,
                    name: 'Character Counter',
                    link: '/character-counter',
                    active: false
                },
                {
                    id: 1,
                    name: 'Case Converter',
                    link: '/case-converter',
                    active: false
                },
                {
                    id: 2,
                    name: 'Dummy Text Generator',
                    link: '/dummy-text-generator',
                    active: false
                },
            ]
        },
        {
            id: 1,
            title: 'Color',
            expanded: false,
            icon: colorIcon,
            tools: [
                {
                    id: 0,
                    name: 'Color Format Converter',
                    link: '/color-format-converter',
                    active: false
                }
            ]
        }
    ]
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        setActiveLink: (state, action) => {
            // Set all links to inactive
            state.categories.forEach(category => {
                category.tools.forEach(tool => {
                    tool.active = false
                })
            })

            // Collapse all categories
            state.categories.forEach(category => {
                category.expanded = false
            })

            // Expand category to which given link is related
            state.categories[action.payload.categoryId].expanded = true

            // Make given link active
            state.categories[action.payload.categoryId].tools[action.payload.toolId].active = true
        },
        expandCollapseCategory: (state, action) => {
            if (action.payload.expanded) {
                state.categories[action.payload.id].expanded = false
            } else {
                state.categories[action.payload.id].expanded = true
            }
        },
    },
    
})

export const { setActiveLink, expandCollapseCategory } = categoriesSlice.actions

export default categoriesSlice.reducer