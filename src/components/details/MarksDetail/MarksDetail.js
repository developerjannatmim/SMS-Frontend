import { Grid, Typography } from '@mui/material';

const MarksDetail = ({ mark }) => {
  return (
    mark && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{mark?.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Grade Point
          </Typography>
          <Typography component="dd">{mark?.grade_point}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Comment
          </Typography>
          <Typography component="dd">{mark?.comment}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Student Name
          </Typography>
          <Typography component="dd">{mark?.user?.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          Exam
          </Typography>
          <Typography component="dd">{mark?.exam?.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          Class
          </Typography>
          <Typography component="dd">{mark?.class?.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          Section
          </Typography>
          <Typography component="dd">{mark?.section?.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          Subject
          </Typography>
          <Typography component="dd">{mark?.subject?.name}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default MarksDetail;
