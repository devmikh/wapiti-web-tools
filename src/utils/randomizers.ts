export const generatePassword = (
        lower: boolean,
        upper: boolean,
        numbers: boolean,
        symbols: boolean,
        length: number) => {
            
    const lowerCharset = 'abcdefghijklmnopqrstuvwxyz'
    const upperCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbersCharset = '0123456789'
    const symbolsCharset = '!@#$%^&*()_-+='

    let charset = ''
    let result = ''

    if (lower) {
        charset += lowerCharset
    }

    if (upper) {
        charset += upperCharset
    }

    if (numbers) {
        charset += numbersCharset
    }

    if (symbols) {
        charset += symbolsCharset
    }

    for (let i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length)
        result += charset.charAt(randomIndex)
    }

    return result
}

export const generateRandomNumber = (min: number, max: number) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
