import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

import getClassesInitialValues from './getClassesInitialValues';
import InputField from '../../InputField';

const classesValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    section_id: Yup.string().required()
});

const ClassesEditForm = ({ classes, onSubmit }) => {
    return (classes === undefined || classes !== null) && (
        <Formik
            initialValues={getClassesInitialValues(classes)}
            onSubmit={onSubmit}
            validationSchema={classesValidationSchema}
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
                    label="Classes"
                    id="classes"
                    name="classes"
                    placeholder="Enter classes"
                    type="text"
                />
                <InputField 
                    label="Section"
                    id="section"
                    name="section"
                    placeholder="Enter section"
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

export default ClassesEditForm;
