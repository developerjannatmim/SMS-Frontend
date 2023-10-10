import { PlusOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MainCard from '../../../components/MainCard';
import ParentTable from '../../../components/tables/ParentTable';

const ParentList = () => {
  const [parents, setParents] = useState([]);
  const [reload, setReload] = useState(0);

  const handleDelete = parent => {
    if (confirm(`Are you sure you want to delete parent ${parent.id}?`)) {
      fetch(`http://127.0.0.1:8000/api/parents/${parent.id}`, {
        headers: {
          Accept: 'application/json',
        },
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((response) => {
          console.info(response);
          setReload(value => ++value);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/parents?', {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setParents(response.data?.parent);
      })
      .catch((error) => {
        console.error(error);
        setParents(null);
      });
  }, [reload]);

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
              Parent List
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/parents/create">
              <Button
                color="primary"
                startIcon={<PlusOutlined />}
                variant="contained"
              >
                Parent
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 1 }} sx={{ mt: 2 }}>
          <ParentTable
            parents={ parents }
            onDelete={handleDelete}
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ParentList;
