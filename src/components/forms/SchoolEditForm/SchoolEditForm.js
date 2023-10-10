import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

import getSchoolInitialValues from './getSchoolInitialValues';
import InputField from '../../InputField';

const schoolValidationSchema = Yup.object().shape({
  title: Yup.string().required(),
  email: Yup.string().required(),
  phone: Yup.string().required(),
  address: Yup.string().required(),
  school_info: Yup.string().required(),
  status: Yup.string().required()
});

const SchoolEditForm = ({ school, onSubmit }) => {
  return (school === undefined || school !== null) && (
    <Formik
      initialValues={getSchoolInitialValues(school)}
      onSubmit={onSubmit}
      validationSchema={schoolValidationSchema}
    >
      {({
        handleSubmit,
        isSubmitting,
      }) => (
        <from noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <InputField
              label="title"
              id="title"
              name="title"
              placeholder="Enter title"
              type="text"
            />
            <InputField
              label="email"
              id="email"
              name="email"
              placeholder="Enter email"
              type="text"
            />
            <InputField
              label="phone"
              id="phone"
              name="phone"
              placeholder="Enter phone"
              type="text"
            />
            <InputField
              label="address"
              id="address"
              name="address"
              placeholder="Enter address"
              type="text"
            />
            <InputField
              label="school_info"
              id="school_info"
              name="school_info"
              placeholder="Enter school_info"
              type="text"
            />
            <InputField
              label="status"
              id="status"
              name="status"
              placeholder="Enter status"
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

export default SchoolEditForm;
