import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import {InputLabel, Select, FormHelperText, MenuItem, FormControl } from '@mui/material';

import getRoutineInitialValues from './getRoutineInitialValues';
import InputField from '../../InputField';

const routineValidationSchema = Yup.object().shape({
    class_id: Yup.string().required(),
    section_id: Yup.string().required(),
    routine_creator: Yup.string().required(),
    subject_id: Yup.string().required(),
    room_id: Yup.string().required(),
    starting_hour: Yup.string().required(),
    ending_hour: Yup.string().required(),
    starting_minute: Yup.string().required(),
    ending_minute: Yup.string().required(),
    day: Yup.string().required()
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

const RoutineEditForm = ({ routine, onSubmit }) => {
    const [teachers, setTeachers] = useState('');
    const [classRooms, setClassRooms] = useState('');
    const [sections, setSections] = useState('');
    const [classes, setClasses] = useState('');
    const [subjects, setSubjects] = useState('');

    useEffect(() => {
      console.log({teachers});
      fetch(`http://127.0.0.1:8000/api/teachers`, {
        headers: {
          Accept: 'application/json',
        },
        method: 'GET',
      })
        .then((response) => response.json())
        .then((response) => {
          console.info(response);
          setTeachers(response.data?.teacher);
        })
        .catch((error) => {
          console.error(error);
          setTeachers(null);
        });

    }, []);

    useEffect(() => {
      console.log({classRooms});
      fetch(`http://127.0.0.1:8000/api/classRooms`, {
        headers: {
          Accept: 'application/json',
        },
        method: 'GET',
      })
        .then((response) => response.json())
        .then((response) => {
          console.info(response);
          setClassRooms(response.data?.classRoom);
        })
        .catch((error) => {
          console.error(error);
          setClassRooms(null);
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

  return (routine === undefined || routine !== null) && (
    <Formik
      initialValues={getRoutineInitialValues(routine)}
      onSubmit={onSubmit}
      validationSchema={routineValidationSchema}
    >
    {({
      handleSubmit,
      handleChange,
      values
    }) => (
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item>
            <InputLabel>Routine Creator</InputLabel>
            <FormControl
              sx ={{
                marginTop: 0,
                width: 250,
                height: 50,
              }}
            >
              <Select
                labelId="simple-select-label"
                name="routine_creator"
                onChange={handleChange}
                defaultValue={values?.routine_creator}
                MenuProps={MenuProps}
              >
                {teachers ? teachers?.map((teacher) => {
                return <MenuItem key={teacher.id} value={teacher.id}>{teacher.name}</MenuItem>;
                })
                : null}
              </Select>
              <FormHelperText>Select a routine creator</FormHelperText>
            </FormControl>
          </Grid>

              <Grid item >
              <InputLabel sx={{ mx: 12.5 }}>Class Room</InputLabel>
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
                    name="room_id"
                    onChange={handleChange}
                    defaultValue={values?.room_id}
                    MenuProps={MenuProps}
                  >
                    {classRooms ? classRooms?.map((classRoom) => {
                    return <MenuItem key={classRoom.id} value={classRoom.id}>{classRoom.name}</MenuItem>;
                    })
                    : null}
                  </Select>
                  <FormHelperText>Select a class room</FormHelperText>
                  </FormControl>
              </Grid>

              <Grid item>
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

              <Grid item>
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
                  {/* <InputLabel id="simple-select-label">Blood Group</InputLabel> */}
                  <Select
                  labelId="simple-select-label"
                  name="subject_id"
                  onChange={handleChange}
                  defaultValue={values?.subject_id}
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
              <InputField
                  label="starting_hour"
                  id="starting_hour"
                  name="starting_hour"
                  placeholder="Enter starting_hour"
                  type="text"
              />
              <InputField
                  label="ending_hour"
                  id="ending_hour"
                  name="ending_hour"
                  placeholder="Enter ending_hour"
                  type="text"
              />
              <InputField
                  label="starting_minute"
                  id="starting_minute"
                  name="starting_minute"
                  placeholder="Enter starting_minute"
                  type="text"
              />
              <InputField
                  label="ending_minute"
                  id="ending_minute"
                  name="ending_minute"
                  placeholder="Enter ending_minute"
                  type="text"
              />
              <InputField
                  label="day"
                  id="day"
                  name="day"
                  placeholder="Enter day"
                  type="text"
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

export default RoutineEditForm;
