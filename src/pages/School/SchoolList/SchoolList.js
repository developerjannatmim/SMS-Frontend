import { PlusOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MainCard from '../../../components/MainCard';
import SchoolTable from '../../../components/tables/SchoolTable';

const SchoolList = () => {
  const [schools, setSchools] = useState([]);
  const [reload, setReload] = useState(0);

  const handleDelete = school => {
    if (confirm(`Are you sure you want to delete school ${school.id}?`)) {
      fetch(`http://127.0.0.1:8000/api/schools/${school.id}`, {
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
    fetch('http://127.0.0.1:8000/api/schools?', {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSchools(response.data?.school);
      })
      .catch((error) => {
        console.error(error);
        setSchools(null);
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
              School List
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/schools/create">
              <Button
                color="primary"
                startIcon={<PlusOutlined />}
                variant="contained"
              >
                School
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 1 }} sx={{ mt: 2 }}>
          <SchoolTable
            schools={ schools }
            onDelete={ handleDelete }
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default SchoolList;
