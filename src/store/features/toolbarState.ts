import { ToolbarState } from '../types'
import textIcon from '../../assets/icons/text.svg'
import colorIcon from '../../assets/icons/color.svg'
import imageIcon from '../../assets/icons/image.svg'
import randomIcon from '../../assets/icons/random.svg'
import timeIcon from '../../assets/icons/time.svg'
import miscIcon from '../../assets/icons/misc.svg'

const categories = [
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
                name: 'White Space Remover',
                link: '/white-space-remover',
                active: false
            }
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
            },
            {
                id: 2,
                name: 'Gradient Generator',
                link: '/gradient-generator',
                active: false
            },
            {
                id: 3,
                name: 'Contrast Checker',
                link: '/contrast-checker',
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
            },
            {
                id: 1,
                name: 'Image Resizer',
                link: '/image-resizer',
                active: false
            },{
                id: 2,
                name: 'Image Filters',
                link: '/image-filters',
                active: false
            },
            {
                id: 3,
                name: 'Image Metadata Extractor',
                link: '/image-metadata-extractor',
                active: false
            }
        ]
    },
    {
        id: 3,
        title: 'Random',
        expanded: false,
        active: false,
        icon: randomIcon,
        tools: [
            {
                id: 0,
                name: 'Random Number Generator',
                link: '/random-number-generator',
                active: false
            },
            {
                id: 1,
                name: 'Random Password Generator',
                link: '/random-password-generator',
                active: false
            },
            {
                id: 2,
                name: 'Dummy Text Generator',
                link: '/dummy-text-generator',
                active: false
            }
        ]
    },
    {
        id: 4,
        title: 'Time',
        expanded: false,
        active: false,
        icon: timeIcon,
        tools: [
            {
                id: 0,
                name: 'Date Difference Calculator',
                link: '/date-difference-calculator',
                active: false
            },
            {
                id: 1,
                name: 'Unix Timestamp Converter',
                link: '/unix-timestamp-converter',
                active: false
            },
            {
                id: 2,
                name: 'Stopwatch',
                link: '/stopwatch',
                active: false
            },
        ]
    },
    {
        id: 5,
        title: 'Miscellaneous',
        expanded: false,
        active: false,
        icon: miscIcon,
        tools: [
            {
                id: 0,
                name: 'JSON Formatter & Validator',
                link: '/json-formatter-validator',
                active: false
            },
            {
                id: 1,
                name: 'QR Code Generator',
                link: '/qr-code-generator',
                active: false
            },
            {
                id: 2,
                name: 'Number Format Converter',
                link: '/number-format-converter',
                active: false
            }
        ]
    }
]
// Combine all tools
const allTools = []
let id = 0
for (const category of categories) {
    for (const tool of category.tools) {
        allTools.push({ ...tool, key: id++, categoryId: category.id, icon: category.icon })
    }
}

export const toolbarState: ToolbarState = {
    active: false,
    searchInput: '',
    categories: categories,
    searchResults: [],
    tools: allTools
}
