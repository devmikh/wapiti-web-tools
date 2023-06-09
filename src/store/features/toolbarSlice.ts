import { createSlice } from '@reduxjs/toolkit'
import { toolbarState } from './toolbarState'

const toolbarSlice = createSlice({
    name: 'toolbar',
    initialState: toolbarState,
    reducers: {
        switchActive: (state) => {
            if (state.active) {
                state.categories.forEach(category => {
                    category.expanded = false
                })
                state.active = false
            } else {
                state.active = true
            }
        },
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

            // Make this category active (while making all other categories inactive)
            state.categories.forEach(category => {
                category.active = false
            })
            state.categories[action.payload.categoryId].active = true

            // Make given link active
            state.categories[action.payload.categoryId].tools[action.payload.toolId].active = true
        },
        collapseAndDeactivateAllCategories: (state) => {
            state.categories.forEach(category => {
                category.expanded = false
                category.active = false
            })
        },
        expandCollapseCategory: (state, action) => {
            if (action.payload.expanded) {
                state.categories[action.payload.id].expanded = false
            } else {
                state.categories[action.payload.id].expanded = true
            }
        },

        searchTools: (state, action) => {
            if (action.payload.searchInput) {
                state.searchInput = action.payload.searchInput
                const searchTerm = action.payload.searchInput.toLowerCase()

                const result = state.tools.filter(tool => {
                    return tool.name.toLowerCase().includes(searchTerm)
                })

                if (result) {
                    state.searchResults = result
                }
            } else {
                state.searchResults = []
            }
        }
    }
})

export const { switchActive, setActiveLink, collapseAndDeactivateAllCategories, expandCollapseCategory, searchTools } = toolbarSlice.actions

export default toolbarSlice.reducer
