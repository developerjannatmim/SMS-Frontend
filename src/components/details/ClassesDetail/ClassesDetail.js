import { Grid, Typography } from '@mui/material';

const ClassesDetail = ({ singleClass }) => {
  return (
    singleClass && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{singleClass?.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Name
          </Typography>
          <Typography component="dd">{singleClass?.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Section
          </Typography>
          <Typography component="dd">{singleClass?.section?.name}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default ClassesDetail;
