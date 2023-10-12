import { FormHelperText, Grid, MenuItem, TextField } from '@mui/material';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, useField } from 'formik';

interface InputFieldProps {
  fullWidth?: boolean;
  id?: string;
  label?: string;
  name?: string;
  options?: {
    label: string,
    value: string
  }[];
  placeholder?: string;
  select?: boolean;
  type?: string;
  variant?: string;
  xs?: number;
  [key: string]: any;
}

const InputField = ({ options, xs, ...props }: InputFieldProps) => {
  const [field, meta, helpers] = useField(props);

  return (
    <Grid item xs={xs || 6}>
      <Field
        {...field}
        component={props.type === 'date' ? DatePicker : TextField}
        fullWidth
        onBlur={() => helpers.setTouched(true, true)}
        onChange={(event) => helpers.setValue(event.target.value, true)}
        select={props.type === 'select'}
        variant="outlined"
        {...props}
      >
        {props.type === 'select' &&
          options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </Field>
      {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
    </Grid>
  );
};
export default InputField;
