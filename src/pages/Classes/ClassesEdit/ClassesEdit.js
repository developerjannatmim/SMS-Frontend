import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ClassesForm, { getClassesInitialValues } from '../../../components/forms/ClassesForm';
import MainCard from '../../../components/MainCard';

const ClassesEdit = () => {
  const { classesId } = useParams();

  const [classes, setClasses] = useState(null);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    fetch(`http://127.0.0.1:8000/api/classes/${classesId}`, {
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
          values: getClassesInitialValues(response.data?.classes),
        });
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classes/${classesId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setClasses(response.data?.classes);
      })
      .catch((error) => {
        console.error(error);
        setClasses(null);
      });
  }, [classesId]);

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
              Classes Edit
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/classes">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Classes List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 3 }} sx={{ mt: 2 }}>
          <ClassesForm
            classes={classes}
            onSubmit={handleSubmit}
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ClassesEdit;
