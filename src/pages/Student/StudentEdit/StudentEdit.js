import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import StudentForm, { getStudentInitialValues } from '../../../components/forms/StudentForm';
import MainCard from '../../../components/MainCard';

const StudentEdit = () => {
  const { studentId } = useParams();

  const [student, setStudent] = useState(null);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    fetch(`http://127.0.0.1:8000/api/student/${studentId}`, {
      body: JSON.stringify({
        ...values,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSubmitting(false);
        resetForm({
          values: getStudentInitialValues(response.data?.student),
        });
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

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
              Student Edit
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
        <MainCard contentSX={{ p: 3 }} sx={{ mt: 2 }}>
          <StudentForm
            student={student}
            onSubmit={handleSubmit}
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default StudentEdit;
