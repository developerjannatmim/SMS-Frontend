import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import SubjectForm, { getSubjectInitialValues } from '../../../components/forms/SubjectForm';
import MainCard from '../../../components/MainCard';

const SubjectCreate = () => {
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    fetch('http://127.0.0.1:8000/api/subject', {
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
          values: getSubjectInitialValues(undefined)
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
            <Typography variant="h5">Subject Create</Typography>
          </Grid>
          <Grid item>
            <Link to="/subject">
              <Button color="primary" startIcon={<ArrowLeftOutlined />} variant="contained">
                Subject List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentX={{ p: 3 }} sx={{ mt: 2 }}>
          <SubjectForm onSubmit={handleSubmit} />
        </MainCard>
      </Grid>
    </Grid>
  );
};
export default SubjectCreate;