import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import RoutineDetail from '../../../components/details/RoutineDetail';
import MainCard from '../../../components/MainCard';

const RoutineShow = () => {
  const { routineId } = useParams();

  const [routine, setRoutine] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/routine/${routineId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setRoutine(response.data?.routine);
      })
      .catch((error) => {
        console.error(error);
        setRoutine(null);
      });
  }, [routineId]);

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
              Routine Detail
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/routine">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Routine List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 2 }} sx={{ mt: 2 }}>
          <RoutineDetail routine={routine}/>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default RoutineShow;
