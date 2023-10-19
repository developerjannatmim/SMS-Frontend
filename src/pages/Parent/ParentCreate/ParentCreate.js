import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import ParentCreateForm, { getParentCreateInitialValues } from '../../../components/forms/ParentCreateForm';
import MainCard from '../../../components/MainCard';

const ParentCreate = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    fetch('http://127.0.0.1:8000/api/parents', {
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
          values: getParentCreateInitialValues(undefined)
        });
        swal('Success', response?.message, "success");
        navigate("/parents");
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
            <Typography variant="h5">Parent Create</Typography>
          </Grid>
          <Grid item>
            <Link to="/parents">
              <Button color="primary" startIcon={<ArrowLeftOutlined />} variant="contained">
                Parent List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 3 }} sx={{ mt: 2 }}>
          <ParentCreateForm onSubmit={handleSubmit} />
        </MainCard>
      </Grid>
    </Grid>
  );
};
export default ParentCreate;
