// State
export type State = {
    toolbar: ToolbarState
}

// Toolbar
export type Tool = {
    id: number,
    name: string,
    link: string,
    active: boolean
}

export type ToolSearched = {
    id: number,
    key: number,
    name: string,
    link: string,
    active: boolean,
    categoryId: number,
    icon: string
}

export type Category = {
    id: number,
    title: string, 
    expanded: boolean,
    active: boolean,
    icon: string,
    tools: Tool[]
}

export type ToolbarState = {
    active: boolean,
    searchInput: string,
    categories: Category[],
    searchResults: ToolSearched[],
    tools: ToolSearched[]
}
