import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import ParentCreateForm, { getParentCreateInitialValues } from '../../../components/forms/ParentCreateForm';
import MainCard from '../../../components/MainCard';

const ParentCreate = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('gender', values.gender);
    formData.append('address', values.address);
    formData.append('phone', values.phone);
    formData.append('photo', values.photo);
    formData.append('blood_group', values.blood_group);
    formData.append('birthday', values.birthday);
    console.log(values);

    fetch('http://127.0.0.1:8000/api/parents', {
      body: formData,
      headers: {
        Accept: 'application/json',
      },
      method: 'POST',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSubmitting(false);
        resetForm({
          values: getParentCreateInitialValues(undefined)
        });
        swal('Success', response?.message, "success");
        navigate("/parents");
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid alignItems="center" container justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Parent Create</Typography>
          </Grid>
          <Grid item>
            <Link to="/parents">
              <Button color="primary" startIcon={<ArrowLeftOutlined />} variant="contained">
                Parent List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 3 }} sx={{ mt: 2 }}>
          <ParentCreateForm onSubmit={handleSubmit} />
        </MainCard>
      </Grid>
    </Grid>
  );
};
export default ParentCreate;
