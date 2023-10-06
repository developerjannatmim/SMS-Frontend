import { Grid, Typography } from '@mui/material';

const ParentDetail = ({ parent }) => {
  return (
    parent && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{parent.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Name
          </Typography>
          <Typography component="dd">{parent.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Email
          </Typography>
          <Typography component="dd">{parent.email}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Gender
          </Typography>
          <Typography component="dd">{parent.gender}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Birthday
          </Typography>
          <Typography component="dd">{parent.birthday}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Address
          </Typography>
          <Typography component="dd">{parent.address}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Phone
          </Typography>
          <Typography component="dd">{parent.phone}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Photo
          </Typography>
          <Typography component="dd">{parent.photo}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Blood Group
          </Typography>
          <Typography component="dd">{parent.blood_group}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default ParentDetail;