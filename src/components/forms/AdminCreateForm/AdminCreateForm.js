import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

import {InputLabel, Select, FormHelperText, MenuItem } from '@mui/material';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import getAdminCreateInitialValues from './getAdminCreateInitialValues';
import InputField from '../../InputField';

const adminValidationSchema = Yup.object().shape({
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

const AdminCreateForm = ({ admin, onSubmit }) => {
  // const [gender, setGender] = useState('');

  // const handleChange = (event) => {
  //   setGender(event.target.value);
  // };

const [startDate, setStartDate] = useState(new Date());

// const [blood, setBlood] = useState([]);

const BloodData = ['A', 'A+', 'AB', 'AB-', 'AB+'];

  return (
    (admin === undefined || admin !== null) && (
      <Formik
        initialValues={getAdminCreateInitialValues(admin)}
        onSubmit={onSubmit}
        validationSchema={adminValidationSchema}
      >
        {({ handleSubmit, handleChange }) => (
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
              {/* <InputField
                label="Gender"
                id="gender"
                name="gender"
                placeholder="Enter gender"
                type="text"
              /> */}
              <Grid item >
              <FormControl sx={{ mx: 2 }}>
                <FormLabel>Choose Your Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  id="gender"
                  // value={gender}
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

              <Grid item >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Birthday"
                    id="birthday"
                    name="birthday"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </LocalizationProvider>
              </Grid>

              {/* <InputField
                label="Birthday"
                id="birthday"
                name="birthday"
                placeholder="Enter birthday"
                // type="date"
                // value={startDate}
                // onChange={(date) => setStartDate(date)}
              /> */}
              {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}

              <InputField
                // sx={{ mx: 24 }}
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
                id="photo"
                name="photo"
                placeholder="Enter photo"
                type="file"
              />
              {/* <InputField
                label="Blood Group"
                id="blood_group"
                name="blood_group"
                placeholder="Enter blood group"
                type="text"
              /> */}
              <Grid item >
                <FormControl
                  sx ={{
                    width: 250,
                    height: 50,
                  }}
                >
                  <InputLabel id="simple-select-label">Blood Group</InputLabel>
                  <Select
                  labelId="simple-select-label"
                  name="blood_group"
                  //value={blood}
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
                  //disabled={isSubmitting}
                  // onClick={handleSubmit}
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
  );
};

export default AdminCreateForm;
