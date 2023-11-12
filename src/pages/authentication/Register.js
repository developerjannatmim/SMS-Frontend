import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import getRegisterInitialValues from './auth-forms/getRegisterInitialValues';
import FirebaseRegister from './auth-forms/AuthRegister';
import AuthWrapper from './AuthWrapper';

// ================================|| REGISTER ||================================ //

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log({
      values,

    });
    fetch('http://127.0.0.1:8000/api/register' , {
      body: JSON.stringify({
        ...values
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        //'X-CSRF-TOKEN': csrf_token
      },
      method: 'POST'
    })
    .then((response) => response.json())
    .then((response) => {
      if(response?.status === 200){
        localStorage.setItem('auth_token', response?.token);
        localStorage.setItem('auth_name', response?.username);
        console.info(response);
        resetForm({
          values: getRegisterInitialValues(undefined)
        });
        swal('Success', response?.message, "success");
        navigate("/");
      }else{
        swal('Warning', response?.message, "warning");
      }
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
