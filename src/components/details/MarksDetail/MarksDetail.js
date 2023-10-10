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
            grade_point
          </Typography>
          <Typography component="dd">{mark?.grade_point}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            comment
          </Typography>
          <Typography component="dd">{mark?.comment}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            user_id
          </Typography>
          <Typography component="dd">{mark?.user_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          exam_id
          </Typography>
          <Typography component="dd">{mark?.exam_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          class_id
          </Typography>
          <Typography component="dd">{mark?.class_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          section_id
          </Typography>
          <Typography component="dd">{mark?.section_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          subject_id
          </Typography>
          <Typography component="dd">{mark?.subject_id}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default MarksDetail;
