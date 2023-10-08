import { Grid, Typography } from '@mui/material';

const ClassesDetail = ({ classes }) => {
  return (
    classes && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{classes.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Name
          </Typography>
          <Typography component="dd">{classes.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Class
          </Typography>
          <Typography component="dd">{classes.classes}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Section
          </Typography>
          <Typography component="dd">{classes.section}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default ClassesDetail;
