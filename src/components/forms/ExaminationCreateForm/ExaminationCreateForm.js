import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as React from 'react';

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
  const [sections, setSections] = React.useState(null);

  React.useEffect(() => {
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
              label="starting_date"
              id="starting_date"
              name="starting_date"
              placeholder="Enter starting_date"
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
              label="ending_date"
              id="ending_date"
              name="ending_date"
              placeholder="Enter ending_date"
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
            <InputField
              label="class_id"
              id="class_id"
              name="class_id"
              placeholder="Enter class_id"
              type="text"
            />
            {/* <InputField
              label="section_id"
              id="section_id"
              name="section_id"
              placeholder="Enter section_id"
              type="text"
            /> */}

            <Grid item >
              <InputLabel>Sections</InputLabel>
                <FormControl
                  sx ={{
                    marginTop: 0,
                    width: 250,
                    height: 50,
                  }}
                >
                  {/* <InputLabel id="simple-select-label">Blood Group</InputLabel> */}
                  <Select
                  labelId="simple-select-label"
                  name="section_id"
                  onChange={handleChange}
                  MenuProps={MenuProps}
                  display
                  >
                    {sections ? sections?.map((section) => {
                      return <MenuItem key={section.id} value={section.name}>{section.name}</MenuItem>;
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
