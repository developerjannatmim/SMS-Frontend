import { PlusOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MainCard from '../../../components/MainCard';
import AdminTable from '../../../components/tables/AdminTable';

const AdminList = () => {
  const [admin, setAdmin] = useState([]);
  const [reload, setReload] = useState(0);

  const handleDelete = admin => {
    if (confirm(`Are you sure you want to delete admin ${admin.id}?`)) {
      fetch(`http://127.0.0.1:8000/api/admin/${admin.id}`, {
        headers: {
          Accept: 'application/json',
        },
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((response) => {
          console.info(response);
          setReload(value => ++value);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/admin', {
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
  }, [reload]);

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
              Admin List
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/admin/create">
              <Button
                color="primary"
                startIcon={<PlusOutlined />}
                variant="contained"
              >
                Admin
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 1 }} sx={{ mt: 2 }}>
          <AdminTable
            admin={ admin }
            onDelete={ handleDelete }
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default AdminList;
