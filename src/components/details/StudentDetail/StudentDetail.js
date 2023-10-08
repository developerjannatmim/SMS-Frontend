import { Grid, Typography } from '@mui/material';

const StudentDetail = ({ student }) => {
  return (
    student && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{student.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Name
          </Typography>
          <Typography component="dd">{student.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Email
          </Typography>
          <Typography component="dd">{student.email}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Gender
          </Typography>
          <Typography component="dd">{student.gender}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Birthday
          </Typography>
          <Typography component="dd">{student.birthday}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Address
          </Typography>
          <Typography component="dd">{student.address}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Phone
          </Typography>
          <Typography component="dd">{student.phone}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Photo
          </Typography>
          <Typography component="dd">{student.photo}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Blood Group
          </Typography>
          <Typography component="dd">{student.blood_group}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default StudentDetail;