import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

// project import
import AdminCreateForm, { getAdminCreateInitialValues } from '../../../components/forms/AdminCreateForm';
import MainCard from '../../../components/MainCard';

const AdminCreate = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm, setSubmitting }) => {

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('gender', values.gender);
    formData.append('birthday', values.birthday);
    formData.append('phone', values.phone);
    formData.append('address', values.address);
    formData.append('photo', values.photo);
    formData.append('blood_group', values.blood_group);

    console.log(values);
    console.log(formData);

    fetch('http://127.0.0.1:8000/api/admin', {
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
          values: getAdminCreateInitialValues(undefined)
        });
        swal('Success', response?.message, "success");
        navigate("/admin");
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
            <Typography variant="h5">Admin Create</Typography>
          </Grid>
          <Grid item>
            <Link to="/admin">
              <Button color="primary" startIcon={<ArrowLeftOutlined />} variant="contained">
                Admin List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 3 }} sx={{ mt: 2 }}>
          <AdminCreateForm onSubmit={handleSubmit} />
        </MainCard>
      </Grid>
    </Grid>
  );
};
export default AdminCreate;
