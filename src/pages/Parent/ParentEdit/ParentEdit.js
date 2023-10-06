import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ParentForm, { getParentInitialValues } from '../../../components/forms/ParentForm';
import MainCard from '../../../components/MainCard';

const ParentEdit = () => {
  const { parentId } = useParams();

  const [parent, setParent] = useState(null);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    fetch(`http://127.0.0.1:8000/api/parent/${parentId}`, {
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
          values: getParentInitialValues(response.data?.parent),
        });
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/parent/${parentId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setParent(response.data?.parent);
      })
      .catch((error) => {
        console.error(error);
        setParent(null);
      });
  }, [parentId]);

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
              Parent Edit
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/parent">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Parent List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 3 }} sx={{ mt: 2 }}>
          <ParentForm
            parent={parent}
            onSubmit={handleSubmit}
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ParentEdit;
