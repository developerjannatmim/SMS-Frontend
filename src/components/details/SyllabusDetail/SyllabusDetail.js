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
            Title
          </Typography>
          <Typography component="dd">{syllabus?.title}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Syllabus Image
          </Typography>
          <Typography component="dd">{syllabus?.file}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Class
          </Typography>
          <Typography component="dd">{syllabus?.class?.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Subject
          </Typography>
          <Typography component="dd">{syllabus?.subject?.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Section
          </Typography>
          <Typography component="dd">{syllabus?.section?.name}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default SyllabusDetail;
