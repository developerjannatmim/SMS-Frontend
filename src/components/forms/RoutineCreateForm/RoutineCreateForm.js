import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

import getRoutineCreateInitialValues from './getRoutineCreateInitialValues';
import InputField from '../../InputField';

const routineValidationSchema = Yup.object().shape({
    class_id: Yup.string().required(),
    section_id: Yup.string().email().required(),
    routine_creator: Yup.string().min(6).required(),
    subject_id: Yup.string().required(),
    room_id: Yup.string().required(),
    starting_hour: Yup.string().required(),
    ending_hour: Yup.string().required(),
    starting_minute: Yup.string().required(),
    ending_minute: Yup.string().required(),
    day: Yup.string().required()
});

const RoutineCreateForm = ({ routine, onSubmit }) => {
    return (routine === undefined || routine !== null) && (
        <Formik
            initialValues={getRoutineCreateInitialValues(routine)}
            onSubmit={onSubmit}
            validationSchema={routineValidationSchema}
        >
        {({
            handleSubmit,
            isSubmitting,
        }) => (
            <from noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <InputField
                    label="class_id"
                    id="class_id"
                    name="class_id"
                    placeholder="Enter class_id"
                    type="text"
                />
                <InputField
                    label="section_id"
                    id="section_id"
                    name="section_id"
                    placeholder="Enter section_id"
                    type="text"
                />
                <InputField
                    label="routine_creator"
                    id="routine_creator"
                    name="routine_creator"
                    placeholder="Enter routine_creator"
                    type="text"
                />
                <InputField
                    label="subject_id"
                    id="subject_id"
                    name="subject_id"
                    placeholder="Enter subject_id"
                    type="text"
                />
                <InputField
                    label="room_id"
                    id="room_id"room_id
                    name="room_id"
                    placeholder="Enter room_id"
                    type="text"
                />
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

export default RoutineCreateForm;
