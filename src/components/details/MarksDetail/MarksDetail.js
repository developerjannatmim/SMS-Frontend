import { Grid, Typography } from '@mui/material';

const MarksDetail = ({ marks }) => {
  return (
    marks && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{marks.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            grade_point
          </Typography>
          <Typography component="dd">{marks.grade_point}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            comment
          </Typography>
          <Typography component="dd">{marks.comment}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            user_id
          </Typography>
          <Typography component="dd">{marks.user_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          exam_id
          </Typography>
          <Typography component="dd">{marks.exam_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          class_id
          </Typography>
          <Typography component="dd">{marks.class_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          section_id
          </Typography>
          <Typography component="dd">{marks.section_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          subject_id
          </Typography>
          <Typography component="dd">{marks.subject_id}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default MarksDetail;
