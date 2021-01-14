import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import useStyles from "./style";

const Input = ({name, label, variant, error, helperText, select, value, onChange, classe, children}) => {
    console.log(children)
    const classes = useStyles();

    return (
        <TextField
        className={classes[classe]}
        label = {label}
        variant = {variant}
        name = {name}
        value = {value}
        onChange = {onChange}
        error = {error && error}
        helperText = {helperText && helperText}
        select = {select}
        >
            {children && children.map((props) => (
                <MenuItem value = {props.value}>{props.item}</MenuItem>
            ))}
        </TextField>
    )
}

export default Input