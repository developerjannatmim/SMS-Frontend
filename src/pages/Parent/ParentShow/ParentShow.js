import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ParentDetail from '../../../components/details/ParentDetail';
import MainCard from '../../../components/MainCard';

const ParentShow = () => {
  const { parentId } = useParams();

  const [parent, setParent] = useState(null);

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
              Parent Detail
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
        <MainCard contentSX={{ p: 2 }} sx={{ mt: 2 }}>
          <ParentDetail parent={parent}/>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ParentShow;
