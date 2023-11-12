import { Button, Grid } from '@mui/material';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

import {InputLabel, FormHelperText } from '@mui/material';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import getTeacherCreateInitialValues from './getTeacherCreateInitialValues';
import InputField from '../../InputField';

const teacherValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  gender: Yup.string().required(),
  birthday: Yup.string().required(),
  address: Yup.string().required(),
  phone: Yup.string().required(),
  photo: Yup.mixed()
  .nullable()
  .test(
    'FILE_SIZE',
    'UPLOAD FILE IS TOO BIG',
    (value) => !value || (value && value.size <= 1024 * 2048)
  )
  .required('Enter your photo'),
  blood_group: Yup.string().required()
});

const BloodData = ['A', 'A+','A-', 'AB', 'AB-', 'AB+', 'O'];

const TeacherCreateForm = ({ teacher, onSubmit }) => {
  return (teacher === undefined || teacher !== null) && (
    <Formik
      initialValues={getTeacherCreateInitialValues( teacher )}
      onSubmit={onSubmit}
      validationSchema={ teacherValidationSchema }
    >
    {({
      handleSubmit,
      handleChange,
      setFieldValue
    }) => (
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <InputField
            label="Name"
            id="name"
            name="name"
            placeholder="Enter name"
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
          />
          <InputField
            label="Phone"
            id="phone"
            name="phone"
            placeholder="Enter phone"
          />
          <input
            name="photo"
            type="file"
            onChange={(e) => {
              if(e.currentTarget.files){
                setFieldValue('photo', e.currentTarget.files[0]);
              }
            }}
            style={{ marginTop: '37px', marginLeft: '35px' }}
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
          <InputField
            label="Blood Group"
            id='blood_group'
            name='blood_group'
            options={BloodData.map((option) => ({
              label: option,
              value: option
            }))}
            placeholder="Select a blood group"
            type="select"
          />
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

export default TeacherCreateForm;
