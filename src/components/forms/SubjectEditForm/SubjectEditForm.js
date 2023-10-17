import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import {InputLabel, Select, FormHelperText, MenuItem, FormControl } from '@mui/material';

import getSubjectInitialValues from './getSubjectInitialValues';
import InputField from '../../InputField';

const subjectValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  class_id: Yup.string().required()
});

const ITEM_HEIGHT = 22;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SubjectEditForm = ({ subject, onSubmit }) => {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    console.log({classes});
    fetch(`http://127.0.0.1:8000/api/classes`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
    .then((response) => response.json())
    .then((response) => {
      console.info(response);
      setClasses(response.data?.classes);
    })
    .catch((error) => {
      console.error(error);
      setClasses(null);
    });
  }, []);

  return (subject === undefined || subject !== null) && (
    <Formik
      initialValues={getSubjectInitialValues(subject)}
      onSubmit={onSubmit}
      validationSchema={subjectValidationSchema}
    >
      {({
        handleSubmit, handleChange, values
      }) => (
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <InputField
            label="Name"
            id="name"
            name="name"
            placeholder="Enter name"
            type="text"
          />
          <Grid item >
            <InputLabel>Class</InputLabel>
            <FormControl
              sx ={{
                marginTop: 0,
                width: 250,
                height: 50,
              }}
            >
              <Select
                labelId="simple-select-label"
                name="class_id"
                onChange={handleChange}
                defaultValue={values?.class_id}
                MenuProps={MenuProps}
              >
                {classes ? classes?.map((classItem) => {
                return <MenuItem key={classItem.id} value={classItem.id}>{classItem.name}</MenuItem>;
                })
                : null}
              </Select>
              <FormHelperText>Select a class</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              color="primary"
              onClick={handleSubmit}
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

export default SubjectEditForm;
