import { Grid, Typography } from '@mui/material';

const AdminDetail = ({ admin }) => {
  return (
    admin && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{admin.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Name
          </Typography>
          <Typography component="dd">{admin.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Email
          </Typography>
          <Typography component="dd">{admin.email}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Gender
          </Typography>
          <Typography component="dd">{admin.gender}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Birthday
          </Typography>
          <Typography component="dd">{admin.birthday}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Address
          </Typography>
          <Typography component="dd">{admin.address}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Phone
          </Typography>
          <Typography component="dd">{admin.phone}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Photo
          </Typography>
          <Typography component="dd">{admin.photo}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Blood Group
          </Typography>
          <Typography component="dd">{admin.blood_group}</Typography>
        </Grid>
      </Grid>
    )
  );
};
