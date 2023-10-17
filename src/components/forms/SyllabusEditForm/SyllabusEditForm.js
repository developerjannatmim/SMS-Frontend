import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import {InputLabel, Select, FormHelperText, MenuItem, FormControl } from '@mui/material';

import getSyllabusInitialValues from './getSyllabusInitialValues';
import InputField from '../../InputField';

const syllabusValidationSchema = Yup.object().shape({
  title: Yup.string().required(),
  class_id: Yup.string().required(),
  section_id: Yup.string().required(),
  subject_id: Yup.string().required(),
  file: Yup.string().required()
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

const SyllabusEditForm = ({ syllabus, onSubmit }) => {
  const [sections, setSections] = useState('');
  const [classes, setClasses] = useState('');
  const [subjects, setSubjects] = useState('');

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

  useEffect(() => {
    console.log({subjects});
    fetch(`http://127.0.0.1:8000/api/subjects`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
    .then((response) => response.json())
    .then((response) => {
      console.info(response);
      setSubjects(response.data?.subject);
    })
    .catch((error) => {
      console.error(error);
      setSubjects(null);
    });

  }, []);

  return (syllabus === undefined || syllabus !== null) && (
    <Formik
      initialValues={getSyllabusInitialValues(syllabus)}
      onSubmit={onSubmit}
      validationSchema={syllabusValidationSchema}
    >
      {({
        handleSubmit,
        handleChange,
        values
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
            label="file"
            id="file"
            name="file"
            placeholder="Enter file"
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
                defaultValue={values?.section_id}
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

          <Grid item >
            <InputLabel>Subject</InputLabel>
            <FormControl
              sx ={{
                marginTop: 0,
                width: 250,
                height: 50,
              }}
            >
              <Select
                labelId="simple-select-label"
                name="subject_id"
                onChange={handleChange}
                defaultValue={values?.subject_id ? values?.subject_id : ''}
                MenuProps={MenuProps}
              >
                {subjects ? subjects?.map((subject) => {
                return <MenuItem key={subject.id} value={subject.id}>{subject.name}</MenuItem>;
                })
                : null}
              </Select>
              <FormHelperText>Select a subject</FormHelperText>
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

export default SyllabusEditForm;
