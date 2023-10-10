import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

import getClassesCreateInitialValues from './getClassesCreateInitialValues';
import InputField from '../../InputField';

const classesValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    section_id: Yup.string().required()
});

const ClassesCreateForm = ({ singleClass, onSubmit }) => {
    return (singleClass === undefined || singleClass !== null) && (
        <Formik
            initialValues={getClassesCreateInitialValues(singleClass)}
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
                    type="text"
                />
                <InputField 
                    label="Section"
                    id="section_id"
                    name="section_id"
                    placeholder="Enter section_id"
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

export default ClassesCreateForm;
