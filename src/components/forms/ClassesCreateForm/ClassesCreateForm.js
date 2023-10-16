import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import {InputLabel, Select, FormHelperText, MenuItem, FormControl } from '@mui/material';

import getClassesCreateInitialValues from './getClassesCreateInitialValues';
import InputField from '../../InputField';

const classesValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    section_id: Yup.string().required()
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

const ClassesCreateForm = ({ singleClass, onSubmit }) => {
  const [sections, setSections] = useState('');
  useEffect(() => {
    console.log({sections});
    fetch(`http://127.0.0.1:8000/api/sections`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSections(response.data?.section);
      })
      .catch((error) => {
        console.error(error);
        setSections(null);
      });

}, []);

  return (singleClass === undefined || singleClass !== null) && (
      <Formik
          initialValues={getClassesCreateInitialValues(singleClass)}
          onSubmit={onSubmit}
          validationSchema={classesValidationSchema}
      >
      {({
          handleSubmit, handleChange
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
                <InputLabel>Section</InputLabel>
                  <FormControl
                  sx ={{
                      marginTop: 0,
                      width: 250,
                      height: 50,
                  }}
                  >
                  <Select
                  labelId="simple-select-label"
                  name="section_id"
                  onChange={handleChange}
                  MenuProps={MenuProps}
                  display
                  >
                    {sections ? sections?.map((section) => {
                    return <MenuItem key={section.id} value={section.id}>{section.name}</MenuItem>;
                    })
                    : null}
                  </Select>
                  <FormHelperText>Select a section</FormHelperText>
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

export default ClassesCreateForm;
