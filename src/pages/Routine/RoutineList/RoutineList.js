import { PlusOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MainCard from '../../../components/MainCard';
import RoutineTable from '../../../components/tables/RoutineTable';

const RoutineList = () => {
  const [routine, setRoutine] = useState([]);
  const [reload, setReload] = useState(0);

  const handleDelete = routine => {
    if (confirm(`Are you sure you want to delete routine ${routine.id}?`)) {
      fetch(`http://127.0.0.1:8000/api/routine/${routine.id}`, {
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
    fetch('http://127.0.0.1:8000/api/routine?', {
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
              Routine List
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/routine/create">
              <Button
                color="primary"
                startIcon={<PlusOutlined />}
                variant="contained"
              >
                Routine
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 1 }} sx={{ mt: 2 }}>
          <RoutineTable
            routine={ routine }
            onDelete={ handleDelete }
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default RoutineList;
