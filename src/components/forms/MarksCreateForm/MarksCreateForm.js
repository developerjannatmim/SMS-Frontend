import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  useEffect,
  useState
} from 'react';
import {
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
  FormControl
} from '@mui/material';

import getMarksCreateInitialValues from './getMarksCreateInitialValues';
import InputField from '../../InputField';

const marksValidationSchema = Yup.object().shape({
  user_id: Yup.string().required(),
  exam_id: Yup.string().required(),
  class_id: Yup.string().required(),
  section_id: Yup.string().required(),
  subject_id: Yup.string().required(),
  marks: Yup.string().required(),
  grade_point: Yup.string().required(),
  comment: Yup.string().required()
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

const MarksCreateForm = ({ marks, onSubmit }) => {
  const [students, setStudents] = useState('');
  const [exams, setExams] = useState('');
  const [sections, setSections] = useState('');
  const [classes, setClasses] = useState('');
  const [subjects, setSubjects] = useState('');

  useEffect(() => {
    console.log({students});
    fetch(`http://127.0.0.1:8000/api/students`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
    .then((response) => response.json())
    .then((response) => {
      console.info(response);
      setStudents(response.data?.students);
    })
    .catch((error) => {
      console.error(error);
      setStudents(null);
    });
  }, []);

  useEffect(() => {
    console.log({exams});
    fetch(`http://127.0.0.1:8000/api/exams`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
    .then((response) => response.json())
    .then((response) => {
      console.info(response);
      setExams(response.data?.exam);
    })
    .catch((error) => {
      console.error(error);
      setExams(null);
    });

  }, []);

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

  return (marks === undefined || marks !== null) && (
    <Formik
      initialValues={getMarksCreateInitialValues(marks)}
      onSubmit={onSubmit}
      validationSchema={marksValidationSchema}
    >
      {({
        handleSubmit, handleChange
      }) => (
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <InputField
            label="marks"
            id="marks"
            name="marks"
            placeholder="Enter marks"
            type="text"
          />
          <InputField
            label="grade_point"
            id="grade_point"
            name="grade_point"
            placeholder="Enter grade_point"
          />
          <Grid item >
            <InputLabel >Student Name</InputLabel>
            <FormControl
              sx ={{
                marginTop: 0,
                width: 250,
                height: 50,
              }}
            >
              <Select
                labelId="simple-select-label"
                name="user_id"
                onChange={handleChange}
                MenuProps={MenuProps}
                display
              >
                {students ? students?.map((student) => {
                return <MenuItem key={student.id} value={student.id}>{student.name}</MenuItem>;
                })
                : null}
              </Select>
              <FormHelperText>Select a student</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item style={{ marginLeft: '140px' }}>
            <InputLabel sx={{ mx: 12.5 }}>Exam</InputLabel>
            <FormControl
              sx ={{
                marginTop: 0,
                width: 250,
                height: 50,
                marginLeft: 12.5,
              }}
            >
              <Select
                labelId="simple-select-label"
                name="exam_id"
                onChange={handleChange}
                MenuProps={MenuProps}
                display
              >
                {exams ? exams?.map((exam) => {
                return <MenuItem key={exam.id} value={exam.id}>{exam.name}</MenuItem>;
                })
                : null}
              </Select>
              <FormHelperText>Select a exam</FormHelperText>
            </FormControl>
          </Grid>

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

          <Grid item style={{ marginLeft: '140px' }}>
            <InputLabel sx={{ mx: 12.5 }}>Class</InputLabel>
              <FormControl
              sx ={{
                marginTop: 0,
                width: 250,
                height: 50,
                marginLeft: 12.5,
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
                MenuProps={MenuProps}
                display
              >
                {subjects ? subjects?.map((subject) => {
                return <MenuItem key={subject.id} value={subject.id}>{subject.name}</MenuItem>;
                })
                : null}
              </Select>
              <FormHelperText>Select a subject</FormHelperText>
            </FormControl>
          </Grid>
          <InputField
            style={{ marginLeft: '240px', marginTop: '20px' }}
            label="comment"
            id="comment"
            name="comment"
            placeholder="Enter comment"
          />

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

export default MarksCreateForm;
