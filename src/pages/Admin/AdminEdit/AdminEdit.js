import { ArrowLeftOutlined as ArrowLeftOutlinedIcon } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import AdminForm, { getAdminInitialValues } from '../../../components/forms/AdminForm';
import MainCard from '../../../components/MainCard';

const AdminEdit = () => {
  const { adminId } = useParams();

  const [admin, setAdmin] = useState(null);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    fetch(``, {
      body: JSON.stringify({
        ...values,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSubmitting(false);
        resetForm({
          values: getAdminInitialValues(response.data?.admin),
        });
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

  useEffect(() => {
    fetch(``, {
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
                startIcon={<ArrowLeftOutlinedIcon />}
                variant="contained"
              >
                Admin List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 3 }} sx={{ mt: 2 }}>
          <AdminForm
            address={admin}
            onSubmit={handleSubmit}
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default AdminEdit;
