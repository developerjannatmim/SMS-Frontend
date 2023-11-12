import { Grid, Typography } from '@mui/material';
import { Image } from 'mui-image';

const StudentDetail = ({ student }) => {
  let userInformation;
  try {
    userInformation = JSON.parse(student.user_information);
  } catch (error) { /**/ }
  return (
    student && (
      <Grid component="dl" container flexDirection="column" spacing={2}>
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
          <Typography component="dd">{userInformation?.gender}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Birthday
          </Typography>
          <Typography component="dd">{userInformation?.birthday}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Address
          </Typography>
          <Typography component="dd">{userInformation?.address}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Phone
          </Typography>
          <Typography component="dd">{userInformation?.phone}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Photo
          </Typography>
          <Typography component="dd">
            <Image
              src={`http://127.0.0.1:8000/student-images/${userInformation?.photo}`}
              width="50px"
              alt={student?.name}
            />
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Blood Group
          </Typography>
          <Typography component="dd">{userInformation?.blood_group}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default StudentDetail;