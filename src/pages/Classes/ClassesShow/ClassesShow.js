import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ClassesDetail from '../../../components/details/ClassesDetail';
import MainCard from '../../../components/MainCard';

const ClassesShow = () => {
  const { singleClassId } = useParams();

  const [singleClass, setSingleClass] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classes/${singleClassId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSingleClass(response.data?.classes);
      })
      .catch((error) => {
        console.error(error);
        setSingleClass(null);
      });
  }, [singleClassId]);

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
              Class Detail
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/classes">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Class List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 2 }} sx={{ mt: 2 }}>
          <ClassesDetail singleClass={ singleClass }/>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ClassesShow;
