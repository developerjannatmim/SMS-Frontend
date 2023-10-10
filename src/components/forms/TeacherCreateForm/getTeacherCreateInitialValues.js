const getTeacherCreateInitialValues = teacher => ({
  name: teacher?.name || '',
  email: teacher?.email || '',
  password: teacher?.password || '',
  gender: teacher?.gender || '',
  birthday: teacher?.birthday || '',
  address: teacher?.address || '',
  phone: teacher?.phone || '',
  photo: teacher?.photo || '',
  blood_group: teacher?.blood_group || ''
});

export default getTeacherCreateInitialValues;