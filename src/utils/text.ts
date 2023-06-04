export const countWords = (text: string) => {
    text.trim()
    if (text === '') {
        return 0
    }
    return text.split(/\s+/).filter(x => x !== '').length
}

export const toTitleCase = (text: string) => {
    const words = text.toLowerCase().split(' ')
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
}
