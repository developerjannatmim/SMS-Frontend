import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

import getClassInitialValues from './getClassInitialValues';
import InputField from '../../InputField';

const classValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    section_id: Yup.string().required()
});

const ClassForm = ({ class, onSubmit }) => {
    return (class === undefined || class !== null) && (
        <Formik
            initialValues={getClassInitialValues(class)}
            onSubmit={onSubmit}
            validationSchema={classValidationSchema}
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
                    label="Class"
                    id="class"
                    name="class"
                    placeholder="Enter class"
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

export default ClassForm;
