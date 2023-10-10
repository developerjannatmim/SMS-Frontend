const getParentCreateInitialValues = parent => ({
  name: parent?.name || '',
  email: parent?.email || '',
  password: parent?.password || '',
  gender: parent?.gender || '',
  birthday: parent?.birthday || '',
  address: parent?.address || '',
  phone: parent?.phone || '',
  photo: parent?.photo || '',
  blood_group: parent?.blood_group || ''
});

export default getParentCreateInitialValues;