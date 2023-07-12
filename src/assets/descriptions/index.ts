export const descriptions = {
    character_counter: {
        overview: 'The Character Counter is a utility designed to help you count the number of characters and words in a given text. Whether you\'re a writer, editor, or simply need to keep track of character limits, this tool provides a quick and accurate way to count characters and words.',
        instructions: [
            'Enter or paste the text you want to count characters for into the designated input field.',
            'As you type or paste the text, the counters will update in real time, displaying the current number of characters and words.',
            'If you need to clear the input field and start over, you can use the "Clear" button provided.'
        ]
    },
    case_converter: {
        overview: {
            brief_overview: 'The Case Converter is a utility that allows you to easily convert text between different letter cases.',
            options_title: 'Available options:',
            options: [
                {
                    title: 'UPPERCASE:',
                    description: 'CONVERTS ALL LETTERS IN THE TEXT TO UPPERCASE.'
                },
                {
                    title: 'lowercase:',
                    description: 'converts all letters in the text to lowercase.'
                },
                {
                    title: 'Title Case:',
                    description: 'Converts The First Letter Of Each Word To Uppercase, While Keeping The Remaining Letters Lowercase.'
                }
            ]
        },
        instructions: [
            'Enter or paste the text you want to convert into the provided input field.',
            'Choose the conversion option by pressing the corresponding button. Text will be converted to the specified case instantly.',
            'If you need to clear the input field and start over, you can use the "Clear" button.',
            'Press the "Copy" button to copy the converted text to the clipboard.'
        ]
    },
    white_space_remover: {
        overview: {
            brief_overview: 'The White Space Remover is a simple utility designed to eliminate unnecessary white spaces from your text.',
            options_title: 'It will remove:',
            options: [
                'Redundant spaces.',
                'Leading and trailing spaces.',
                'Excessive tabs.',
                'Line breaks.'
            ]
        },
        instructions: [
            'Enter or paste the text you want to remove white spaces from into the provided input field.',
            'Click the "Remove White Space" button to remove excessive white spaces',
            'If you need to clear the input field and start over, you can use the "Clear" button.',
            'Press the "Copy" button to copy the processed text to the clipboard.'
        ]
    },
    color_format_converter: {
        overview: {
            brief_overview: 'The Color Format Converter is a utility designed to simplify the conversion of color values between different formats.',
            options_title: 'Available color formats:',
            options: [
                'Hex',
                'RGB',
                'HSL',
                'HSV'
            ]
        },
        instructions: [
            'Enter color value in Hex, RGB, HSL, or HSV format into the provided input field.',
            'Color format will be converted in real time and displayed in the respective display field.',
            'Click the blue icon inside the display field to copy the color value.'
        ]
    },
    tint_shade_generator: {
        overview: 'The Tint & Shade Generator is a utility for generating tints and shades based on the input color.',
        instructions: [
            'Enter color value in Hex, RGB, HSL, or HSV format into the provided input field, or choose it from a color picker by clicking a color box inside the input field.',
            'Select the number of tints and shades, that will be generated (3, 5, 7 or 9).',
            'Select the tint percentage (min. 5%, max. 20%).',
            'Tints and shades will be generated in real time, as soon as any of the settings change.',
            'Click the blue icon inside the display field to copy the color value for the particular tint.',
            'Choose color value format, available formats include Hex, RGB, HSL, HSV.'
        ]
    },
    gradient_generator: {
        overview: 'The Gradient Generator is a tool that allows you to create custom gradients and generate the corresponding CSS code.',
        instructions: [
            'Enter the color values for Color #1 and Color #2 into the provided input fields, or choose it from a color picker by clicking a color box inside the input field.',
            'Use the Angle slider to control the angle of the gradient. The angle ranges from 0 to 360 degrees, allowing you to create linear gradients in any direction.',
            'As you adjust the colors or the angle, the preview section will update, displaying a live preview of the gradient based on your input.',
            'CSS code for the selected gradient will be displayed below the preview. Click the blue icon inside the display field to copy the code to the clipboard.'
        ]
    }
}
