const getParentInitialValues = parent => ({
  name: parent?.name || '',
  email: parent?.email || '',
  password: parent?.password || '',
  gender: parent?.gender || '',
  birthday: parent?.class_id || '',
  address: parent?.address || '',
  phone: parent?.phone || '',
  photo: parent?.photo || '',
  blood_group: parent?.blood_group || ''
});

export default getParentInitialValues;