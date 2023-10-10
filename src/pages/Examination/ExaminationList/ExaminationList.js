import { PlusOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MainCard from '../../../components/MainCard';
import ExaminationTable from '../../../components/tables/ExaminationTable';

const ExaminationList = () => {
  const [exams, setExaminations] = useState([]);
  const [reload, setReload] = useState(0);

  const handleDelete = exam => {
    if (confirm(`Are you sure you want to delete exam ${exam.id}?`)) {
      fetch(`http://127.0.0.1:8000/api/exams/${exam.id}`, {
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
    fetch('http://127.0.0.1:8000/api/exams?', {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setExaminations(response.data?.exam);
      })
      .catch((error) => {
        console.error(error);
        setExaminations(null);
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
              Examination List
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/exams/create">
              <Button
                color="primary"
                startIcon={<PlusOutlined />}
                variant="contained"
              >
                Examination
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 1 }} sx={{ mt: 2 }}>
          <ExaminationTable
            exams={ exams }
            onDelete={ handleDelete }
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ExaminationList;
