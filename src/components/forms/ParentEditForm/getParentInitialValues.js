const getParentInitialValues = parent => {
  let userInformation;
  try {
      userInformation = JSON.parse(parent.user_information);
  } catch (error) { /**/ }

  return {
    name: parent?.name || '',
    email: parent?.email || '',
    gender: userInformation?.gender || '',
    birthday: userInformation?.birthday ? new Date(userInformation.birthday) : '',
    address: userInformation?.address || '',
    phone: userInformation?.phone || '',
    photo: userInformation?.photo || '',
    blood_group: userInformation?.blood_group || '',
  };
};

export default getParentInitialValues;