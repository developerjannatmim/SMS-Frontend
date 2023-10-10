import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import SyllabusDetail from '../../../components/details/SyllabusDetail';
import MainCard from '../../../components/MainCard';

const SyllabusShow = () => {
  const { syllabusId } = useParams();

  const [syllabus, setSyllabus] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/syllabuses/${syllabusId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSyllabus(response.data?.syllabus);
      })
      .catch((error) => {
        console.error(error);
        setSyllabus(null);
      });
  }, [syllabusId]);

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
              Syllabus Detail
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/syllabuses">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Syllabus List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 2 }} sx={{ mt: 2 }}>
          <SyllabusDetail syllabus={syllabus}/>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default SyllabusShow;
