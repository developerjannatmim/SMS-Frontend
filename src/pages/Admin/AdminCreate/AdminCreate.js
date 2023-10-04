import { ArrowLeftOutlined as ArrowLeftOutlinedIcon } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import AdminForm, {getAdminInitialValues} from '../../../components/forms/AdminForm';
import MainCard from '../../../components/MainCard';

const AdminCreate = () => {
    const handleSubmit = (values, {resetForm, setSubmit}) => {
        fetch('', {
            body: JSON.stringify({
                ...values,
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
        .then((reponse) => response.json())
        .then((response) => {
            console.info(response);
            setSubmitting(false);
            resetForm({
                values: getAdminInitialValues(undefined),
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
                        Admin Create
                    </Typography>
                </Grid>
                <Grid item>
                    <Link to="/admin">
                    <Button
                        color="primary"
                        startIcon={<ArrowLeftOutlined/>}
                        variant="contained"
                    >
                    Admin List
                    </Button>
                    </Link>
                </Grid>
                </Grid>
                <MainCard contentX={{ p:3 }} sx={{ mt:2 }}>
                <AdminForm onSubmit={handleSubmit} />
                </MainCard>
            </Grid>
        </Grid>
    );
};
export default AdminCreate;