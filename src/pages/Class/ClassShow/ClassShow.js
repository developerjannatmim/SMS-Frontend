import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ClassesDetail from '../../../components/details/ClassesDetail';
import MainCard from '../../../components/MainCard';

const ClassesShow = () => {
  const { classesId } = useParams();

  const [classes, setClasses] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classes/${classesId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setClasses(response.data?.classes);
      })
      .catch((error) => {
        console.error(error);
        setClasses(null);
      });
  }, [classesId]);

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
              Classes Detail
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/classes">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Classes List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 2 }} sx={{ mt: 2 }}>
          <ClassesDetail classes={classes}/>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ClassesShow;
