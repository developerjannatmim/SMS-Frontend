import { Grid, Typography } from '@mui/material';

const RoutineDetail = ({ routine }) => {
  return (
    routine && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{routine.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            day
          </Typography>
          <Typography component="dd">{routine.day}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            starting_hour
          </Typography>
          <Typography component="dd">{routine.starting_hour}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            starting_minute
          </Typography>
          <Typography component="dd">{routine.starting_minute}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            ending_hour
          </Typography>
          <Typography component="dd">{routine.ending_hour}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            ending_minute
          </Typography>
          <Typography component="dd">{routine.ending_minute}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            routine_creator
          </Typography>
          <Typography component="dd">{routine.routine_creator}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            class_id
          </Typography>
          <Typography component="dd">{routine.class_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          subject_id
          </Typography>
          <Typography component="dd">{routine.subject_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          section_id
          </Typography>
          <Typography component="dd">{routine.section_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          room_id
          </Typography>
          <Typography component="dd">{routine.room_id}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default RoutineDetail;
