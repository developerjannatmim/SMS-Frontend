// third party
import { Button, Grid } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import getRegisterInitialValues from './getRegisterInitialValues';
import InputField from '../../../components/InputField/InputField';

const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = ({ register, onSubmit }) => {
  return (
    (register === undefined || register !== null) && (
      <Formik
        initialValues={getRegisterInitialValues(register)}
        onSubmit={onSubmit}
        validationSchema={registerValidationSchema}
      >
        {({ handleSubmit, handleChange }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <InputField
                label="Name"
                id="name"
                name="name"
                placeholder="Enter name"
                onChange={handleChange}
                type="text"
              />
              <InputField
                label="Email"
                id="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                type="email"
              />
              <InputField
                label="Password"
                id="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                type="password"
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
  );
};

export default AuthRegister;
