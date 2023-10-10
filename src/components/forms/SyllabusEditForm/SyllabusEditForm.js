import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

import getSyllabusInitialValues from './getSyllabusInitialValues';
import InputField from '../../InputField';

const syllabusValidationSchema = Yup.object().shape({
    title: Yup.string().required(),
    class_id: Yup.string().required(),
    section_id: Yup.string().required(),
    subject_id: Yup.string().required(),
    file: Yup.string().required()
});

const SyllabusEditForm = ({ syllabus, onSubmit }) => {
    return (syllabus === undefined || syllabus !== null) && (
        <Formik
            initialValues={getSyllabusInitialValues(syllabus)}
            onSubmit={onSubmit}
            validationSchema={syllabusValidationSchema}
        >
        {({
            handleSubmit,
            isSubmitting,
        }) => (
            <from noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <InputField 
                    label="title"
                    id="title"
                    name="title"
                    placeholder="Enter title"
                />
                <InputField 
                    label="class_id"
                    id="class_id"
                    name="class_id"
                    placeholder="Enter class_id"
                />
                <InputField 
                    label="section_id"
                    id="section_id"
                    name="section_id"
                    placeholder="Enter section_id"
                />
                <InputField 
                    label="subject_id"
                    id="subject_id"
                    name="subject_id"
                    placeholder="Enter subject_id"
                />
                <InputField 
                    label="file"
                    id="file"
                    name="file"
                    placeholder="Enter file"
                    type="file"
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

export default SyllabusEditForm;
