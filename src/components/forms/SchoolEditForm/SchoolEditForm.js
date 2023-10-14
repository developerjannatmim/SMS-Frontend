import { Button, Grid, InputLabel } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as React from 'react';
import Radio from '@mui/material/Radio';

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
  const [selected, setSelected] = React.useState("1");

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

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
        <form noValidate onSubmit={handleSubmit}>
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
            <InputLabel sx={{ my: 3, mx: 4, display: 'block' }}>Active
            <Radio
              type="radio"
              id= "1"
              name="status"
              value= "1"
              checked={ selected === "1" }
              onChange={handleChange}
              color="primary"
            />
            </InputLabel>
            {/* 
            <InputLabel sx={{ my: 3, mx: 4, display: 'block' }}>Active
            <Radio
              type="radio"
              id= "2"
              name="status"
              value= "2"
              checked={ selected === "2" }
              onChange={handleChange}
              color="success"
            />
            </InputLabel> */}
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
        </form>
      )}
    </Formik>
  )
}

export default SchoolEditForm;
