import { Grid, Typography } from '@mui/material';

const TeacherDetail = ({ teacher }) => {
  return (
    teacher && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{teacher.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Name
          </Typography>
          <Typography component="dd">{teacher.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Email
          </Typography>
          <Typography component="dd">{teacher.email}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Gender
          </Typography>
          <Typography component="dd">{teacher.gender}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Birthday
          </Typography>
          <Typography component="dd">{teacher.birthday}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Address
          </Typography>
          <Typography component="dd">{teacher.address}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Phone
          </Typography>
          <Typography component="dd">{teacher.phone}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Photo
          </Typography>
          <Typography component="dd">{teacher.photo}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Blood Group
          </Typography>
          <Typography component="dd">{teacher.blood_group}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default TeacherDetail;