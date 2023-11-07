// third party
import { Button, Grid } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import getLoginInitialValues from './getLoginInitialValues';
import InputField from '../../../components/InputField/InputField';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthLogin = ({ login, onSubmit }) => {
  return (
    (login === undefined || login !== null) && (
      <Formik
        initialValues={getLoginInitialValues(login)}
        onSubmit={onSubmit}
        validationSchema={loginValidationSchema}
      >
        {({ handleSubmit, handleChange }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <InputField
                name="email"
                id="email"
                placeholder="Enter email"
                onChange={handleChange}
                type="email"
              />
              <InputField
                name="password"
                id="password"
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

export default AuthLogin;
