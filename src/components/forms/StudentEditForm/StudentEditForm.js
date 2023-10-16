import { Button, Grid } from '@mui/material';
import {
  Formik,
  Field,
} from 'formik';
import * as Yup from 'yup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import getStudentInitialValues from './getStudentInitialValues';
import InputField from '../../InputField';

const studentValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  gender: Yup.string().required(),
  birthday: Yup.string().required(),
  address: Yup.string().required(),
  phone: Yup.string().required(),
  photo: Yup.string().required(),
  blood_group: Yup.string().required()
});
const BloodData = ['A', 'A+','A-', 'AB', 'AB-', 'AB+', 'O'];

const StudentEditForm = ({ student, onSubmit }) => {
  return (
    (student === undefined || student !== null) && (
      <Formik
        initialValues={getStudentInitialValues(student)}
        onSubmit={onSubmit}
        validationSchema={studentValidationSchema}
      >
        {({ handleSubmit, handleChange, values }) => (
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
                placeholder="Enter email" type="email"
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

              <InputField
                label="Photo"
                id="photo"
                name="photo"
                placeholder="Enter photo"
                type="text"
              />

            <Grid item>
              <InputLabel>Birthday</InputLabel>
              <Field name="birthday">
                {({ field, form }) => (
                  <DatePicker
                    {...field}
                    style={{ width: 180 }}
                    showIcon
                    dateFormat="yyyy-MM-dd"
                    id="birthday"
                    selected={field.value}
                    onChange={(date) => form.setFieldValue(field.name, date)}
                  />
                )}
              </Field>
              <FormHelperText>Add your birthday</FormHelperText>
            </Grid>

            <InputField
              label="Blood Group"
              id="blood_group"
              name="blood_group"
              options={BloodData.map((option) => ({ label: option, value: option }))}
              placeholder="Select a blood group"
              type="select"
            />

            <Grid item >
            <FormControl sx={{ mx: 2 }}>
              <FormLabel>Choose Your Gender</FormLabel>
              <RadioGroup
                row
                name="gender"
                id="gender"
                onChange={handleChange}
                defaultValue={values.gender}
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

              <Grid item xs={12}>
                <Button color="primary" onClick={handleSubmit} fullWidth type="submit" variant="contained">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    )
  );
};

export default StudentEditForm;
