import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import TeacherEditForm, { getTeacherInitialValues } from '../../../components/forms/TeacherEditForm';
import MainCard from '../../../components/MainCard';
import swal from 'sweetalert';

const TeacherEdit = () => {
  const navigate = useNavigate();
  const { teacherId } = useParams();

  const [teacher, setTeacher] = useState(null);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('gender', values.gender);
    formData.append('birthday', values.birthday);
    formData.append('phone', values.phone);
    formData.append('address', values.address);
    formData.append('photo', values.photo);
    formData.append('blood_group', values.blood_group);

    console.log(values);
    console.log(formData);

    fetch(`http://127.0.0.1:8000/api/teachers/${teacherId}`, {
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
          values: getTeacherInitialValues(response.data?.teacher),
        });
        swal('Success', response?.message, "success");
        navigate("/teachers");
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/teachers/${teacherId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
    .then((response) => response.json())
    .then((response) => {
      console.info(response);
      setTeacher(response.data?.teacher);
    })
    .catch((error) => {
      console.error(error);
      setTeacher(null);
    });
  }, [teacherId]);

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
              Teacher Edit
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/teachers">
              <Button
                color="primary"
                startIcon={<ArrowLeftOutlined />}
                variant="contained"
              >
                Teacher List
              </Button>
            </Link>
          </Grid>
        </Grid>
        <MainCard contentSX={{ p: 3 }} sx={{ mt: 2 }}>
          <TeacherEditForm
            teacher={teacher}
            onSubmit={handleSubmit}
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default TeacherEdit;
