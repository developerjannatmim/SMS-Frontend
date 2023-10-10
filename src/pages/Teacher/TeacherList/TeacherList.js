import { PlusOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MainCard from '../../../components/MainCard';
import TeacherTable from '../../../components/tables/TeacherTable';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [reload, setReload] = useState(0);

  const handleDelete = teacher => {
    if (confirm(`Are you sure you want to delete teacher ${teacher.id}?`)) {
      fetch(`http://127.0.0.1:8000/api/teachers/${teacher.id}`, {
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
    fetch('http://127.0.0.1:8000/api/teachers?', {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setTeachers(response.data?.teacher);
      })
      .catch((error) => {
        console.error(error);
        setTeachers(null);
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
              Teacher List
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/teachers/create">
              <Button
                color="primary"
                startIcon={<PlusOutlined />}
                variant="contained"
              >
                Teacher
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 1 }} sx={{ mt: 2 }}>
          <TeacherTable
            teachers={ teachers }
            onDelete={ handleDelete }
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default TeacherList;
