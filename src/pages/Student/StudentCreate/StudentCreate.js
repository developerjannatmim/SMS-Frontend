import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import StudentCreateForm, { getStudentCreateInitialValues } from '../../../components/forms/StudentCreateForm';
import MainCard from '../../../components/MainCard';

const StudentCreate = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm, setSubmitting }) => {

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('gender', values.gender);
    formData.append('address', values.address);
    formData.append('phone', values.phone);
    formData.append('photo', values.photo);
    formData.append('blood_group', values.blood_group);
    formData.append('birthday', values.birthday);
    console.log(values);

    fetch('http://127.0.0.1:8000/api/students', {
      body: formData,
      headers: {
        Accept: 'application/json',
      },
      method: 'POST',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSubmitting(false);
        resetForm({
          values: getStudentCreateInitialValues(undefined)
        });
        swal('Success', response?.message, "success");
        navigate("/students");
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid alignItems="center" container justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Student Create</Typography>
          </Grid>
          <Grid item>
            <Link to="/students">
              <Button color="primary" startIcon={<ArrowLeftOutlined />} variant="contained">
                Student List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 3 }} sx={{ mt: 2 }}>
          <StudentCreateForm onSubmit={handleSubmit} />
        </MainCard>
      </Grid>
    </Grid>
  );
};
export default StudentCreate;
