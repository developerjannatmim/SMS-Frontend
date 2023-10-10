import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

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

const AdminCreateForm = ({ admin, onSubmit }) => {
  return (
    (admin === undefined || admin !== null) && (
      <Formik initialValues={getAdminCreateInitialValues(admin)} onSubmit={onSubmit} validationSchema={adminValidationSchema}>
        {({ handleSubmit, isSubmitting }) => (
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
                placeholder="Enter password" type="password"

              />
              <InputField
                label="Gender"
                id="gender"
                name="gender"
                placeholder="Enter gender" />
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

              />
              <InputField
                label="Blood Group"
                id="blood_group"
                name="blood_group"
                placeholder="Enter blood group"

              />
              <Grid item xs={12}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth type="submit"
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
  );
};

export default AdminCreateForm;
