import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import ExaminationEditForm, { getExaminationInitialValues } from '../../../components/forms/ExaminationEditForm';
import MainCard from '../../../components/MainCard';

const ExaminationEdit = () => {
  const navigate = useNavigate();
  const { examId } = useParams();

  const [exam, setExamination] = useState(null);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    fetch(`http://127.0.0.1:8000/api/exams/${examId}`, {
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
          values: getExaminationInitialValues(response.data?.exam),
        });
        swal('Success', response?.message, "success");
        navigate("/exams");
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/exams/${examId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setExamination(response.data?.exam);
      })
      .catch((error) => {
        console.error(error);
        setExamination(null);
      });
  }, [examId]);

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
              Examination Edit
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/exams">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Examination List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 3 }} sx={{ mt: 2 }}>
          <ExaminationEditForm
            exam={exam}
            onSubmit={handleSubmit}
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ExaminationEdit;
