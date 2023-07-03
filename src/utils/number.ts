export const convertNumber = (
        fromFormat: string,
        toFormat: string,
        value: string) => {
    if (value === '') return ''

    let decimalValue: number
    
    if (fromFormat === 'decimal') {
        if (!(/^[0-9]+$/.test(value))) {
            return ''
        }
    }
    if (fromFormat === 'binary') {
        if (!(/^[0-1]+$/.test(value))) {
            return ''
        }
    }
    if (fromFormat === 'octal') {
        if (!(/^[0-7]+$/.test(value))) {
            return ''
        }
    }
    if (fromFormat === 'hexadecimal') {
        if (!(/^[0-9A-Fa-f]+$/.test(value))) {
            return ''
        }
    }

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

    let result

    switch (toFormat) {
        case 'decimal':
            result = decimalValue.toString()
            break
        case 'binary':
            result = decimalValue.toString(2)
            break
        case 'octal':
            result = decimalValue.toString(8)
            break
        case 'hexadecimal':
            result = decimalValue.toString(16).toUpperCase()
            break
        default:
            result = ''
    }

    if (result) {
        return result
    } else {
        return ''
    }
}
