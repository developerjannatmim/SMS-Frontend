import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

import getParentInitialValues from './getParentInitialValues';
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

const ParentEditForm = ({ parent, onSubmit }) => {
    return (parent === undefined || parent !== null) && (
        <Formik
          initialValues={getParentInitialValues( parent )}
          onSubmit={onSubmit}
          validationSchema={ parentValidationSchema }
        >
        {({
          handleSubmit,
        }) => (
          <from noValidate onSubmit={handleSubmit}>
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
                label="Gender"
                id="gender"
                name="gender"
                placeholder="Enter gender"
                type="text"
              />
              <InputField 
                label="Birthday"
                id="birthday"
                name="birthday"
                placeholder="Enter birthday"
                type="text"
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
                type="number"
              />
              <InputField 
                id="photo"
                name="photo"
                placeholder="Enter photo"
                type="text"
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

export default ParentEditForm;
