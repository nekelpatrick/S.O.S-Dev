import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import useStyles from "./style";

const Input = ({
  name,
  label,
  error,
  helperText,
  select,
  classe,
  value,
  onChange,
  children,
  variant,
  inputRef,
  id,
  type,
}) => {
  const classes = useStyles();
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      className={classes[classe]}
      onChange={onChange}
      error={error && error}
      helperText={helperText && helperText}
      select={select}
      variant={variant}
      inputRef={inputRef}
      type={type}
      id={id}
    >
      {children &&
        children.map(({ props }) => (
          <MenuItem value={props.children}>{props.children}</MenuItem>
        ))}
    </TextField>
  );
};

export default Input;
