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
    },
    contrast_checker: {
        overview: 'The Contrast Checker is a tool that enables you to evaluate and ensure the readability and accessibility of your text by checking the contrast ratio between text and background colors.',
        instructions: [
            'Enter or select the desired text color in the Text Color input field. You can use the color picker by clicking a color box inside the input field, or manually enter the color value.',
            'Similarly, enter or select the background color in the Background Color input field.',
            'To quickly switch the colors between the text and the background, click the switch button.',
            'The small text preview box displays a sample text using the selected colors. This preview helps you visualize how the text will appear in smaller sizes.',
            'The large text preview box showcases a larger sample text, allowing you to assess the readability and contrast of the chosen colors in larger text sizes.',
            'The contrast ratio between the text and background colors is displayed in the Contrast Ratio box. This value indicates the level of contrast between the two colors.',
            'Refer to the WCAG 2.1 Compliance Table to interpret the results. A "Pass" indicates that the contrast meets the specified accessibility standard, while a "Fail" indicates that the contrast falls below the recommended level.',
        ]
    },
    image_cropper: {
        overview: 'The Image Cropper is a utility designed to help you easily crop images.',
        instructions: [
            'Upload the image you want to crop using the provided upload section. You can either drag and drop the image into the area, or click it and choose the image from your local storage.',
            'Once the image is loaded, you can adjust the cropping area by dragging the cropping window.',
            'If you need to change the aspect ratio, choose one of the options above the cropping area.',
            'Output will be displayed below the cropping window and updated in real time.',
            'Click "Download" button to download the cropped image.'
        ]
    },
    image_resizer: {
        overview: 'The Image Resizer is a utility designed to help you easily resize images.',
        instructions: [
            'Upload the image you want to resize using the provided upload section. You can either drag and drop the image into the area, or click it and choose the image from your local storage.',
            'Once the image is loaded, you can change the height or width of the image by entering the desired values into the provided input fields.',
            'You can lock or unlock aspect ratio by checking or unchecking the corresponding box "Maintain aspect ratio".',
            'After the desired width and height are entered, click "Resize" to process the image and display the preview.',
            'Reset the image to the initial dimensions by clicking the "Reset" button.',
            'To download the resized image, click the "Download" button.'
        ]
    },
    image_filters: {
        overview: 'The Image Filters is a utility that enables you to apply various visual effects and filters to your images.',
        instructions: [
            'Upload the image you want to apply filters to using the provided upload section. You can either drag and drop the image into the area, or click it and choose the image from your local storage.',
            'Use sliders to apply various filters to the image, such as Blur, Brightness, Contrast, etc.',
            'Output will be displayed in the preview section and updated in real time.',
            'Reset the image to the default state by clicking the "Reset" button.',
            'To download the processed image, click the "Download" button.'
        ]
    },
    image_metadata_extractor: {
        overview: 'The Image Metadata Extractor is a utility that enables you to view the metadata tags of the image.',
        instructions: [
            'Upload the image you want to extract metadata from using the provided upload section. You can either drag and drop the image into the area, or click it and choose the image from your local storage.',
            'All available metadata tags of the image will be displayed in the metadata section.'
        ]
    },
    random_number_generator: {
        overview: 'The Random Number Generator is a utility designed to generate random numbers within a specified range.',
        instructions: [
            'Specify the range for the random numbers by entering the minimum and maximum values in the designated input fields.',
            'Click the "Generate" button to produce a random number within the specified range.',
            'The tool will generate the requested random number and display it in the corresponding display field.'
        ]
    },
    random_password_generator: {
        overview: 'The Random Password Generator is a utility designed to generate strong and secure passwords. Please note that Wapiti Web Tools does not store or save any of the newly generated passwords.',
        instructions: [
            'Select character sets, which will be used for password generation (lowercase letters, uppercase letters, numbers, symbols).',
            'Choose length of the password by selecting a value on the slider (from 6 to 24).',
            'New password will be generated each time any of the settings changes.',
            'Alternatively, you can click the "Generate" button to create a new password.',
            'Use the "Copy" button to copy the generated password to the clipboard.'
        ]
    },
    dummy_text_generator: {
        overview: 'The Dummy Text Generator is a utility designed to generate placeholder or dummy text for various design and content purposes.',
        instructions: [
            'Select quantity and units. Available options include paragraphs (1-50), sentences (1-250), and words (1-1000).',
            'Dummy text will be generated as soon as you change any of the settings.',
            'Use the "Copy" button to copy the generated dummy text to the clipboard.'
        ]
    }
}
