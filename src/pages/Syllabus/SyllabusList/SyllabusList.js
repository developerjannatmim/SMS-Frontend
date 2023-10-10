import { PlusOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MainCard from '../../../components/MainCard';
import SyllabusTable from '../../../components/tables/SyllabusTable';

const SyllabusList = () => {
  const [syllabuses, setSyllabuses] = useState([]);
  const [reload, setReload] = useState(0);

  const handleDelete = syllabus => {
    if (confirm(`Are you sure you want to delete syllabus ${syllabus.id}?`)) {
      fetch(`http://127.0.0.1:8000/api/syllabuses/${syllabus.id}`, {
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
    fetch('http://127.0.0.1:8000/api/syllabuses?', {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSyllabuses(response.data?.syllabus);
      })
      .catch((error) => {
        console.error(error);
        setSyllabuses(null);
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
              Syllabus List
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/syllabuses/create">
              <Button
                color="primary"
                startIcon={<PlusOutlined />}
                variant="contained"
              >
                Syllabus
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 1 }} sx={{ mt: 2 }}>
          <SyllabusTable
            syllabuses={ syllabuses }
            onDelete={ handleDelete }
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default SyllabusList;
