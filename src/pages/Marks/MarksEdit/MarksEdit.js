import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import MarksForm, { getMarksInitialValues } from '../../../components/forms/MarksForm';
import MainCard from '../../../components/MainCard';

const MarksEdit = () => {
  const { marksId } = useParams();

  const [marks, setMarks] = useState(null);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    fetch(`http://127.0.0.1:8000/api/marks/${marksId}`, {
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
          values: getMarksInitialValues(response.data?.marks),
        });
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/marks/${marksId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setMarks(response.data?.marks);
      })
      .catch((error) => {
        console.error(error);
        setMarks(null);
      });
  }, [marksId]);

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
              Marks Edit
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/marks">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Marks List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 3 }} sx={{ mt: 2 }}>
          <MarksForm
            marks={marks}
            onSubmit={handleSubmit}
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default MarksEdit;
