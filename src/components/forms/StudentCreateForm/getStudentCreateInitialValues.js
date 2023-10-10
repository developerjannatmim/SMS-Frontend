const getStudentCreateInitialValues = student => ({
  name: student?.name || '',
  email: student?.email || '',
  password: student?.password || '',
  gender: student?.gender || '',
  birthday: student?.birthday || '',
  address: student?.address || '',
  phone: student?.phone || '',
  photo: student?.photo || '',
  blood_group: student?.blood_group || ''
});

export default getStudentCreateInitialValues;