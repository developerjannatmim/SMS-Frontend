import { Grid, Typography } from '@mui/material';

const SyllabusDetail = ({ syllabus }) => {
  return (
    syllabus && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{syllabus?.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            title
          </Typography>
          <Typography component="dd">{syllabus?.title}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            file
          </Typography>
          <Typography component="dd">{syllabus?.file}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            class_id
          </Typography>
          <Typography component="dd">{syllabus?.class_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            subject_id
          </Typography>
          <Typography component="dd">{syllabus?.subject_id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            section_id
          </Typography>
          <Typography component="dd">{syllabus?.section_id}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default SyllabusDetail;
