import { Link } from 'react-router-dom';


// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import getRegisterInitialValues from './auth-forms/getRegisterInitialValues';
import FirebaseRegister from './auth-forms/AuthRegister';
import AuthWrapper from './AuthWrapper';


// ================================|| REGISTER ||================================ //

const Register = () => {
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log({
      values,

    });
    fetch('http://127.0.0.1:8000/api/register', {
      body: JSON.stringify({
        ...values
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        //'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      method: 'POST'
    })
    .then((response) => response.json())
    .then((response) => {
      console.info(response);
      setSubmitting(false);
      resetForm({
        values: getRegisterInitialValues(undefined)
      });
    })
    .catch((error) => {
      console.error(error);
      setSubmitting(false);
    });
    
  };

  return (
    <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Sign up</Typography>
          <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
            Already have an account?
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <FirebaseRegister onSubmit={handleSubmit} />
      </Grid>
    </Grid>
  </AuthWrapper>
  )
};

export default Register;
