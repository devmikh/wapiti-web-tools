export const countWords = (str: string) => {
    str.trim()
    if (str === '') {
        return 0
    }
    return str.split(/\s+/).filter(x => x !== '').length
}