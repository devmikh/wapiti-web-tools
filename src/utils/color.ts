import tinycolor from 'tinycolor2'

export const generateTintsAndShades = (color: string, quantity: number, percentage: number, format: string) => {
    const tints = []
    const shades = []

    const parsedQuantity = (quantity - 1) / 2

    for (let i = 1; i <= parsedQuantity; i++) {
        const tint = tinycolor(color).lighten(i * percentage).toHexString()
        tints.push({
            value: tint,
            displayValue: formatColor(tint, format)
        })
    }
    for (let i = 1; i <= parsedQuantity; i++) {
        const shade = tinycolor(color).darken(i * percentage).toHexString()
        shades.push({
            value: shade,
            displayValue: formatColor(shade, format)
        })
    }
    const result = [
        ...tints.reverse(),
        { value: formatColor(color, 'hex'), displayValue: formatColor(color, format)},
        ...shades
    ]
    return result
}

export const formatColor = (color: string, format: string) => {
    let result
    switch (format) {
        case 'hex':
            result = tinycolor(color).toHexString()
            break
        case 'rgb':
            result = tinycolor(color).toRgbString()
            break
        case 'hsl':
            result = tinycolor(color).toHslString()
            break
        case 'hsv':
            result = tinycolor(color).toHsvString()
            break
        default: 
            result = tinycolor(color).toHexString()
    }
    return result
}