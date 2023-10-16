const getTeacherInitialValues = teacher => {
  console.log(teacher?.gender);
  let userInformation;
  try {
    userInformation = JSON.parse(teacher.user_information);
  } catch (error) { /**/ }
  return {
    name: teacher?.name || '',
    email: teacher?.email || '',
    gender: userInformation?.gender || '',
    birthday: userInformation?.birthday ? new Date(userInformation.birthday) : '',
    address: userInformation?.address || '',
    phone: userInformation?.phone || '',
    photo: userInformation?.photo || '',
    blood_group: userInformation?.blood_group || '',
  };
};

export default getTeacherInitialValues;