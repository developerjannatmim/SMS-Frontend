import { PlusOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MainCard from '../../../components/MainCard';
import GradeTable from '../../../components/tables/GradeTable';

const GradeList = () => {
  const [grade, setGrade] = useState([]);
  const [reload, setReload] = useState(0);

  const handleDelete = grade => {
    if (confirm(`Are you sure you want to delete grade ${grade.id}?`)) {
      fetch(`http://127.0.0.1:8000/api/grade/${grade.id}`, {
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
    fetch('http://127.0.0.1:8000/api/grade?', {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setGrade(response.data?.grade);
      })
      .catch((error) => {
        console.error(error);
        setGrade(null);
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
              Grade List
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/grade/create">
              <Button
                color="primary"
                startIcon={<PlusOutlined />}
                variant="contained"
              >
                Grade
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 1 }} sx={{ mt: 2 }}>
          <GradeTable
            grade={ grade }
            onDelete={ handleDelete }
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default GradeList;
