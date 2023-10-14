import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

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

const MarksCreateForm = ({ marks, onSubmit }) => {
    return (marks === undefined || marks !== null) && (
        <Formik
            initialValues={getMarksCreateInitialValues(marks)}
            onSubmit={onSubmit}
            validationSchema={marksValidationSchema}
        >
        {({
            handleSubmit
        }) => (
            <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <InputField 
                    label="user_id"
                    id="user_id"
                    name="user_id"
                    placeholder="Enter user_id"
                />
                <InputField 
                    label="exam_id"
                    id="exam_id"
                    name="exam_id"
                    placeholder="Enter exam_id"
                    type="text"
                />
                <InputField 
                    label="class_id"
                    id="class_id"
                    name="class_id"
                    placeholder="Enter class_id"
                    type="password"
                />
                <InputField 
                    label="section_id"
                    id="section_id"
                    name="section_id"
                    placeholder="Enter section_id"
                />
                <InputField 
                    label="marks"
                    id="marks"
                    name="marks"
                    placeholder="Enter marks"
                />
                <InputField 
                    label="grade_point"
                    id="grade_point"
                    name="grade_point"
                    placeholder="Enter grade_point"
                />
                <InputField 
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
