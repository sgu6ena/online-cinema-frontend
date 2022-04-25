import {FC} from 'react'
import {OnChangeValue} from 'react-select'
import makeAnimated from 'react-select/animated'
import ReactSelect from 'react-select'
import {
    IOptions,
    ISelect,
} from '../../../ui/form-elemets/select/select.interface'

import styles from './Select.module.scss'
import formStyles from '../form.module.scss'

const animatedComponents = makeAnimated()
const Select: FC<ISelect> = ({
                                 placeholder,
                                 error,
                                 field,
                                 isLoading,
                                 isMulti,
                                 options,
                             }) => {
    const onChange = (newValue: any | OnChangeValue<IOptions, boolean>) => {
        field.onChange(
            isMulti
                ? (newValue as IOptions[]).map((item) => item.value)
                : (newValue as IOptions).value
        )
    }

    const getValue = () => {
        if (field.value) {
            return isMulti
                ? options.filter((option) => field.value.indexOf(option.value) > 0)
                : options.find((option) => option.value === field.value)
        } else return isMulti ? [] : ''
    }
    return (
        <div className={styles.selectContainer}>
            <label>
                <span>{placeholder}</span>
                <ReactSelect
                    classNamePrefix='custom-select'
                    options={options}
                    value={getValue()}
                    isMulti={isMulti}
                    onChange={onChange}
                    components={animatedComponents}
                    isLoading={isLoading}/>
                {error && <div className={formStyles.error}>{error.message}</div>}
            </label>
        </div>
    )
}

export default Select
