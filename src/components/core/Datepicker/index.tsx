import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Textfield from '../Textfield'

type DatepickerProps = {
    value: Date,
    onChange: Function,
    prompt: string
}

export default function Datepicker(props: DatepickerProps) {
    
    const { value, onChange, prompt } = props

    return (
        <DatePicker
            selected={value}
            onChange={(date) => onChange(date)}
            showYearDropdown
            enableTabLoop={false}
            customInput={<Textfield value={value.toString()} prompt={prompt} editable={false} />} />
    )
}
