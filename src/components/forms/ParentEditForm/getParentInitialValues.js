const getParentInitialValues = parent => ({
  name: parent?.name || '',
  email: parent?.email || '',
  password: parent?.password || '',
  gender: JSON.parse(parent.user_information)?.gender || '',
  birthday: JSON.parse(parent.user_information)?.birthday || '',
  address: JSON.parse(parent.user_information)?.address || '',
  phone: JSON.parse(parent.user_information)?.phone || '',
  photo: JSON.parse(parent.user_information)?.photo || '',
  blood_group: JSON.parse(parent.user_information)?.blood_group || ''
});

export default getParentInitialValues;