import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import GradeDetail from '../../../components/details/GradeDetail';
import MainCard from '../../../components/MainCard';

const GradeShow = () => {
  const { gradeId } = useParams();

  const [grade, setGrade] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/grade/${gradeId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setGrade(response.data?.grade);
      })
      .catch((error) => {
        console.error(error);
        setGrade(null);
      });
  }, [gradeId]);

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
              Grade Detail
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/grade">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Grade List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 2 }} sx={{ mt: 2 }}>
          <GradeDetail grade={grade}/>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default GradeShow;
