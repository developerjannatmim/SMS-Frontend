import { Grid, Typography } from '@mui/material';

const ClassDetail = ({ class }) => {
  return (
    class && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{class.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Name
          </Typography>
          <Typography component="dd">{class.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Class
          </Typography>
          <Typography component="dd">{class.class}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Section
          </Typography>
          <Typography component="dd">{class.section}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default ClassDetail;
