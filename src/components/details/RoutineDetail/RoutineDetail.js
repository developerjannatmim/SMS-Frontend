import { Grid, Typography } from '@mui/material';

const RoutineDetail = ({ routine }) => {
  return (
    routine && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{routine?.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Day
          </Typography>
          <Typography component="dd">{routine?.day}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Starting Hour
          </Typography>
          <Typography component="dd">{routine?.starting_hour}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Starting Minute
          </Typography>
          <Typography component="dd">{routine?.starting_minute}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Ending Hour
          </Typography>
          <Typography component="dd">{routine?.ending_hour}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Ending Minute
          </Typography>
          <Typography component="dd">{routine?.ending_minute}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Routine Creator
          </Typography>
          <Typography component="dd">{routine?.creator?.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Class
          </Typography>
          <Typography component="dd">{routine?.class?.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          Subject
          </Typography>
          <Typography component="dd">{routine?.subject?.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          Section
          </Typography>
          <Typography component="dd">{routine?.section?.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          Class Room
          </Typography>
          <Typography component="dd">{routine?.room?.name}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default RoutineDetail;
