import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import StudentDetail from '../../../components/details/StudentDetail';
import MainCard from '../../../components/MainCard';

const StudentShow = () => {
  const { studentId } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/student/${studentId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setStudent(response.data?.student);
      })
      .catch((error) => {
        console.error(error);
        setStudent(null);
      });
  }, [studentId]);

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
              Student Detail
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/student">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Student List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 2 }} sx={{ mt: 2 }}>
          <StudentDetail student={student}/>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default StudentShow;
