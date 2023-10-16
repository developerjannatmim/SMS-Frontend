const getAdminInitialValues = (admin) => {
  let userInformation;
  try {
    userInformation = JSON.parse(admin.user_information);
  } catch (error) {
    /**/
  }

  return {
    name: admin?.name || '',
    email: admin?.email || '',
    gender: userInformation?.gender || '',
    birthday: userInformation?.birthday ? new Date(userInformation.birthday) : '',
    address: userInformation?.address || '',
    phone: userInformation?.phone || '',
    photo: userInformation?.photo || '',
    blood_group: userInformation?.blood_group || ''
  };
};
export default getAdminInitialValues;
