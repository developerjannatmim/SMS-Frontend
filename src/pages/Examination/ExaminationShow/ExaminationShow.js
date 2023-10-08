import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ExaminationDetail from '../../../components/details/ExaminationDetail';
import MainCard from '../../../components/MainCard';

const ExaminationShow = () => {
  const { examId } = useParams();

  const [exam, setExamination] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/exam/${examId}`, {
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
              Examination Detail
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/exam">
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
        <MainCard contentSX={{ p: 2 }} sx={{ mt: 2 }}>
          <ExaminationDetail exam={exam}/>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ExaminationShow;
