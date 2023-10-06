import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import ParentForm, {getParentInitialValues} from '../../../components/forms/ParentForm';
import MainCard from '../../../components/MainCard';

const ParentCreate = () => {
    const handleSubmit = (values, {resetForm, setSubmitting }) => {
        fetch('http://127.0.0.1:8000/api/parent', {
            body: JSON.stringify({
                ...values,
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
        .then((response) => response.json())
        .then((response) => {
            console.info(response);
            setSubmitting(false);
            resetForm({
                values: getParentInitialValues(undefined),
            });
        })
        .catch((error) => {
            console.error(error);
            setSubmitting(false);
        });
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid
                    alignItems="center"
                    container
                    justifyContent="space-between"
                >
                <Grid item>
                    <Typography variant="h5">
                        Parent Create
                    </Typography>
                </Grid>
                <Grid item>
                    <Link to="/parent">
                    <Button
                        color="primary"
                        startIcon={<ArrowLeftOutlined/>}
                        variant="contained"
                    >
                    Parent List
                    </Button>
                    </Link>
                </Grid>
                </Grid>
                <MainCard contentX={{ p:3 }} sx={{ mt:2 }}>
                <ParentForm onSubmit={handleSubmit} />
                </MainCard>
            </Grid>
        </Grid>
    );
};
export default ParentCreate;