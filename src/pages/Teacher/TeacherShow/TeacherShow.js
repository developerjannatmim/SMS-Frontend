import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import TeacherDetail from '../../../components/details/TeacherDetail';
import MainCard from '../../../components/MainCard';

const TeacherShow = () => {
  const { teacherId } = useParams();

  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/teacher/${teacherId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setTeacher(response.data?.teacher);
      })
      .catch((error) => {
        console.error(error);
        setTeacher(null);
      });
  }, [teacherId]);

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
              Teacher Detail
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/teacher">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Teacher List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 2 }} sx={{ mt: 2 }}>
          <TeacherDetail teacher={teacher}/>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default TeacherShow;
