import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';

import {InputLabel, Select, FormHelperText, MenuItem, FormControl } from '@mui/material';


import getExaminationCreateInitialValues from './getExaminationCreateInitialValues';
import InputField from '../../InputField';


const examValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  exam_type: Yup.string().required(),
  starting_time: Yup.string().required(),
  ending_time: Yup.string().required(),
  total_marks: Yup.string().required(),
  status: Yup.string().required(),
  class_id: Yup.string().required(),
  section_id: Yup.string().required(),
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

const ExaminationCreateForm = ({ exam, onSubmit }) => {
  const [sections, setSections] = useState('');
  const [classes, setClasses] = useState('');

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

  return (exam === undefined || exam !== null) && (
    <Formik
      initialValues={getExaminationCreateInitialValues(exam)}
      onSubmit={onSubmit}
      validationSchema={examValidationSchema}
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
            />
            <InputField
              label="exam_type"
              id="exam_type"
              name="exam_type"
              placeholder="Enter exam_type"
              type="text"
            />
            <InputField
              label="starting_time"
              id="starting_time"
              name="starting_time"
              placeholder="Enter starting_time"
              type="text"
            />
            <InputField
              label="ending_time"
              id="ending_time"
              name="ending_time"
              placeholder="Enter ending_time"
              type="text"
            />
            <InputField
              label="total_marks"
              id="total_marks"
              name="total_marks"
              placeholder="Enter total_marks"
              type="text"
            />
            <InputField
              label="status"
              id="status"
              name="status"
              placeholder="Enter status"
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
                MenuProps={MenuProps}
                display
                >
                  {classes ? classes?.map((classItem) => {
                    return <MenuItem key={classItem.id} value={classItem.id}>{classItem.name}</MenuItem>;
                  })
                  : null}
                </Select>
                <FormHelperText>Select a class</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item >
              <InputLabel>Sections</InputLabel>
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

export default ExaminationCreateForm;
