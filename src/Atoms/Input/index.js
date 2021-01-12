import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const Input = ({name, label, error, helperText, select, value, onChange, children}) => {
    console.log(children)

    return (
        <TextField
        label = {label}
        name = {name}
        value = {value}
        onChange = {onChange}
        error = {error && error}
        helperText = {helperText && helperText}
        select = {select}
        >
            {children && children.map(({props}) => (
                <MenuItem value = {props.children}>{props.children}</MenuItem>
            ))}
        </TextField>
    )
}

export default Input