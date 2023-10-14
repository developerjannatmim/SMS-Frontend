import { Button, Grid } from '@mui/material';
import { Formik } from 'formik';
import Select from '@mui/material/Select';
// import * as React from 'react';
import * as Yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import getAdminInitialValues from './getAdminInitialValues';
import InputField from '../../InputField';

const adminValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  gender: Yup.string().required(),
  birthday: Yup.string().required(),
  address: Yup.string().required(),
  phone: Yup.string().required(),
  photo: Yup.string().required(),
  blood_group: Yup.string().required()
});

const ITEM_HEIGHT = 28;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const AdminEditForm = ({ admin, onSubmit }) => {
  // let userInformation;
  // try {
  //   userInformation = JSON.parse(admin.user_information?.blood_group);
  // } catch (error) { /**/ }

  // const [value, setValue] = React.useState(userInformation);

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    (admin === undefined || admin !== null) && (
      <Formik
        initialValues={getAdminInitialValues(admin)}
        onSubmit={onSubmit}
        validationSchema={adminValidationSchema}
      >
        {({
          handleSubmit, handleChange
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <InputField
                label="Name"
                id="name"
                name="name"
                placeholder="Enter name"
            />
              <InputField
                label="Email"
                id="email"
                name="email"
                placeholder="Enter email"
                type="email"
              />
              <InputField
                label="Password"
                id="password"
                name="password"
                placeholder="Enter password"
                type="password"
              />
              <InputField
                label="Gender"
                id="gender"
                name="gender"
                placeholder="Enter gender"
              />
              <InputField
                label="Birthday"
                id="birthday"
                name="birthday"
                placeholder="Enter birthday"
              />
              <InputField
                label="Address"
                id="address"
                name="address"
                placeholder="Enter address"
              />
              <InputField
                label="Phone"
                id="phone"
                name="phone"
                placeholder="Enter phone"
              />
              <InputField
                id="photo"
                name="photo"
                placeholder="Enter photo"
                type="text"
              />
              <Grid item>
              <InputLabel id="multiple-name-label">Blood Group</InputLabel>
                <Select
                  sx={{ width: 485 }}
                  labelId="multiple-name-label"
                  id="multiple-name"
                  name="blood_group"
                  MenuProps={MenuProps}
                  onChange={handleChange}
                  display
                >
                  <MenuItem value={ 'a+'}>A+</MenuItem>
                  <MenuItem value={ 'a' }>A</MenuItem>
                  <MenuItem value={ 'a-' }>A-</MenuItem>
                  <MenuItem value={ 'ab+'}>AB+</MenuItem>
                  <MenuItem value={'ab+' }>AB-</MenuItem>
                  <MenuItem value={ 'o'}>O</MenuItem>
                </Select>
              </Grid>
              {/* <InputField
                label="Blood Group"
                id="blood_group"
                name="blood_group"
                placeholder="Enter blood group"
              /> */}
              <Grid item xs={12}>
                <Button
                  color="primary"
                  onClick={handleSubmit}
                  fullWidth type="submit"
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
  );
};

export default AdminEditForm;
