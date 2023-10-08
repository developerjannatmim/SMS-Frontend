import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

import getSubjectInitialValues from './getSubjectInitialValues';
import InputField from '../../InputField';

const subjectValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    class_id: Yup.string().required()
});

const SubjectForm = ({ subject, onSubmit }) => {
    return (subject === undefined || subject !== null) && (
        <Formik
            initialValues={getSubjectInitialValues(subject)}
            onSubmit={onSubmit}
            validationSchema={subjectValidationSchema}
        >
        {({
            handleSubmit,
            isSubmitting,
        }) => (
            <from noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <InputField 
                    label="Name"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                />
                <InputField 
                    label="class_id"
                    id="class_id"
                    name="class_id"
                    placeholder="Enter class_id"
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

export default SubjectForm;
