import textIcon from '../../assets/icons/text.svg'
import colorIcon from '../../assets/icons/color.svg'
import imageIcon from '../../assets/icons/image.svg'
import randomIcon from '../../assets/icons/random.svg'

export const toolbarState = {
    active: false,
    categories: [
        {
            id: 0,
            title: 'Text',
            expanded: false,
            active: false,
            icon: textIcon,
            tools: [
                {
                    id: 0,
                    name: 'Character Counter',
                    link: '/character-counter',
                    active: false
                },
                {
                    id: 1,
                    name: 'Case Converter',
                    link: '/case-converter',
                    active: false
                },
                {
                    id: 2,
                    name: 'Dummy Text Generator',
                    link: '/dummy-text-generator',
                    active: false
                },
            ]
        },
        {
            id: 1,
            title: 'Color',
            expanded: false,
            active: false,
            icon: colorIcon,
            tools: [
                {
                    id: 0,
                    name: 'Color Format Converter',
                    link: '/color-format-converter',
                    active: false
                },
                {
                    id: 1,
                    name: 'Tint & Shade Generator',
                    link: '/tint-shade-generator',
                    active: false
                }
            ]
        },
        {
            id: 2,
            title: 'Image',
            expanded: false,
            active: false,
            icon: imageIcon,
            tools: [
                {
                    id: 0,
                    name: 'Image Cropper',
                    link: '/image-cropper',
                    active: false
                }
            ]
        },
        {
            id: 3,
            title: 'Randomizers',
            expanded: false,
            active: false,
            icon: randomIcon,
            tools: [
                {
                    id: 0,
                    name: 'Random Password Generator',
                    link: '/random-password-generator',
                    active: false
                }
            ]
        }
    ]
}
