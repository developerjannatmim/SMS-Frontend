const getStudentInitialValues = student => {
  let userInformation;
  try {
    userInformation = JSON.parse(student.user_information);
  } catch (error) { /**/ }

  return {
    name: student?.name || '',
    email: student?.email || '',
    gender: userInformation?.gender || '',
    birthday: userInformation?.birthday ? new Date(userInformation.birthday) : '',
    address: userInformation?.address || '',
    phone: userInformation?.phone || '',
    photo: userInformation?.photo || '',
    blood_group: userInformation?.blood_group || '',
  };
};

export default getStudentInitialValues;