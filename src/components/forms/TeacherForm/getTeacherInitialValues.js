const getTeacherInitialValues = teacher => ({
  name: teacher?.name || '',
  email: teacher?.email || '',
  password: teacher?.password || '',
  gender: teacher?.gender || '',
  birthday: teacher?.class_id || '',
  address: teacher?.address || '',
  phone: teacher?.phone || '',
  photo: teacher?.photo || '',
  blood_group: teacher?.blood_group || ''
});

export default getTeacherInitialValues;