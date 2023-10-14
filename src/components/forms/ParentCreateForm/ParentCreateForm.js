import { Button, Grid } from '@mui/material';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

import {InputLabel, Select, FormHelperText, MenuItem } from '@mui/material';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import getParentCreateInitialValues from './getParentCreateInitialValues';
import InputField from '../../InputField';

const parentValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    gender: Yup.string().required(),
    birthday: Yup.string().required(),
    address: Yup.string().required(),
    phone: Yup.string().required(),
    photo: Yup.string().required(),
    blood_group: Yup.string().required()
});

const ITEM_HEIGHT = 22;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const BloodData = ['A', 'A+','A-', 'AB', 'AB-', 'AB+', 'O'];

const ParentCreateForm = ({ parent, onSubmit }) => {

    return (parent === undefined || parent !== null) && (
        <Formik
          initialValues={getParentCreateInitialValues( parent )}
          onSubmit={onSubmit}
          validationSchema={ parentValidationSchema }
        >
        {({
          handleSubmit,
          handleChange
        }) => (
            <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <InputField
                label="Name"
                id="name"
                name="name"
                placeholder="Enter name"
                type="text"
              />
              <InputField
                label="Email"
                id="email"
                name="email"
                placeholder="Enter email"
                type="email"
              />
              <InputField
                label="Password"
                id="password"
                name="password"
                placeholder="Enter password"
                type="password"
              />
              <InputField
                label="Address"
                id="address"
                name="address"
                placeholder="Enter address"
                type="text"
              />
              <InputField
                label="Phone"
                id="phone"
                name="phone"
                placeholder="Enter phone"
                type="text"
              />
              <InputField
                accept="image/*"
                id="photo"
                name="photo"
                placeholder="Enter photo"
                type="file"
              />
              <Grid item >
              <FormControl sx={{ mx: 2 }}>
                <FormLabel>Choose Your Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  id="gender"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio/>}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio/>}
                    label="Male"
                  />
                  <FormControlLabel
                    value="others"
                    control={<Radio/>}
                    label="Others"
                  />
                </RadioGroup>
              </FormControl>
              </Grid>

              <Grid item>
              <InputLabel>Birthday</InputLabel>
                <Field name="birthday">
                {({ field, form }) => (
                  <DatePicker
                    style={{ width: 180 }}
                    showIcon={true}
                    dateFormat="MMMM d, yyyy"
                    id="date"
                    {...field}
                    selected={field.value}
                    onChange={(date) => form.setFieldValue(field.name, date)}
                  />
                )}
              </Field>
              <FormHelperText>Add your birthday</FormHelperText>
              </Grid>

              <Grid item >
              <InputLabel>Blood Group</InputLabel>
                <FormControl
                  sx ={{
                    marginTop: 0,
                    width: 250,
                    height: 50,
                  }}
                >
                  {/* <InputLabel id="simple-select-label">Blood Group</InputLabel> */}
                  <Select
                  labelId="simple-select-label"
                  name="blood_group"
                  onChange={handleChange}
                  MenuProps={MenuProps}
                  >
                  {BloodData?.map((option) => {
                  return <MenuItem value={option} key={option}>{option}</MenuItem>;
                  })}
                  </Select>
                  <FormHelperText>Select a blood group</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
        </Formik>
    )
}

export default ParentCreateForm;
