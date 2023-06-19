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

export const calculateContrastRatio = (color1: string, color2: string) => {
    const rgb1 = tinycolor(color1).toRgb()
    const rgb2 = tinycolor(color2).toRgb()

    const l1 = calculateRelativeLuminance(rgb1.r, rgb1.g, rgb1.b)
    const l2 = calculateRelativeLuminance(rgb2.r, rgb2.g, rgb2.b)

    let ratio

    if (l1 > l2) {
        ratio = (l1 + 0.05) / (l2 + 0.05)
    } else {
        ratio = (l2 + 0.05) / (l1 + 0.05)
    }

    return Number(ratio.toFixed(2))
}

const calculateRelativeLuminance = (r: number, g: number, b: number) => {
    const sRGB = [r, g, b].map(value => {
        const s = value / 255
        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2]
}
