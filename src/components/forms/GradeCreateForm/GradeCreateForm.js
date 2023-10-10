import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

import getGradeCreateInitialValues from './getGradeCreateInitialValues';
import InputField from '../../InputField';

const gradeValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    grade_point: Yup.string().required(),
    mark_from: Yup.string().required(),
    mark_upto: Yup.string().required()
});

const GradeCreateForm = ({ grade, onSubmit }) => {
    return (grade === undefined || grade !== null) && (
        <Formik
          initialValues={getGradeCreateInitialValues(grade)}
          onSubmit={onSubmit}
          validationSchema={gradeValidationSchema}
        >
        {({
          handleSubmit,
          isSubmitting,
        }) => (
          <from noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <InputField
                label="Name"
                id="name"
                name="name"
                placeholder="Enter name"
              />
              <InputField
                label="grade_point"
                id="grade_point"
                name="grade_point"
                placeholder="Enter grade_point"
                type="text"
              />
              <InputField
                label="mark_from"
                id="mark_from"
                name="mark_from"
                placeholder="Enter mark_from"
                type="text"
              />
              <InputField
                label="mark_upto"
                id="mark_upto"
                name="mark_upto"
                placeholder="Enter mark_upto"
                type="text"
              />
              <Grid item xs={12}>
                <Button
                  color="primary"
                  enabled={isSubmitting}
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
        </from>
        )}
        </Formik>
    )
}
export default GradeCreateForm;