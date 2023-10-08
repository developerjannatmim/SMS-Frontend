import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import ExaminationForm, { getExaminationInitialValues } from '../../../components/forms/ExaminationForm';
import MainCard from '../../../components/MainCard';

const ExaminationCreate = () => {
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    fetch('http://127.0.0.1:8000/api/exam', {
      body: JSON.stringify({
        ...values
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSubmitting(false);
        resetForm({
          values: getExaminationInitialValues(undefined)
        });
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid alignItems="center" container justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Examination Create</Typography>
          </Grid>
          <Grid item>
            <Link to="/exam">
              <Button color="primary" startIcon={<ArrowLeftOutlined />} variant="contained">
                Examination List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentX={{ p: 3 }} sx={{ mt: 2 }}>
          <ExaminationForm onSubmit={handleSubmit} />
        </MainCard>
      </Grid>
    </Grid>
  );
};
export default ExaminationCreate;