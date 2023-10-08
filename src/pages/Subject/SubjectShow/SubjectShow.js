import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import SubjectDetail from '../../../components/details/SubjectDetail';
import MainCard from '../../../components/MainCard';

const SubjectShow = () => {
  const { subjectId } = useParams();

  const [subject, setSubject] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/subject/${subjectId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSubject(response.data?.subject);
      })
      .catch((error) => {
        console.error(error);
        setSubject(null);
      });
  }, [subjectId]);

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
              Subject Detail
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/subject">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Subject List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 2 }} sx={{ mt: 2 }}>
          <SubjectDetail subject={subject}/>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default SubjectShow;
