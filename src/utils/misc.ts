export const formatAndValidateJSON = (input: string) => {
    if (input === '') {
        return ''
    }
    try {
        const parsedJson = JSON.parse(input)
        return JSON.stringify(parsedJson, null, 2)
    } catch (error) {
        return 'Invalid JSON'
    }
}
