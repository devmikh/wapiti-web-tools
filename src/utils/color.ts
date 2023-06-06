import tinycolor from 'tinycolor2'

export const generateTintsAndShades = (color: string, quantity: string, percentage: string, format: string) => {
    const tints = []
    const shades = []

    const parsedQuantity = (Number(quantity) - 1) / 2
    const parsedPercentage = Number(percentage)

    for (let i = 1; i <= parsedQuantity; i++) {
        const tint = tinycolor(color).lighten(i * parsedPercentage).toHexString()
        tints.push({
            value: tint,
            displayValue: formatColor(tint, format)
        })
    }
    for (let i = 1; i <= parsedQuantity; i++) {
        const shade = tinycolor(color).darken(i * parsedPercentage).toHexString()
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