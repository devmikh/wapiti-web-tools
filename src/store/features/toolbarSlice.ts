import { createSlice } from '@reduxjs/toolkit'
import textIcon from '../../assets/icons/text.svg'
import colorIcon from '../../assets/icons/color.svg'
import imageIcon from '../../assets/icons/image.svg'

const initialState = {
    active: false,
    categories: [
        {
            id: 0,
            title: 'Text',
            expanded: false,
            active: false,
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
            active: false,
            icon: colorIcon,
            tools: [
                {
                    id: 0,
                    name: 'Color Format Converter',
                    link: '/color-format-converter',
                    active: false
                },
                {
                    id: 1,
                    name: 'Tint & Shade Generator',
                    link: '/tint-shade-generator',
                    active: false
                }
            ]
        },
        {
            id: 2,
            title: 'Image',
            expanded: false,
            active: false,
            icon: imageIcon,
            tools: [
                {
                    id: 0,
                    name: 'Image Cropper',
                    link: '/image-cropper',
                    active: false
                }
            ]
        }
    ]
}

const toolbarSlice = createSlice({
    name: 'toolbar',
    initialState: initialState,
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
            if (state.active) {
                state.categories[action.payload.categoryId].expanded = true
            }

            // Make this category active (while making all other categories inactive)
            state.categories.forEach(category => {
                category.active = false
            })
            state.categories[action.payload.categoryId].active = true

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

export const { switchActive, setActiveLink, expandCollapseCategory } = toolbarSlice.actions

export default toolbarSlice.reducer
