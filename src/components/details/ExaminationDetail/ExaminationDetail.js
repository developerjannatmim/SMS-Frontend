import { Grid, Typography } from '@mui/material';

const ExaminationDetail = ({ exam }) => {
  return (
    exam && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{exam.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Name
          </Typography>
          <Typography component="dd">{exam.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            exam_type
          </Typography>
          <Typography component="dd">{exam.exam_type}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            starting_time
          </Typography>
          <Typography component="dd">{exam.starting_time}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            ending_time
          </Typography>
          <Typography component="dd">{exam.ending_time}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            total_marks
          </Typography>
          <Typography component="dd">{exam.total_marks}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            status
          </Typography>
          <Typography component="dd">{exam.status}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            class_id
          </Typography>
          <Typography component="dd">{exam.class_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            section_id
          </Typography>
          <Typography component="dd">{exam.section_id}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default ExaminationDetail;
