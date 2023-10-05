import { ArrowLeftOutlined as ArrowLeftOutlinedIcon } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import AdminDetail from '../../../components/details/AdminDetail/AdminDetail';
import MainCard from '../../../components/MainCard';

const AdminShow = () => {
  const { adminId } = useParams();

  const [admin, setAdmin] = useState(null);

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
              Admin Detail
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
        <MainCard contentSX={{ p: 2 }} sx={{ mt: 2 }}>
          <AdminDetail admin={admin}/>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default AdminShow;
