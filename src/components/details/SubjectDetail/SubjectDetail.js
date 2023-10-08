import { Grid, Typography } from '@mui/material';

const SubjectDetail = ({ subject }) => {
  return (
    subject && (
      <Grid component="dl" contianer flexDirection="column" spacing={2}>
        <Grid item>
          <Typography component="dt" variant="h5">
            ID
          </Typography>
          <Typography component="dd">{subject.id}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
            Name
          </Typography>
          <Typography component="dd">{subject.name}</Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="h5">
          Class
          </Typography>
          <Typography component="dd">{subject.class_id}</Typography>
        </Grid>
      </Grid>
    )
  );
};

export default SubjectDetail;
