export const convertNumber = (
        fromFormat: string,
        toFormat: string,
        value: string) => {
    if (value === '') return ''
    let decimalValue: number

    const isHexadecimal = fromFormat === 'hexadecimal'
    const isValidInput =
        (isHexadecimal && /^[0-9A-Fa-f]+$/.test(value)) ||
        (!isHexadecimal && /^[0-9]+$/.test(value))
  
    if (!isValidInput) return ''

    switch(fromFormat) {
        case 'decimal': 
            decimalValue = parseInt(value, 10)
            break
        case 'binary':
            decimalValue = parseInt(value, 2)
            break
        case 'octal':
            decimalValue = parseInt(value, 8)
            break
        case 'hexadecimal':
            decimalValue = parseInt(value, 16)
            break
        default:
            return ''
    }

    switch (toFormat) {
        case 'decimal':
            return decimalValue.toString()
        case 'binary':
            return decimalValue.toString(2)
        case 'octal':
            return decimalValue.toString(8)
        case 'hexadecimal':
            return decimalValue.toString(16).toUpperCase()
        default:
            return ''
    }
}
