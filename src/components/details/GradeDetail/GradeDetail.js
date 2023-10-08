import { Grid, Typography } from '@mui/material';

const GradeDetail = ({ grade }) => {
  return (
    grade && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{grade.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Name
          </Typography>
          <Typography component="dd">{grade.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            grade_point
          </Typography>
          <Typography component="dd">{grade.grade_point}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            mark_from
          </Typography>
          <Typography component="dd">{grade.mark_from}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            mark_upto
          </Typography>
          <Typography component="dd">{grade.mark_upto}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default GradeDetail;
