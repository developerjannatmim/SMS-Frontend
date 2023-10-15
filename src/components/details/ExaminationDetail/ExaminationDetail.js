import { Grid, Typography } from '@mui/material';

const ExaminationDetail = ({ exam }) => {
  return (
    exam && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{exam?.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Name
          </Typography>
          <Typography component="dd">{exam?.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Exam Type
          </Typography>
          <Typography component="dd">{exam?.exam_type}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Starting Time
          </Typography>
          <Typography component="dd">{exam?.starting_time}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Ending Time
          </Typography>
          <Typography component="dd">{exam?.ending_time}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Total Marks
          </Typography>
          <Typography component="dd">{exam?.total_marks}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Status
          </Typography>
          <Typography component="dd">{exam?.status}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Class
          </Typography>
          <Typography component="dd">{exam?.class?.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Section
          </Typography>
          <Typography component="dd">{exam?.section?.name}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default ExaminationDetail;
