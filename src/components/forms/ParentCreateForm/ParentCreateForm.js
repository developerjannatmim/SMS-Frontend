import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

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

const ParentCreateForm = ({ parent, onSubmit }) => {

    return (parent === undefined || parent !== null) && (
        <Formik
          initialValues={getParentCreateInitialValues( parent )}
          onSubmit={onSubmit}
          validationSchema={ parentValidationSchema }
        >
        {({
          handleSubmit
        }) => (
            <from noValidate onSubmit={handleSubmit}>
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
              <FormControl sx={{ minWidth: 120, my: 3, mx: 4 }}>
                <FormLabel>Choose Your Gender</FormLabel>
                <RadioGroup row name="gender" id="gender">
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
              <InputField
                label="Birthday"
                id="birthday"
                name="birthday"
                placeholder="Enter birthday"
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
              <InputField
                label="Blood Group"
                id="blood_group"
                name="blood_group"
                placeholder="Enter blood group"
                type="text"
              />

              <Grid item xs={12}>
                <Button
                  color="primary"
                  onClick={handleSubmit}
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </from>
        )}
        </Formik>
    )
}

export default ParentCreateForm;
