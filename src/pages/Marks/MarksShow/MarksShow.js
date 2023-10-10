import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import MarksDetail from '../../../components/details/MarksDetail';
import MainCard from '../../../components/MainCard';

const MarksShow = () => {
  const { markId } = useParams();

  const [mark, setMark] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/marks/${markId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setMark(response.data?.mark);
      })
      .catch((error) => {
        console.error(error);
        setMark(null);
      });
  }, [markId]);

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
              Marks Detail
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
        <MainCard contentSX={{ p: 2 }} sx={{ mt: 2 }}>
          <MarksDetail mark={mark}/>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default MarksShow;
