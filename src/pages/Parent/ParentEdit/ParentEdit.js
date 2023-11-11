import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import ParentEditForm, { getParentInitialValues } from '../../../components/forms/ParentEditForm';
import MainCard from '../../../components/MainCard';

const ParentEdit = () => {
  const navigate = useNavigate();
  const { parentId } = useParams();

  const [parent, setParent] = useState(null);

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
    fetch(`http://127.0.0.1:8000/api/parents/${parentId}`, {
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
          values: getParentInitialValues(response.data?.parent),
        });
        swal('Success', response?.message, "success");
        navigate("/parents");
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/parents/${parentId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setParent(response.data?.parent);
      })
      .catch((error) => {
        console.error(error);
        setParent(null);
      });
  }, [parentId]);

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
              Parent Edit
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/parents">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Parent List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 3 }} sx={{ mt: 2 }}>
          <ParentEditForm
            parent={parent}
            onSubmit={handleSubmit}
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ParentEdit;
