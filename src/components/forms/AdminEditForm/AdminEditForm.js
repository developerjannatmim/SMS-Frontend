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

import getAdminInitialValues from './getAdminInitialValues';
import InputField from '../../InputField';

const adminValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
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
  blood_group: Yup.string().required(),
});

const BloodData = ['A', 'A+','A-', 'AB', 'AB-', 'AB+', 'O'];

const AdminEditForm = ({ admin, onSubmit }) => {

  return (
    (admin === undefined || admin !== null) && (
      <Formik
        initialValues={getAdminInitialValues(admin)}
        onSubmit={onSubmit}
        validationSchema={adminValidationSchema}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          setFieldValue
        }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={4}>
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
            <Grid item style={{ marginTop: '-28px', marginLeft: '5px' }}>
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
            <input
              name="photo"
              type="file"
              onChange={(e) => {
                if(e.currentTarget.files){
                  setFieldValue('photo', e.currentTarget.files[0]);
                }
              }}
              style={{ marginTop: '30px', marginLeft: '320px' }}
            />
            <Grid item xs={12}>
              <Button
                color="primary"
                onClick={handleSubmit}
                fullWidth type="submit"
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
  );
};

export default AdminEditForm;
