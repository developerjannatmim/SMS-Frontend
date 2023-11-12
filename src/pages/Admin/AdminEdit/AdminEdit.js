import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

import AdminEditForm, { getAdminInitialValues } from '../../../components/forms/AdminEditForm';
import MainCard from '../../../components/MainCard';

const AdminEdit = () => {
  const navigate = useNavigate();
  const { adminId } = useParams();

  const [admin, setAdmin] = useState(null);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('gender', values.gender);
    formData.append('birthday', values.birthday);
    formData.append('phone', values.phone);
    formData.append('address', values.address);
    formData.append('photo', values.photo);
    formData.append('blood_group', values.blood_group);

    console.log(values);
    console.log(formData);

    fetch(`http://127.0.0.1:8000/api/admin/${adminId}`, {
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
        values: getAdminInitialValues(response.data?.admin),
      });
      swal('Success', response?.message, "success");
      navigate("/admin");
    })
    .catch((error) => {
      console.error(error);
      setSubmitting(false);
    });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/admin/${adminId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
    .then((response) => response.json())
    .then((response) => {
      console.info(response);
      setAdmin(response.data?.admin);
    })
    .catch((error) => {
      console.error(error);
      setAdmin(null);
    });
  }, [adminId]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          alignItems="center"
          container
          justifyContent="space-between"
        >
          <Grid item>
            <Typography variant="h5">
              Admin Edit
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/admin">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Admin List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 3 }} sx={{ mt: 2 }}>
          <AdminEditForm
            admin={admin}
            onSubmit={handleSubmit}
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default AdminEdit;
